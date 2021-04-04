import getLangFromBrowser from 'library/utils/getLangFromBrowser';
import {
	action,
	observable,
	makeAutoObservable,
} from 'mobx';

class Settings {
	@observable _lang = getLangFromBrowser();

	@observable _theme = 'light';

	@observable _isCopiedText = false;

	constructor() {
		makeAutoObservable(this);
	}

	@action changeLang(lang: string) {
		this._lang = lang;
	}

	@action toggleTheme(theme: string) {
		this._theme = theme;
	}

	@action setCopiedText() {
		this._changeIsCopiedText(true);

		setTimeout(() => {
			this._changeIsCopiedText(false);
		}, 3000);
	}

	@action private _changeIsCopiedText(flag: boolean): void {
		this._isCopiedText = flag;
	}
}

export default new Settings();
