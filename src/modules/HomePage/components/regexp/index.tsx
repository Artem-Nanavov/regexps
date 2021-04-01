import checkRegExp from 'library/utils/checkRegExp';
import copyText from 'library/utils/copyText';
import React, {
	useState,
	useEffect,
	useRef,
} from 'react';
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
	const inputRef = useRef<any>(null);

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
				<h3 className={styles.regexp__title}>
					{title.length > 25 ? `${title.substr(0, 25)}...` : title}
				</h3>
			</div>

			<div className={styles.regexp__nav}>
				<input
					style={{
						backgroundColor: '#FAFAFC',
						cursor: 'pointer',
						border: '1px solid #EEEEEF',
					}}
					ref={inputRef}
					onClick={(e) => copyText(e, inputRef)}
					className={styles.regexp__text}
					readOnly
					value={pattern}
					type="text"
				/>

				<input
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
