(function () {
    'use strict';

    angular
        .module('cheaptransfertApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
