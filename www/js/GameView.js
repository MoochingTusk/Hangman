var GameView = function(word) {
    
    this.initialize = function() {
        this.$el = $('<div/>');
    };

    this.render = function() {
        this.$el.html(this.template(word));
        return this;
    };
    
    
    this.initialize();
}