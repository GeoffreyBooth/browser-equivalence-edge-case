var mode = 'In sloppy mode';

try {
	delete Object.prototype; // Throws an error only in strict mode
} catch (exception) {
	mode = 'In strict mode';
}

if (typeof document !== 'undefined') {
	document.body.innerHTML = mode;
} else {
	console.log(mode);
}
