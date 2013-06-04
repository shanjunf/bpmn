/**
 * AUTHOR: mrassinger
 * COPYRIGHT: E2E Technologies Ltd.
 */

var bpmnParserModule = require('../../../lib/parsing/parser.js');
var errorsModule = require('../../../lib/errors.js');

exports.testCallActivityNoFilePath = function(test) {

    var errorQueue = errorsModule.createErrorQueue();
    var bpmnDefinitions =bpmnParserModule.parse("test/resources/bpmn/callActivityNoFilePath.bpmn", errorQueue);

    var bpmnDefinition = bpmnDefinitions[0];
    bpmnDefinition.validate(errorQueue);

    test.deepEqual(errorQueue.bpmnErrors,
        [
            {
                "code": "CA1",
                "description": "The callActivity 'call activity' must reference another process by its file name.",
                "bpmnId": "93",
                "bpmnName": "call activity",
                "bpmnType": "callActivity"
            }
        ],
        "testCallActivityNoFilePath");
    test.done();
};