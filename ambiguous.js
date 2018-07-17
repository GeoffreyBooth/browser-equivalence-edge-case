var mode = this === undefined ? 'strict' : 'sloppy';

if (typeof document !== 'undefined') {
	document.body.innerHTML = mode;
} else {
	console.log(mode);
}
