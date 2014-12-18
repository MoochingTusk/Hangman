// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    HomeView.prototype.template = Handlebars.compile($('#home-tpl').html());
    
    var slider = new PageSlider($('body'));
    var service = new WordService();
    
    // PROBLEM IS THAT THE AJAX CALL RESPONSE IS DEFERRED SO WE ARE TRYING TO RENDER THE VIEW TOO SOON$
    
    service.initialize().done(function () {
        alert("1");
        router.addRoute('', function() {
            slider.slidePage(new HomeView(service).render().$el);
        });
          
        router.start();
    });

    /* --------------------------------- Event Registration -------------------------------- */
    document.addEventListener('deviceready', function () {
        
      if (navigator.notification) { // Override default HTML alert with native dialog
          window.alert = function (message) {
              navigator.notification.alert(
                  message,    // message
                  null,       // callback
                  "Workshop", // title
                  'OK'        // buttonName
              );
          };
      }
    }, false);

    /* ---------------------------------- Local Functions ---------------------------------- */
    

    
    
}());