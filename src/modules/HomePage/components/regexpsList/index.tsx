import React from 'react';
import regexps from 'resources/regexps.json';
import Regexp from '../regexp';
import styles from './styles.scss';

const RegexpsList = () => {
	console.log();

	return (
		<ul className={styles.regexps}>
			{
				regexps.map((regexp, i) => (
					<Regexp
						key={`${regexp.uuid}${`${i}-`}`}
						title={regexp.title.ru}
						pattern={regexp.pattern}
					/>
				))
			}
		</ul>
	);
};

export default RegexpsList;
