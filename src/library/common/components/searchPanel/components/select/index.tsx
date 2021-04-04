import useClickOutside from 'library/common/customHooks/useClickOutside';
import React, {useRef, useState} from 'react';
import Regexps from 'modules/HomePage/regexps';
import styles from './styles.scss';

export interface IBodyValue {
	id: string;
	value: string;
	key: string;
	bgc: string;
}

const bodyValues = [
	{
		id: '02811f53-75ce-4335-a99b-3acbd63946b7',
		value: 'Почта',
		key: 'email',
		bgc: '#FFF',
	},
	{
		id: 'dcf5ef31-73a5-4dec-97c4-5e1f58a45dca',
		value: 'Цифры',
		key: 'numbers',
		bgc: '#FFF',
	},
	{
		id: 'e7c416d2-1c23-4a9e-b988-c9cc119cf4b3',
		value: 'Строки',
		key: 'strings',
		bgc: '#FFF',
	},
	{
		id: '4a005275-3b45-4bc9-b4b2-8d68a995b312',
		value: 'Дата / Время',
		key: 'date',
		bgc: '#FFF',
	},
	{
		id: '9163019f-e70c-42c2-940b-785db1c4c9bb',
		value: 'URI',
		key: 'uri',
		bgc: '#FFF',
	},
	{
		id: '440af161-7118-4ca1-8a42-0fcf1a6ee9ee',
		value: 'HTML',
		key: 'html',
		bgc: '#FFF',
	},
	{
		id: 'ec3ff397-996e-4813-979a-b4fb9399d7f1',
		value: 'CSS',
		key: 'css',
		bgc: '#FFF',
	},
	{
		id: '884bd22e-0da5-4444-b931-6f3dcd3f5b7e',
		value: 'Address / Phone',
		key: 'phone',
		bgc: '#FFF',
	},
	{
		id: 'bacb4133-0b4c-4679-a655-02a9c77429a9',
		value: 'Markup / Code',
		key: 'code',
		bgc: '#FFF',
	},
];

const Select = () => {
	const [selectedValue, setSelectedValue] = useState<null | string>(null);
	const [isShow, setIsShow] = useState(false);
	const selectRef = useRef(null);

	useClickOutside(selectRef, () => setIsShow(false));

	const selectValue = (value: IBodyValue) => {
		setSelectedValue(value.value);
		setIsShow(false);
		Regexps.setSelect(value.key);
	};

	const clearSelect = () => {
		Regexps.setSelect(null);
		setSelectedValue(null);
	};

	return (
		<div className={styles.select} ref={selectRef}>
			<div
				className={styles.select__header}
			>
				<p onClick={() => setIsShow(true)}>
					{selectedValue === null ? 'Выберете категорию' : selectedValue}
				</p>

				{
					selectedValue !== null && (
						<button type="button" onClick={clearSelect} className={styles.select__clear}>
							<span />
						</button>
					)
				}
			</div>

			<ul style={{display: isShow ? 'block' : 'none'}} className={styles.select__body}>
				{
					bodyValues.map((value) => (
						<li
							key={value.id}
							onClick={() => selectValue(value)}
							className={
								`${styles.select__value} ${value.value === selectedValue ? styles.select__value_selected : ''}`
							}
						>
							{value.value}
						</li>
					))
				}
			</ul>
		</div>
	);
};

export default Select;
