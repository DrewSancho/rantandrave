var Backbone = require('backbone');
var $ = require('jquery');
var dispatcher = require('./Components/Utility/dispatcher');

var PostModel = require('./Components/Model/PostModel');
var DetailView = require('./Components/Views/DetailView');
var HomeView = require('./Components/Views/HomeView');
var CategoryView = require('./Components/Views/CategoryView');
var MainCollection = require('./Components/Collection/MainCollection');
var FormView = require('./Components/Views/FormView');

var AppRouter = Backbone.Router.extend({
    routes: {
        '': 'index',
        'detail/:id': 'detail',
        'create': 'rant'
    },

    index: function () {
        MainCollection.fetch({
            success: function () {
                dispatcher.trigger('app:show', new HomeView({ collection: MainCollection }));
            }
        });
    },

    detail: function (id) {
        id = parseInt(id);

        var model = new PostModel({ id: id });

        model.fetch({
            success: function () {
                dispatcher.trigger('app:show', new DetailView({ model: model }));
            }
        });
    },

    rant: function () {
        dispatcher.trigger('app:show', new FormView());
    }
});

module.exports = AppRouter;