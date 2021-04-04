import React from 'react';
import Notification from 'library/common/components/notification';
import SearchPanel from 'library/common/components/searchPanel';
import RegexpsList from './components/regexpsList';
import styles from './styles.scss';

const HomePage = () => {
	console.log();

	return (
		<main className={styles.homePage}>
			<div className={styles.homePage__container}>
				<SearchPanel />

				<RegexpsList />
			</div>

			<Notification />
		</main>
	);
};

export default HomePage;
