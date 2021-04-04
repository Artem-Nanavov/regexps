import React from 'react';
import {observer} from 'mobx-react-lite';
import Regexp from '../regexp';
import styles from './styles.scss';
import Regexps from '../../regexps';

const RegexpsList = observer(() => {
	console.log();

	return (
		<ul className={styles.regexps}>
			{
				Regexps._items.map((regexp) => (
					<Regexp
						placeholder={regexp.placeholder}
						key={regexp.uuid}
						title={regexp.title.ru}
						pattern={regexp.pattern}
					/>
				))
			}
		</ul>
	);
});

export default RegexpsList;
