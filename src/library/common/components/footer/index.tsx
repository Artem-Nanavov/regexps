import React from 'react';
import styles from './styles.scss';

const Footer = () => (
	<footer className={styles.footer}>
		<a
			rel="noreferrer"
			href="https://github.com/Artem-Nanavov/regexps"
			target="_blank"
			className={styles.footer__link}
		>
			GitHub
		</a>
	</footer>
);

export default Footer;
