import { useEffect } from 'react';

const Home = () => {
	useEffect(() => {
		setTimeout(() => {
			const fileManager = document.createElement('actions-file-manager');
			fileManager.width = '100%';
			fileManager.height = '90vh';
			fileManager.color = '#7eb9a0';
			fileManager.themeSettings = 'dark';
			fileManager.backendHostname = 'demo.actions-file-manager.dev';

			const logAction = (record, toast) => {
				console.log('testing log: ', record);
				// toast.success('action was successful!');
				toast('Upload in Progress', {
					progress: 0.5,
					hideProgressBar: false,
					progressClassName: 'bg-conditional-shade-4',
				});
			};

			const logDisplayCondition = (record) => {
				return record.mimeType.includes('image');
			};

			const actions = [
				{
					description: 'log',
					function: logAction,
					displayCondition: logDisplayCondition,
				},
			];

			// fileManager.actions = actions;

			document
				.getElementById('actions-file-manager-container')
				.append(fileManager);
		}, [1000]);
	}, []);

	return (
		<>
			<div id="actions-file-manager-container"></div>
		</>
	);
};

export default Home;
