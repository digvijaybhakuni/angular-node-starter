"use strict";

mbApp.factory('bookDataService', function() {
    var srv = {};

    srv._books = [
        {
            title       : 'JavaScript für Enterprise-Entwickler',
            subtitle    : 'Professionell programmieren im Browser und auf dem Server',
            isbn        : '978-3-89864-728-1',
            abstract    : 'JavaScript ist längst nicht mehr nur für klassische Webprogrammierer interessant.',
            numPages    : 302,
            author      : 'Oliver Ochs',
            publisher   : {
                name: 'dpunkt.verlag',
                url : 'http://dpunkt.de/'
            }
        },
        {
            title       : 'Node.js & Co.',
            subtitle    : 'Skalierbare, hochperformante und echtzeitfähige Webanwendungen professionell in JavaScript entwickeln',
            isbn        : '978-3-89864-829-5',
            abstract    : 'Nach dem Webbrowser erobert JavaScript nun auch den Webserver.',
            numPages    : 334,
            author      : 'Golo Roden',
            publisher   : {
                name: 'dpunkt.verlag',
                url : 'http://dpunkt.de/'
            }
        },
        {
            title       : 'CoffeeScript',
            subtitle    : 'Einfach JavaScript',
            isbn        : '978-3-86490-050-1',
            abstract    : 'CoffeeScript ist eine junge, kleine Programmiersprache, die nach JavaScript übersetzt wird.',
            numPages    : 200,
            author      : 'Andreas Schubert',
            publisher   : {
                name: 'dpunkt.verlag',
                url : 'http://dpunkt.de/'
            }
        }
    ];

    // Service implementation
    srv.getBookByIsbn = function(isbn) {
        for (var i = 0, n = srv._books.length; i < n; i++) {
            if (isbn === srv._books[i].isbn) {
                return srv._books[i];
            }
        }
        return null;
    };

    srv.getBooks = function() {
        // Copy the array in order not to expose internal data structures
        return angular.copy(srv._books);
    };

    srv.storeBook = function(e){
        console.log("Into Book Store", e);
        srv._books.push(e);
        console.log("New Book List", srv._books);
    }

    srv.updateBook = function(e){
        for(var i = 0, n = srv._books.length; i < n; i++){
            if(e.isbn === srv._books[i].isbn){
                angular.extend(srv._books[i],e);//replace the value of book at i postion in srv._books
                return;
            }
        }
    }

    srv.deleteBookByIsbn = function(e){
        var i = srv._books.length;
        while(i--){
            console.info("Book : "+srv._books[i].isbn+" : "+e);
            if(e === srv._books[i].isbn){
                srv._books.splice(i, 1);
                return;
            }
        }
    }

    // Public API
    return {
        getBookByIsbn: function(isbn) {
            return srv.getBookByIsbn(isbn);
        },
        getBooks: function() {
            return srv.getBooks();
        },
        storeBook :  function(e){
            return srv.storeBook(e);
        },
        updateBook : function(e){
            return srv.updateBook(e);
        },
        deleteBookByIsbn : function(isbn){
            return srv.deleteBookByIsbn(isbn);
        }
    };
});
