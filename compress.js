var Q = require('q');
var FS = require('fs');
var walk = require('walk');
var compressor = require('yuicompressor');
var partial = require('partial');

function returnFiles(location, extensioon) {
    var deferred = Q.defer();
    var files = [];
    var walker = walk.walk(location, { followLinks: false });

    walker.on('file', function (root, stat, next) {

        var name = stat.name;
        var endsWithExtension = name.indexOf(extensioon, name.length - extensioon.length) !== -1
        var notMinified = name.indexOf(".min") === -1;
        if (endsWithExtension && notMinified) {
            files.push(root + '/' + name);
        }

        next();
    });

    walker.on('end', function () {
        deferred.resolve(files);
    });

    return deferred.promise;
}

function readFilesContent(fileInputArray) {
    var deferred = Q.defer();
    var filesContent = "";

    var fileCounter = 0;
    var readFileHandler = function (err, content) {
        if (err) {
            console.error(err);
        } else {
            filesContent += content;
        }
        fileCounter++;
        console.log(fileCounter + "/" + fileInputArray.length);
        if (fileCounter == fileInputArray.length) {
            deferred.resolve(filesContent);
        }
    };

    fileInputArray.forEach(function (filePath) {
        console.log("reading contents of %s", filePath);
        FS.readFile(filePath, readFileHandler);
    });
    return deferred.promise;
}

function compress(type, fileInputArray, targetLocation, targetFileName) {
    readFilesContent(fileInputArray).then(function (script) {
        compressor.compressString(script, {
            //Compressor Options:
            charset: 'utf8',
            type: type,
            nomunge: true,
            'line-break': 80
        }, function (err, data, extra) {
            if (err) {
                console.error("error: %s", err);
            }
            if (extra) {
                console.warn("warn: %s", extra);
            }
            if (data) {
                //console.log("compressed script: \n%s", data);
                FS.appendFile(targetLocation + "/" + targetFileName, data, function (err) {
                    if (err) throw err;
                    console.log('compressed %s was saved to %s', type, targetFileName);
                });
            }
        });


    });
}

returnFiles("src/main/webapp/js", "js").then(
    function (script) {
        compress("js", script, "src/main/webapp/compressed", "script.js");
    }
);
returnFiles("src/main/webapp/css", "css").then(
    function (script) {
        compress("css", script, "src/main/webapp/compressed", "style.css");
    }
);

