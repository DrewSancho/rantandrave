var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var dispatcher = require('../Utility/dispatcher');
var CategoryView = require('./CategoryView');

var HomeView = Backbone.View.extend({
    className: 'default-view',

    template: _.template(require('./homeView.html')),

    initialize: function () {
    },

    render: function () {
        this.$el.html(this.template());
    },

    events: {
        'click .category-topic': 'showTopic',
        'click .create': 'create'
    },

    showTopic: function (e) {
        this.category = e.target.dataset.category;
        this.collection = e.collection;
        var topic = $('.category-topic');
        console.log(e.collection);

        $('.intro').remove();

        if (topic.hasClass('active')) {
            topic.removeClass('active');

            $(e.target).addClass('active');
        } else if (!topic.hasClass('active')) {
            $(e.target).addClass('active');
        }
    },

    create: function () {
        window.location.hash = 'create';
    }
});

module.exports = HomeView;