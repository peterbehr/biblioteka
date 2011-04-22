<script type="text/javascript">

/*

// single quotes
// Logging: Venkman, fvlogger
// the closure ()()
// js cookies
// decide on whitespace function()
// http://expressjs.com/guide.html
// semicolons?
// ajax utilities
// inside or outside document window
// browser detection
// browser html5 element support

<!--[if lt IE 9]>
<script>
  var e = ("abbr,article,aside,audio,canvas,datalist,details," +
    "figure,footer,header,hgroup,mark,menu,meter,nav,output," +
    "progress,section,time,video").split(',');
  for (var i = 0; i < e.length; i++) {
    document.createElement(e[i]);
  }
</script>
<![endif]-->

*/

function import_js(url) {
    var script = document.createElement('script');
    script.type('text/javascript');
    script.src(url);
    document.body.appendChild(script);
}

import_js('http://peterbehr.net/biblioteka/js/jquery-1.5.2.min.js');
import_js('http://peterbehr.net/biblioteka/js/jquery_plugin_md5.js');

$('input').focus(function () { // input field, bind on focus
});

$('input').blur(function () {
});

/* BEGIN Google Analytics */

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-22850350-1']);
_gaq.push(['_setDomainName', 'none']);
_gaq.push(['_setAllowLinker', true]);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

/* END Google Analytics */

</script>