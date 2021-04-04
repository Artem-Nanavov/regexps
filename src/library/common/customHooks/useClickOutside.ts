/* eslint-disable consistent-return */
import React, {
	useEffect,
} from 'react';

const useClickOutside = (ref: React.MutableRefObject<null | any>, onClick: (props?: any) => void) => {
	useEffect(() => {
		if (!ref?.current) {
			return;
		}

		const handleClickOutside = (e: any) => {
			if (onClick && !ref.current.contains(e.target)) {
				onClick(e);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref, onClick]);
};

export default useClickOutside;
