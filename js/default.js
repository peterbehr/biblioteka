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
    },
    
    query_hash: function () {
        var parameters = {};
        var pairs = location.search.replace('?', '').split('&');
        if (pairs[0]) {
            for (var i = 0; i < pairs.length; i++) {
                pair = pairs[i].split('=');
                parameters[pair[0]] = pair[1];
            }
        }
        return(parameters);
    },
    
    // END utilities
    
    // BEGIN classes
    
    Timer: function (interval) {
        // want a timer object which can be started, stopped, and reset
        this.timestamp = 0;
        this.interval = interval || 100;
        var self;
        this.start = function () {
            self = this;
            self.clock = setInterval(function () {
                self.timestamp += self.interval;
            }, self.interval);
            return(self.timestamp);
        };
        this.stop = function () {
            clearInterval(self.clock);
            return(self.timestamp);
        };
        this.read = function () {
            return(self.timestamp);
        };
        this.clear = function () {
            self.timestamp = 0;
            return(self.timestamp);
        };
        // can this be done without 'new'?
        // just a function that returns an instance of itself?
    },
    
    // END classes
    
    pass: function () {}
    
};

window.Biblioteka = window.B = Biblioteka;