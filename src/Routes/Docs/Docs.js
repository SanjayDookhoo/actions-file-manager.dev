import { useEffect, useState } from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Backend from './Backend/Backend';
import DocsSideMenu from './DocsSideMenu/DocsSideMenu';
import DocsSideMenuItem from './DocsSideMenu/DocsSideMenuItem';
import Frontend from './Frontend/Frontend';
import Introduction from './Introduction';

const Test2 = () => {
	return <div>Test2</div>;
};

const Test3 = () => {
	return <div>Test3</div>;
};

const Test4 = () => {
	return <div>Test4</div>;
};

const Docs = () => {
	const sideMenuAndContent = [
		// {
		// 	path: '/docs/introduction',
		// 	desc: 'Introduction',
		// 	element: Introduction,
		// },
		{
			path: '/docs/frontend',
			desc: 'Frontend',
			element: Frontend,
			// subMenu: [
			// 	{ path: '/test2', desc: 'test2', element: Test2 },
			// 	{
			// 		path: '/test3',
			// 		desc: 'test3',
			// 		element: Test3,
			// 		subMenu: [{ path: '/test4', desc: 'test4', element: Test4 }],
			// 	},
			// ],
		},
		{
			path: '/docs/backend',
			desc: 'Backend',
			element: Backend,
		},
	];

	return (
		// <div>TBD</div>
		<div className="flex">
			<div>
				<DocsSideMenu>
					<SideMenu sideMenuAndContent={sideMenuAndContent} />
				</DocsSideMenu>
			</div>
			<div className="pl-8 pr-4">
				<MyRoutes sideMenuAndContent={sideMenuAndContent} />
			</div>
		</div>
	);
};

export default Docs;

const SideMenu = ({ inheritedPath = '', sideMenuAndContent }) => {
	return (
		<>
			{sideMenuAndContent.map(({ path, desc, subMenu }) => (
				<DocsSideMenuItem
					key={inheritedPath + path}
					path={inheritedPath + path}
					desc={desc}
				>
					{subMenu && (
						<SideMenu
							inheritedPath={inheritedPath + path}
							sideMenuAndContent={subMenu}
						/>
					)}
				</DocsSideMenuItem>
			))}
		</>
	);
};

const MyRoutes = ({ sideMenuAndContent }) => {
	const [routes, setRoutes] = useState({});
	const { pathname } = useLocation();
	let Component = Default;

	useEffect(() => {
		const tempRoutes = {};
		const getRoutes = ({ inheritedPath = '', sideMenuAndContent }) => {
			sideMenuAndContent.forEach(({ path, element, subMenu }) => {
				const newPath = inheritedPath + path;
				tempRoutes[newPath] = element;
				if (subMenu)
					getRoutes({ inheritedPath: newPath, sideMenuAndContent: subMenu });
			});
		};
		getRoutes({ sideMenuAndContent });
		setRoutes(tempRoutes);
	}, [sideMenuAndContent]);

	if (routes[pathname]) Component = routes[pathname];
	else if (routes[pathname.slice(0, -1)])
		Component = routes[pathname.slice(0, -1)];
	else Component = Default;

	return <Component />;
};

const Default = () => {
	return <></>;
};
