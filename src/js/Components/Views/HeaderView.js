var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var HeaderView = Backbone.View.extend({
    className: 'header',

    template: _.template(require('./headerView.html')),

    render: function () {
        this.$el.html(this.template());
    },

    events: {
        'click .home': 'goHome'
    },

    goHome: function () {
        window.location.hash = '';
    }
});

module.exports = HeaderView;