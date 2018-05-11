'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var checkForDirectorySupport = function checkForDirectorySupport() {

	/**
 * Create an input and set the type to 'file'
 **/

	var input = document.createElement('input');
	input.type = 'file';

	/**
 * If support is available, 'webkitdirectory' will exist
 **/

	return !!('webkitdirectory' in (input || document.querySelectorAll('input[type=file]')[0]));
};

exports.default = checkForDirectorySupport;