(function(){function test(it
/**/) {
var out=' '+(it.partial)+' ';return out;
}function layout(it
/**/) {
var out='<title>'+(it.model.title)+'</title><main>   '+(it.partial)+' </main><script src="/js/all.js" type="text/javascript" charset="utf-8"></script>';return out;
}var itself=layout, _encodeHTML=(function (doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	}());itself.test=test;if(typeof module!=='undefined' && module.exports) module.exports=itself;else if(typeof define==='function')define(function(){return itself;});else {_page.render=_page.render||{};_page.render['layout']=itself;}}());