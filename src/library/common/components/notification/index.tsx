import React from 'react';
import {observer} from 'mobx-react-lite';
import Settings from 'library/common/entities/settings';
import styles from './styles.scss';

const Notification = observer(() => (
	<div
		className={styles.notification}
		style={{right: Settings._isCopiedText ? 16 : -200}}
	>
		<span>Текст скопирован</span>
	</div>
));

export default Notification;
