import { cloneElement, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { buttonStyle } from '../../../utils/constants';

const DocsSideMenuItem = ({ path, desc, children }) => {
	const location = useLocation();
	const { pathname } = location;
	const [collapsed, setCollapsed] = useState(!pathname.includes(path));

	const arrowOnClick = () => {
		setCollapsed(!collapsed);
	};

	const descOnClick = () => {
		setCollapsed(false);
	};

	return (
		<>
			<div className="flex items-center">
				<Link
					className={
						'px-2 m-0.5 rounded ' +
						(pathname.includes(path) ? 'bg-shade-3' : '')
					}
					onClick={descOnClick}
					to={path}
				>
					{desc}
				</Link>
				{children && (
					<span
						className={'material-symbols-outlined rounded-lg'}
						onClick={arrowOnClick}
					>
						{collapsed ? 'chevron_right' : 'expand_more'}
					</span>
				)}
			</div>
			<div className={'pl-4 ' + (collapsed ? 'hidden' : '')}>{children}</div>
		</>
	);
};

export default DocsSideMenuItem;
