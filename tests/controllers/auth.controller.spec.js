var assert = require('assert');
var authController = require('../../controllers/auth.controller');

describe('AuthController', function () {
    beforeEach(function() {
        console.log('running before each');
        authController.setRoles(['user']);
    });
    describe('isAuthorized', function() {
        it('should return false if not authorized', function() {
            assert.equal(false, authController.isAuthorized('admin'));
        });
        it('should return true if authorized', function() {
            assert.equal(true, authController.isAuthorized('user'));
        });

        describe('isAuthorizedAysnc', () =>{
            it('should return false if not authorized', function(done) {
                this.timeout(2500);
                authController.isAuthorizedAsync('admin', function(isAuth) { 
                    assert.equal(false, isAuth);
                    done(); 
                });
            });
        });

    });
});