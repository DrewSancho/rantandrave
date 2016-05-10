var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var dispatcher = require('../Utility/dispatcher');
var HeaderView = require('./HeaderView');

var AppView = Backbone.View.extend({
    className: 'appView',

    template: _.template(require('./appView.html')),

    initialize: function () {
        this.headerView = new HeaderView();
        this.listenTo(dispatcher, 'app:show', this.show);
    },

    show: function (view) {
        if (this.child) {
            console.log('hey');
            this.child.remove();
        }
        view.render();
        this.$('.content-slot').append(view.$el);
        this.headerView.render();
        this.child = view;
    },

    render: function () {
        this.$el.html(this.template());
        this.$('.header-slot').append(this.headerView.$el);
        this.headerView.render();
    },

    remove: function () {
        this.headerView.remove();
        Backbone.prototype.remove.call(this);
    }
});

module.exports = AppView;