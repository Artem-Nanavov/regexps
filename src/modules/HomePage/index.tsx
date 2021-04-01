import React from 'react';
import RegexpsList from './components/regexpsList';
import styles from './styles.scss';

const HomePage = () => {
	console.log();

	return (
		<main className={styles.homePage}>
			<RegexpsList />
		</main>
	);
};

export default HomePage;
