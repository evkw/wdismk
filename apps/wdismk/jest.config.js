module.exports = {
  name: 'wdismk',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/wdismk',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
