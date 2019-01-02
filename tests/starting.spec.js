var assert = require('assert');

describe('Basic Mocha Test', function () {
    it('should throw errors', function () {
        try {
            //fail
            //assert.equal(2,3);
            //pass
            assert.equal(3,3);
        } catch(e) {
            console.log(e);
        }
    });

    it('throw an error', function () {
        //throw({message:'thrown error'});
    });

});