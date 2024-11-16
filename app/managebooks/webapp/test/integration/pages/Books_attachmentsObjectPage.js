sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'managebooks',
            componentId: 'Books_attachmentsObjectPage',
            contextPath: '/Books/attachments'
        },
        CustomPageDefinitions
    );
});