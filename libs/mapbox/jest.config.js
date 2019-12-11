module.exports = {
  name: 'mapbox',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/mapbox',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
