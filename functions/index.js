const functions = require('firebase-functions');

exports.logTestComplete = functions.testLab
  .testMatrix()
  .onComplete(async testMatrix => {
    const { testMatrixId, createTime, state, outcomeSummary } = testMatrix;

    switch (outcomeSummary) {
        case 'SUCCESS':
            functions.logger.log(
                `Test matrix ${testMatrixId} completed successfully at ${createTime}`
            );
        case 'FAILURE':
            functions.logger.log(
                `Test matrix ${testMatrixId} failed at ${createTime}`
            );
        case 'INCONCLUSIVE':
            functions.logger.log(
                `Test matrix ${testMatrixId} inconclusive at ${createTime}`
            );
        case 'FLAKY':
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