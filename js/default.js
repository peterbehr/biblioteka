/* BEGIN script import */

function import_js(srcs, callback) {
    var length = srcs.length;
    for (var i = 0; i < length; i++) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = srcs[i];
        var first = document.getElementsByTagName('script')[0]; first.parentNode.insertBefore(script, first);
    }
    callback();
}

    import_js(  [   '../js/others/jquery-1.5.2.min.js',
                    '../js/others/jquery_plugin_md5.js' ],
                function () { return; } );

/* END script import */



/* BEGIN utilities */

/* END utilities */