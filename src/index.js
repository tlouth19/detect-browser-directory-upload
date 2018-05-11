const checkForDirectorySupport = () => {
	
	/**
	* Create an input and set the type to 'file'
	**/

	const input = document.createElement('input')
	input.type = 'file'

	/**
	* If support is available, 'webkitdirectory' will exist
	**/

	return !!('webkitdirectory' in (input || document.querySelectorAll('input[type=file]')[0]))
}

export default checkForDirectorySupport