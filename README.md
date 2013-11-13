bootstrap test project + grunt automation
=========================================

What it is:
----------
- minimal java web application
- integrated bootstrap + jquery + requirejs
- uses *[Grunt](http://gruntjs.com/)* for minifying CSS and JS

Requirements:
-------------
- *[Maven](http://maven.apache.org/ )*
- *[NodeJS + npm](http://nodejs.org/)*

How to run:
-----------
After cloning, execute commands in project directory:

1.  **npm install** (installs Grunt plugin dependencies)
2.  **grunt prod** (compresses resouces, for development use '***dev***' instead of '***prod***')
3.  **mvn tomcat:run** (runs embedded tomcat with application)
