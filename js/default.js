/*

Biblioteka
Version 0
Peter Behr made this
http://peterbehr.net

*/

var Biblioteka = {
    
    // BEGIN utilities
    
    import_js: function (src, callback) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        var first = document.getElementsByTagName('script')[0]; first.parentNode.insertBefore(script, first);
        callback();
    }
    
    // END utilities
    
}

window.Biblioteka = window.Bi = Biblioteka;
