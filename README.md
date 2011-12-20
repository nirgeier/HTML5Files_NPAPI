HTML5 File API, FileSystemAPI, NPAPI
========================================================================

This git hub contains the slides and demos for the FEDS Lectures.
Clone this repo and open index.html

Demos
------------------------------------------------------------------------
The repository contains the following FileAPI demos

* [Simple](https://github.com/nirgeier/HTML5Files_NPAPI/tree/master/demos/01-InputFile.html) Simple input type=file
* [Drag & Drop ](https://github.com/nirgeier/HTML5Files_NPAPI/tree/master/demos/02-InputFileD&D.html) Drag and drop support on input type=file
* [Copy & Paste ](https://github.com/nirgeier/HTML5Files_NPAPI/tree/master/demos/03-CopyPaste.html) Copy and paste images inline
* [Slice](https://github.com/nirgeier/HTML5Files_NPAPI/tree/master/demos/04-Slice.html) Read partial content of file
* [Progress](https://github.com/nirgeier/HTML5Files_NPAPI/tree/master/demos/05-Progress.html) Display read progress of loading file
* [Process MP3](https://github.com/nirgeier/HTML5Files_NPAPI/tree/master/demos/06-Mp3.html) Read MP3 Id3 tag + generate sound visualization


NPAPI
------------------------------------------------------------------------
This extension is for demonstrating and show case on how to use NPAPI.
NPAPI can grant the developer full access to the Hard Drive of the user.
The user need to install extension in order to allow it.

NPAPI is supported by almost all browsers (IE, FF, Chrome).
Each browser has diffrent implementaion and configuration 

For example:
Chrome : 
[Demo extension] (https://github.com/nirgeier/HTML5Files_NPAPI/tree/master/NPAPI)
* The demo will do the following
* Will create folder named nirgeier under your C driver
* Will grab the first <img> from any site you visit and save it in the above folder
* Will read the ["private"](https://github.com/nirgeier/HTML5Files_NPAPI/blob/master/NPAPI/myPrivateFile.txt) file (can be any file on your hard drive :-) and sent it to a url. 
* The demo url is localhost but of course it can be any web url.
* The php demo file contains single line of code which echo the request parameters it got.


http://localhost/lecture.php
------------------------------------------------------------------------
`<?php print_r($_REQUEST); ?>`


More demo options
------------------------------------------------------------------------
From the console of the backgorund page execute this code:
```html
    MyDemo.listFiles();
    MyDemo.sendMyPrivateFile();
```

			

