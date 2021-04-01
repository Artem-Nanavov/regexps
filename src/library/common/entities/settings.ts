import getLangFromBrowser from 'library/utils/getLangFromBrowser';
import {
	makeAutoObservable,
} from 'mobx';

class Settings {
	_lang = getLangFromBrowser();

	_theme = 'light';

	_isCopiedText = false;

	constructor() {
		makeAutoObservable(this);
	}

	changeLang(lang: string) {
		this._lang = lang;
	}

	toggleTheme(theme: string) {
		this._theme = theme;
	}

	setCopiedText() {
		this._isCopiedText = true;

		setTimeout(() => {
			this._isCopiedText = false;
		}, 3000);
	}
}

export default new Settings();
