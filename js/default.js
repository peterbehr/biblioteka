function import_js(srcs, callback) {
    var length = srcs.length;
    for (var i = 0; i < length; i++) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = srcs[i];
        var script_first = document.getElementsByTagName('script')[0]; script_first.parentNode.insertBefore(script, script_first);
    }
    callback();
}

import_js(  [   'http://peterbehr.net/biblioteka/js/jquery-1.5.2.min.js',
                'http://peterbehr.net/biblioteka/js/jquery_plugin_md5.js'   ],
            function () { return; } );



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