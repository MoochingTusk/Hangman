var EmployeeView = function(employee) {

    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('click', '.add-location-btn', this.addLocation);
    };
    
    this.render = function() {
        this.$el.html(this.template(employee));
        return this;
    }
    
    this.addLocation = function(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(
            function(position) {
                alert(position.coords.latitude + ',' + position.coords.longitude);
            },
            function(error) {
                alert(error.message);
            },
            {
                enableHighAccuracy: true
            }
        )
        return false;
    }
    
    this.initialize();
}