import React, {useState} from 'react';
import Regexps from 'modules/HomePage/regexps';
import styles from './styles.scss';

const SearchInput = () => {
	const [text, setText] = useState('');

	const clearInput = () => {
		setText('');
		Regexps.setSearchPrase('');
	};

	const setTextHandler = (value: string) => {
		setText(value);
		Regexps.setSearchPrase(value);
	};

	return (
		<div className={styles.searchInput}>
			<input
				placeholder="Поиск..."
				className={styles.searchInput__input}
				value={text}
				onChange={(e) => setTextHandler(e.target.value)}
				type="text"
			/>

			{
				text.length > 0 && (
					<button
						type="button"
						onClick={clearInput}
						className={styles.searchInput__clear}
					>
						<span />
					</button>
				)
			}
		</div>
	);
};

export default SearchInput;
