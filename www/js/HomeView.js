var HomeView = function(service) {

    var wordListView;
    
    this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        wordListView = new WordListView();
        this.render();
    };
    
    this.render = function() {
        this.$el.html(this.template());
        $('.content', this.$el).html(wordListView.$el);
        this.getWords();
        return this;
    }
    
    this.getWords = function() {
        service.getWords().done(function (words) {
            wordListView.setWords(words);
        });
    }

    this.initialize();
}