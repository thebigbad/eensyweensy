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
  // defaults
  this.jquery = 'http://jquery.com/src/jquery-latest.js';
  this.home = 'http://localhost/eensyweensy/eensyweensy.php';
  this.grabber = function ($) { return {}; };
};

Spider.prototype.insert_jquery = function () {
  /* source: http://joanpiedra.com/jquery/greasemonkey/ */
  var GM_JQ = document.createElement('script');
  GM_JQ.src = this.jquery;
  GM_JQ.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(GM_JQ);
  var that = this;
  function GM_wait () {
    if (typeof unsafeWindow.jQuery == 'undefined') {
      window.setTimeout(GM_wait, 100);
    }
    else {
      var $ = unsafeWindow.jQuery;
      that.grab_data($);
    }
  }
  GM_wait();
};

Spider.prototype.grab_data = function ($) {
  var data = this.grabber($);
  this.phone_home(data);
};

Spider.prototype.phone_home = function (data) {
  /* source: http://diveintogreasemonkey.org/api/gm_xmlhttprequest.html */
  GM_xmlhttpRequest({
    method: 'POST',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    data: "data=" + JSON.stringify(data),
    url: this.home,
    onload: this.handle_results,
  });
};

Spider.prototype.handle_results = function (response) {
  var data;
  // JSON.parse barfs top-level errors on failure
  try {
    data = JSON.parse(response.responseText);
  }
  catch (e) {
    alert("debugging party:\n" + JSON.stringify(response));
    return;
  }
  if (data.error) { alert(data.error); return; }
  if (!data.url) { alert("no error, but no url to go to"); return; }

  document.location.assign(data.url);
};

Spider.prototype.go = function () {
  this.insert_jquery();
};

// our particular spider
var spider = new Spider();
spider.grabber = function ($) {
  var urls = [];
  $('.post-footer > a:nth-child(2)').each(function (i, node) {
    urls.push(node.href);
  });
  var next_page_button = $('.next_page');
  var on_last_page = next_page_button.hasClass('disabled');
  var data = {
    href: document.location.href,
    urls: urls,
    on_last_page: on_last_page,
  };
  return data;
};
spider.go();
