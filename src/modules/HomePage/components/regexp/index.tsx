import checkRegExp from 'library/utils/checkRegExp';
import React, {useState, useEffect} from 'react';
import styles from './styles.scss';

interface IRegexp {
	title: string;
	pattern: any;
}

const Regexp = ({
	title,
	pattern,
}: IRegexp) => {
	const [text, setText] = useState('');
	const [isValid, setIsValid] = useState<boolean | null>(null);
	const [border, setBorder] = useState('#EEEEEF');

	useEffect(() => {
		if (text.trim().length > 0) {
			setIsValid(checkRegExp(text, pattern).length > 0);
		} else {
			setIsValid(null);
		}
	}, [text]);

	useEffect(() => {
		if (isValid !== null) {
			setBorder(
				isValid ? '#00FF99' : '#FF3300',
			);
		} else {
			setBorder('#EEEEEF');
		}
	}, [isValid]);

	return (
		<li
			className={styles.regexp}
		>
			<div className={styles.regexp__header}>
				<h1 className={styles.regexp__title}>{title}</h1>
			</div>

			<div className={styles.regexp__nav}>
				<input
					style={{
						backgroundColor: '#FAFAFC',
						cursor: 'pointer',
						border: '1px solid #EEEEEF',
					}}
					className={styles.regexp__text}
					readOnly
					value={pattern}
					type="text"
				/>

				<input
					// style={{border: '1px solid #ff3300'}}
					style={{
						border: `1px solid ${border}`,
					}}
					className={styles.regexp__text}
					value={text}
					type="text"
					onChange={(e) => setText(e.target.value)}
				/>
			</div>
		</li>
	);
};

export default Regexp;
