var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var HomeView = Backbone.View.extend({
    className: 'home',

    template: _.template(require('./homeView.html')),

    initialize: function () {
        navigator.geolocation.getCurrentPosition(function success (position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            console.log(lat + ',' + lon);
        });
    },

    render: function () {
        console.log('hey there lonely girl');
        this.$el.html(this.template());
    },

    events: {
        'click .family': 'family',
        'click .work': 'work',
        'click .school': 'school',
        'click .social': 'social',
        'click .food': 'food',
        'click .misc': 'misc',
        'click .create': 'create'
    },
    family: function () {
        console.log('family');
    },
    work: function () {
        console.log('work');
    },
    school: function () {
        console.log('school');
    },
    social: function () {
        console.log('social');
    },
    food: function () {
        console.log('food');
    },
    misc: function () {
        console.log('misc');
    },
    create: function () {
        console.log('create');
    }
});

module.exports = HomeView;