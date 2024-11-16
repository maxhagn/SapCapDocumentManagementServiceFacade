sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'managebooks/test/integration/FirstJourney',
		'managebooks/test/integration/pages/BooksList',
		'managebooks/test/integration/pages/BooksObjectPage',
		'managebooks/test/integration/pages/Books_attachmentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage, Books_attachmentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('managebooks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage,
					onTheBooks_attachmentsObjectPage: Books_attachmentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);