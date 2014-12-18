var WordService = function() {

    this.initialize = function() {
        // No Initialization required
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.getWords = function() {
        var deferred = $.Deferred();
        var results = words;
        deferred.resolve(results);
        return deferred.promise();
    }
    
    this.findById = function(id) {
        var deferred = $.Deferred();
        var word = null;
        var l = words.length;
        for (var i=0; i < l; i++) {
            if (words[i].id === id) {
                word = words[i];
                word.letters = new Array();
                
                for (var s = 0; s < word.words.length; s++) {
                    if (word.words[s] == " ") 
                        word.letters.push("/")
                    else
                        word.letters.push(word.words[s]);
                }
                break;
            }
        }
        this.word = word;
        deferred.resolve(word);
        return deferred.promise();
    }
    
    this.getPositionsOfLetter = function(letterToCheck) {
        var letterPositionArray = new Array();
        for (var s = 0; s < this.word.words.length; s++) {
            if (this.word.words[s].toLowerCase() === letterToCheck.toLowerCase()) 
                letterPositionArray.push(s)
        }
        return letterPositionArray
    }

    var words = [
        {"id": 1, "words": "Ben 10", "pic": "Ben10.png"},
        {"id": 2, "words": "Echo Echo", "pic": "EchoEcho.png"},
        {"id": 3, "words": "Humungousaur", "pic": "Humungousaur.png"},
        {"id": 4, "words": "Ultimate Spider Monkey", "pic": "UltimateSpiderMonkey.png"}
    ];
    
    var word;

}