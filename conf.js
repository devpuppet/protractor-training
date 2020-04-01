exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['dist/test/test.js'],
    baseUrl: 'http://localhost:8808'
  };