// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    WordListView.prototype.template = 
            Handlebars.compile($("#word-list-tpl").html());
    GameView.prototype.template = Handlebars.compile($("#game-tpl").html());
    
    var service = new WordService();
    service.initialize().done(function () {
        router.addRoute('', function() {
            $('body').html(new HomeView(service).render().$el);
    });

    router.addRoute('words/:id', function(id) {
        service.findById(parseInt(id)).done(function(word) {
            $('body').html(new GameView(word).render().$el);
        });
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
    
    //todo: this should only be initialized when we load the game board
    //it will only work now when the page is refreshed
    $(document).ready(function() {
       $(".lettergridletter").click(function() {
        alert("in");
            var letterChosen = $(this).html();
            var letterPositionArray = service.getPositionsOfLetter(letterChosen);
            var foundLetter = false;
            $('.letterspace').each(function() {
                if ($.inArray(parseInt($(this).attr("index")), letterPositionArray) >= 0) {
                    $(this).html(letterChosen);
                    foundLetter = true;
                } 
            });
            if (!foundLetter) {
                alert("Letter not found");
                $('#hang1').fadeTo(0, 100);
            }
        });
       
    });
    
    

}());