// ==UserScript==
// @name           Borderstylo Blog Crawler
// @namespace      example.com
// @include        http://borderstylo.com/posts*
// ==/UserScript==
/*
Copyright 2010, Ryan Wolf

Copying and distribution of this file, with or without modification, are
permitted in any medium without royalty provided the copyright notice and
this notice are preserved.

TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. opan saurce LOL
*/

var Spider = function () {
  this.jquery = 'http://jquery.com/src/jquery-latest.js';
  this.home = 'http://google.com';
  this.grabber = function ($) {
    var data = { url: document.location.href; };
    return data;
  };
};

Spider.prototype.insert_jquery = function () {
  /* source: http://joanpiedra.com/jquery/greasemonkey/ */
  // Add jQuery
  var GM_JQ = doc.createElement('script');
  GM_JQ.src = this.;
  GM_JQ.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(GM_JQ);
  // Check if jQuery's loaded
  var that = this;
  function GM_wait () {
    if (typeof unsafeWindow.jQuery == 'undefined') {
      window.setTimeout(GM_wait,100);
    }
    else {
      that.$ = unsafeWindow.jQuery;
      // here we call our function
      that.grab_data();
    }
  }
  GM_wait();
};

Spider.prototype.grab_data = function ($) {
  var data = this.grabber(that.$);
  this.phone_home(data);
};

Spider.prototype.phone_home = function (data) {
  /* source: http://diveintogreasemonkey.org/api/gm_xmlhttprequest.html */
  GM_xmlhttpRequest({
    method: 'POST',
    data: this.$.stringify(data),
    url: this.home,
    onload: this.handle_results,
  });
};

Spider.prototype.handle_results = function (response) {
  alert(response.responseText);
};

/* our fun starts here */
var spider = new Spider();
spider.home = 'http://localhost/borderstylo_grabber.php'
spider.grabber = function ($) {
};
spider.go();




















function scrape_page () {
  var urls = [];
  $('.post-footer > a:nth-child(2)').each(function (i, node) {
    urls.push(node.href);
  });
  var next_page_button = $('.next_page');
  var on_last_page = next_page_button.hasClass('disabled');
  var results = {
    urls: urls,
    on_last_page: on_last_page,
  };
  alert(JSON.stringify(results));
  //phone_home(results);
}

function phone_home (results) {
}
