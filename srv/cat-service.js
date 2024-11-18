const SDMAttachmentsService = require("@cap-js/sdm/lib/sdm");

const attachmentsService = new SDMAttachmentsService();

module.exports = (srv) => {
    srv.on("test", "Books", attachmentsService.draftSaveHandler.bind(attachmentsService));
}
