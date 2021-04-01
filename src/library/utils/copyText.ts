const copyText = (e: any, ref: any): void => {
	ref.current.select();
	document.execCommand('copy');
	e.target.focus();
};

export default copyText;
