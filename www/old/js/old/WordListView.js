var WordListView = function() {
    
    var words;
    
    this.initialize = function() {
        this.$el = $('<div/>');
        this.render();
    };
    
    this.setWords = function(list) {
        words = list;
        this.render();
    };
    
    this.render = function() {
        this.$el.html(this.template(words));
        return this;
    };
    
    this.initialize();
}