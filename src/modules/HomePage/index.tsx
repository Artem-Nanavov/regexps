import React from 'react';
import Notification from 'library/common/components/notification';
import RegexpsList from './components/regexpsList';
import styles from './styles.scss';

const HomePage = () => {
	console.log();

	return (
		<main className={styles.homePage}>
			<Notification />
			<RegexpsList />
		</main>
	);
};

export default HomePage;
