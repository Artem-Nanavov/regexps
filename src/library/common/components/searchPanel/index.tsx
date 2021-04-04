import React from 'react';
import SearchInput from './components/searchInput';
import Select from './components/select';
import styles from './styles.scss';

const SearchPanel = () => {
	console.log();
	return (
		<div className={styles.searchPanel}>
			<Select />

			<SearchInput />
		</div>
	);
};

export default SearchPanel;
