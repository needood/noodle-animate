require("../build/animate.min");
var each = require("./each");
Noodle = require("noodle");
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'.split(" ");
Noodle.setMutator("animate",function(animationName,cb){
    var self = this;
    self.$addClass('animated ' + animationName);
    each(animationEnd,function(eventItem){
        self.$one(eventItem, function() {
            self.$removeClass('animated ' + animationName);
            cb(self);
        });
    });
});
