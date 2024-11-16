using {my.bookshop as my} from './schema';
using {Attachments} from '@cap-js/sdm';

extend my.Books with {
    attachments : Composition of many Attachments;
}