var Backbone = require('backbone');
var PostModel = require('../Model/PostModel');

var MainCollection = Backbone.Collection.extend({
    model: PostModel,

    url: '/api/posts'
});

module.exports = new MainCollection();