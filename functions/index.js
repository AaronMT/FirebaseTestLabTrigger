const functions = require('firebase-functions');

exports.logTestComplete = functions.testLab
  .testMatrix()
  .onComplete(async testMatrix => {
    const { testMatrixId, createTime, state, outcomeSummary } = testMatrix;

    switch (outcomeSummary) {
       case 'success':
            functions.logger.log(
                `Test matrix ${testMatrixId} completed successfully at ${createTime}`
            );
        case 'failure':
            functions.logger.log(
                `Test matrix ${testMatrixId} failed at ${createTime}`
            );
        case 'inconclusive':
            functions.logger.log(
                `Test matrix ${testMatrixId} inconclusive at ${createTime}`
            );
        case 'flaky':
            functions.logger.log(
                `Test matrix ${testMatrixId} flaky at ${createTime}`
            );
        default:
            functions.logger.log(
                `TEST ${testMatrixId} (created at ${createTime}): ${state}. ${
                  outcomeSummary || ''
                }`
            );
    }
  });