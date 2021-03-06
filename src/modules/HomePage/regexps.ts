import {
	observable,
	action,
	makeAutoObservable,
} from 'mobx';
import regexps from 'resources/regexps.json';

class Regexps {
	@observable _select: string | null = null;

	@observable _searchPrase = '';

	@observable _items = regexps;

	constructor() {
		makeAutoObservable(this);
	}

	@action setSearchPrase(prase: string) {
		this._searchPrase = prase;

		this._items = regexps.filter((item) => (
			item.tags.toLocaleLowerCase().includes(prase.trim().toLocaleLowerCase())
			|| item.title.en.toLocaleLowerCase().includes(prase.trim().toLocaleLowerCase())
			|| item.title.ru.toLocaleLowerCase().includes(prase.trim().toLocaleLowerCase())));
	}

	@action setSelect(select: string | null) {
		this._select = select;

		if (select === null) {
			this._items = regexps;
		} else {
			this._items = regexps.filter((item) => item.tags.includes(select));
		}
	}
}

export default new Regexps();
