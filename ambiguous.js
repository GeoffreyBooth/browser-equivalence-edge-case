var mode = this === undefined ? 'In strict mode' : 'In sloppy mode';

if (typeof document !== 'undefined') {
	document.body.innerHTML = mode;
} else {
	console.log(mode);
}
