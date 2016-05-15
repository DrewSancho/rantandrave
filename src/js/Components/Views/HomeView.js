var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var HomeView = Backbone.View.extend({
    className: 'default-view',

    template: _.template(require('./homeView.html')),

    initialize: function () {
    },

    render: function () {
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
        window.location.hash = 'rant';
    }
});

module.exports = HomeView;