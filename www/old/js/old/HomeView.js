var HomeView = function(service) {

    var namelist;
    
    this.initialize = function() {
        
        this.$el = $('<div/>');
        this.getNames();
    };
        
    this.render = function() {
        this.$el.html(this.template(namelist));
        return this;
    };
    
    this.getNames = function() {
        
        service.getNames().done(function(names) {
            console.log(names);   
            namelist = names;
            alert("2");
        });
        ;
    };
        
    this.initialize();
}

