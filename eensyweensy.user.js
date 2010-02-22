// ==UserScript==
// @name           Eensy Weensy
// @namespace      example.com
// @include        http://borderstylo.com/posts*
// ==/UserScript==
// Copyright 2010 Ryan Wolf <rwolf@borderstylo.com>
//
// This file is part of eensyweensy and is released under the
// Tumbolia Public License. See LICENSE for more details.

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
  var GM_JQ = doc.createElement('script');
  GM_JQ.src = this.;
  GM_JQ.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(GM_JQ);
  var that = this;
  function GM_wait () {
    if (typeof unsafeWindow.jQuery == 'undefined') {
      window.setTimeout(GM_wait,100);
    }
    else {
      that.$ = unsafeWindow.jQuery;
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
Spider.prototype.go = function () {
  this.insert_jquery();
};

/* our fun starts here */
var spider = new Spider();
spider.home = 'http://localhost/borderstylo_grabber.php'
spider.grabber = function ($) {
  var urls = [];
  $('.post-footer > a:nth-child(2)').each(function (i, node) {
    urls.push(node.href);
  });
  var next_page_button = $('.next_page');
  var on_last_page = next_page_button.hasClass('disabled');
  var data = {
    urls: urls,
    on_last_page: on_last_page,
  };
  return data;
};
spider.go();
