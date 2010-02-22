Eensy Weensy
====

Eensy Weensy is an example webspider. It's designed to scrape urls of blog posts from <http://borderstylo.com> and output them to a text file. The example is silly, but along with a forthcoming blog post, this should be enough to get you started writing your own Poor Man's webspider.

Naming
-----

The Eensy Weensy Spider is the protagonist of a children's song (see wiki's [Eensy Weensy Spider](http://en.wikipedia.org/wiki/Eensy_Weensy_Spider) for more details).

I feel its' smallness, fragility and resilience are admirable qualities which are also found in this webcrawler. While the spider's ascendency, fall, and triumphant return more closely parallels stories like Henley's "Invictus," Dante's "The Diving Comedy," and Fitzgerald's "The Curious Case of Benjamin Button", it's also a fairly accurate depiction of the life and times of a webcrawler.

If any of this sounds sensible, I have a bridge I'd like to sell you.

"Eensy Weensy" is pretty fun to say, and is the name of a spider. Case closed.

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
* Open [http://borderstylo.com/posts](http://borderstylo.com/posts)

 TODO: once eensyweensy.php is written, include sample output here 

License
-------

Copyright 2010 Ryan Wolf <rwolf@borderstylo.com>

Eensy Weensy is released under the Tumbolia Public License. See LICENSE for more details.
