describe("E2E: book details view", function() {

    beforeEach(function(){
        browser.navigateTo('/');
    });

    it('should show the correct book details', function() {
        browser().navigateTo('#/books/978-3-89864-728-1');

        expect(element('.bm-book-title').html()).toBe(
            'JavaScript for Enterprise Developers'
        );
        expect(element('.bm-book-subtitle').html())
            .toBe( 'Professional Programming in the Browser'
          + ' and on the Server'
        );
        expect(element('.bm-book-isbn').html())
          .toBe( 'ISBN: 978-3-89864-728-1'
        );
        expect(element('.bm-book-num-pages').html())
          .toBe( 'Number of Pages: 302'
        );
        expect(element('.bm-book-author').html())
          .toBe( 'Author: Oliver Ochs'
        );
        expect(element('.bm-book-publisher-name')
          .html()).toBe( 'dpunkt.verlag'
        );
        expect(element('.bm-book-publisher-name')
          .attr('href')).toBe( 'http://dpunkt.de/'
        );
        expect(element('.bm-book-abstract').html())
          .toBe( 'JavaScript is no longer only interesting '
              + ' to classic web programmers.'
        );
  });

});
