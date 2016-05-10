var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var FormView = Backbone.View.extend({
    className: 'create-form',

    template: _.template(require('./formView.html')),

    initialize: function () {

    },

    render: function () {
        this.$el.html(this.template());
    },

    events: {
        'click .cancel': 'cancel',
        'click .captcha': 'captcha',
        'click .submit': 'submit'
    }
});

module.exports = FormView;