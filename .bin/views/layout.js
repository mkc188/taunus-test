(function(){function test(it
/**/) {
var out=' '+(it.partial)+' ';return out;
}function layout(it
/**/) {
var out='<!doctype html><html class="no-js" lang=""> <head> <meta charset="utf-8"> <meta name="description" content=""> <meta name="viewport" content="width=device-width, initial-scale=1"> <title>'+(it.model.title)+'</title> <!-- Place favicon.ico in the root directory --> <!-- build:css css/vendor.css --> <!-- bower:css --> <link rel="stylesheet" href="/bower_components/normalize-css/normalize.css" /> <!-- endbower --> <!-- endbuild --> <!-- build:css css/main.css --> <link rel="stylesheet" href="css/main.css"> <!-- endbuild --> <!-- build:js js/vendor/modernizr.js --> <script src="/bower_components/modernizr/modernizr.js"></script> <!-- endbuild --> </head> <body> <!--[if lt IE 10]> <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p> <![endif]--> <main>   '+(it.partial)+'  </main> <!-- Google Analytics: change UA-XXXXX-X to be your site\'s ID. --> <script> (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]= function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date; e=o.createElement(i);r=o.getElementsByTagName(i)[0]; e.src=\'//www.google-analytics.com/analytics.js\'; r.parentNode.insertBefore(e,r)}(window,document,\'script\',\'ga\')); ga(\'create\',\'UA-XXXXX-X\');ga(\'send\',\'pageview\'); </script> <!-- build:js js/vendor.js --> <!-- bower:js --> <!-- endbower --> <!-- endbuild --> <!-- build:js js/main.js --> <script src="/js/all.js" type="text/javascript" charset="utf-8"></script> <script src="js/main.js"></script> <!-- endbuild --> </body></html>';return out;
}var itself=layout, _encodeHTML=(function (doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	}());itself.test=test;if(typeof module!=='undefined' && module.exports) module.exports=itself;else if(typeof define==='function')define(function(){return itself;});else {_page.render=_page.render||{};_page.render['layout']=itself;}}());