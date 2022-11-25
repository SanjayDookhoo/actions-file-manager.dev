import Demo from './Demo';
import Features from './Features/Features';

const Home = () => {
	return (
		<>
			<div className="p-4">
				<h1 className="text-4xl py-4 text-center">
					A File Manager web component that can be implemented in vanilla
					Javascript or any Javascript framework such as, React, Vue or Angular.
					highest security.
				</h1>
				<h1 className="text-xl py-4 text-center">
					One of the most powerful features it provides are, "Custom Actions",
					where any file or folder can have a custom context menu action to
					perform any Javascript action. It is also a fully self hosted solution
					using Docker allowing full ownership of all files and data, ensuring
					the highest security.
				</h1>
			</div>
			<h1 className="text-2xl py-4">Demo</h1>
			<Demo />
			<h1 className="text-2xl py-4">Features</h1>
			<Features />
		</>
	);
};

export default Home;
