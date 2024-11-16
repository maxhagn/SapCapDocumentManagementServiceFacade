using {my.bookshop as my} from './schema.cds';
using {Attachments} from '@cap-js/sdm';

extend my.Books with {
    attachments : Composition of many Attachments;
}