Eensy Weensy
====

Eensy Weensy is an example webspider. It's designed to scrape urls of blog posts from [http://borderstylo.com] and output them to a text file. The example is silly, but along with a forthcoming blog post, this should be enough to get you started writing your own Poor Man's webspider.

Prerequisites
-----

* [Firefox](http://www.mozilla.com/en-US/firefox/firefox.html)
* [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/748)
* PHP installed on a server you have access to (like localhost). When I was setting up my first LAMP server, I went to [Ubuntu's directions](https://help.ubuntu.com/community/ApacheMySQLPHP) and copied and pasted my way to victory--maybe it'll help you. Advanced readers will be able to adapt the PHP bit to whatever language they like.

Usage
-----

* Save this project wherever your PHP scripts like to be kept (/var/www for example)
* Edit spider.home in eensyweensy.user.js to point to eensyweensy.php
* Open eensyweensy.user.js in Firefox, then click "Install"
* Open [http://borderstylo.com/posts] in Firefox

 TODO: once eensyweensy.php is written, include sample output here 

License
-------

Copyright 2010 Ryan Wolf

Eensy Weensy is released under the Tumbolia Public License. See LICENSE for more details.
