import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Theme from './Theme';
import { defaultConditionalColor } from './utils/constants';

const NavigationBar = () => {
	return (
		<>
			<div className="flex justify-between items-center w-full">
				<Link className="flex items-center" to="/">
					<img className="w-12 h-12" src="/logo.svg" />
					<div className="pl-2 text-xl">Actions File Manager</div>
				</Link>
				<div>
					<NavigationBarLink to="/">Home</NavigationBarLink>
					<NavigationBarLink to="/docs/introduction">Docs</NavigationBarLink>
					{/* <NavigationBarLink to="/extensionsApi">
						Extensions Api
					</NavigationBarLink> */}
				</div>
				<Theme />
			</div>
		</>
	);
};

export default NavigationBar;

const NavigationBarLink = ({ to, children }) => {
	const location = useLocation(); // useNavigate for changing URL
	const { pathname } = location;

	return (
		<Link
			className={`p-2 border-b-2 border-shade-1 `}
			style={{ borderColor: pathname == to ? defaultConditionalColor : '' }}
			to={to}
		>
			{children}
		</Link>
	);
};
