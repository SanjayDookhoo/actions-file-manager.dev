import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './App';
import { buttonStyle } from './utils/constants';

const Theme = () => {
	const { theme, localStorage, setLocalStorage } = useContext(GlobalContext);

	const onClick = () => {
		if (theme == 'light') {
			setLocalStorage({ ...localStorage, themeSettings: 'dark' });
		} else {
			setLocalStorage({ ...localStorage, themeSettings: 'light' });
		}
	};

	return (
		<div
			className="cursor-pointer select-none"
			title={
				theme == 'light' ? 'Switch to dark theme' : 'Switch to light theme'
			}
			onClick={onClick}
		>
			<span className={buttonStyle}>
				{theme == 'light' ? 'dark_mode' : 'light_mode'}
			</span>
		</div>
	);
};

export default Theme;
