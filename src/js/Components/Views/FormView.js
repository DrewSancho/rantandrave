var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var mainCollection = require('../Collection/MainCollection');

var FormView = Backbone.View.extend({
    className: 'create-form',

    template: _.template(require('./formView.html')),

    initialize: function () {
    },

    render: function () {
        this.$el.html(this.template());
    },

    events: {
        'click #drop-button': 'appear',
        'click .category-select li': 'onCategoryClick',
        'click .cancel': 'cancel',
        'click .submit': 'submit'
    },

    appear: function () {
        var myClass = $('.dropdown-content');
        var button = $('#drop-button');
        function display () {
            myClass.css('display', 'none');
            $(this).removeClass('animated ' + 'fadeOut');
        }
        if (button.hasClass('.active')) {
            myClass.animateCss('fadeOut', display);
            button.removeClass('.active');
        } else if (!button.hasClass('.active')) {
            button.addClass('.active');
            myClass.animateCss('fadeIn');
            myClass.css('display', 'block');
        }
    },

    onCategoryClick: function (e) {
        var myClass = $('.dropdown-content');
        var button = $('#drop-button');
        this.category = e.target.dataset.category;
        button.text(this.category);
        function display () {
            myClass.css('display', 'none');
            $(this).removeClass('animated ' + 'fadeOut');
        }
        myClass.animateCss('fadeOut', display);
        button.removeClass('.active');
    },

    cancel: function () {
        window.history.back();
    },

    submit: function () {
        if ($('.checkbox').prop('checked')) {
            mainCollection.create({
                rant: $('textarea').val(),
                category: this.category,
                title: $('.rant-title').val()
            }, {
                success: function () {
                    window.location.hash = 'index';
                }
            });
        } else if (!$('.checkbox').prop('checked')) {
            alert('you need to check the box');
        }
    }
});

module.exports = FormView;