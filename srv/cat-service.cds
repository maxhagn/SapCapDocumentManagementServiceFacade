using my.bookshop as my from '../db/schema';
using { Attachments } from '@cap-js/sdm';

service CatalogService {
    entity Books as projection on my.Books
    actions {
         function test() returns String;
    };
    entity Books.attachments as projection on my.Books.attachments;
    //annotate Books.attachments with @cds.autoexpose;
    //entity Attachments as projection on Attachments;
    //entity Attachments as projection on my.Books.attachments;
    //annotate Books with @odata.draft.enabled;
}
