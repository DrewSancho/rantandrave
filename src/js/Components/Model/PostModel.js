var Backbone = require('backbone');

var PostModel = Backbone.View.extend({
    defaults: {
        date: new Date(),
        category: 'Misc',
        rant: 'Start Raving... But, Be Advised, Respect other people\'s beliefs, cultures, and personal identities. Profanitiy will be edited out. This is a forum to air grievences not to promote hate fueled vulgarity.',
        title: 'Title Here',
        likes: 0,
        zip: null
    }
});

module.exports = PostModel;