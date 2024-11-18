namespace my.bookshop;
using { managed, cuid } from '@sap/cds/common';
using { Attachments } from '@cap-js/sdm';


entity Books: cuid,managed {
  title  : String;
  stock  : Integer;
  attachments: Composition of many Attachments
}
