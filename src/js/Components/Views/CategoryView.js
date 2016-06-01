var Backbone = require('backbone');
var _ = require('underscore');

var CategoryView = Backbone.View.extend({
    className: 'category-view',

    template: _.template(require('./categoryView.html')),

    initialize: function () {

    },

    render: function () {

    },

    events: {

    }
});

module.exports = CategoryView;