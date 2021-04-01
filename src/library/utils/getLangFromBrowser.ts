const getLangFromBrowser = (): string => {
	// @ts-ignore
	const language = window.navigator.userLanguage || window.navigator.language;

	return language;
};

export default getLangFromBrowser;
