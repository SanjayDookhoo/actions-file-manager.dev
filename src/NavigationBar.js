import { Link } from 'react-router-dom';
import Theme from './Theme';

const NavigationBar = () => {
	return (
		<>
			<div className="flex justify-between items-center w-full">
				<Link className="flex items-center" to="/">
					<img className="w-12 h-12" src="/logo.svg" />
					<div className="pl-2 text-xl">Actions File Manager</div>
				</Link>
				<div>
					<Link className="px-2" to="/">
						Home
					</Link>
					<Link className="px-2" to="/docs">
						Docs
					</Link>
				</div>
				<Theme />
			</div>
		</>
	);
};

export default NavigationBar;
