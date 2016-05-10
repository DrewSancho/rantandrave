var Backbone = require('backbone');
var $ = require('jquery');

var AppView = require('./components/Views/AppView');
var AppRouter = require('./appRouter');

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

var appView = new AppView();

appView.render();

var router = new AppRouter();

document.body.appendChild(appView.el);

Backbone.history.start();