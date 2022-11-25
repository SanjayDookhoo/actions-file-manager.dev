import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../App';
import { defaultConditionalColor } from '../../utils/constants';

const Demo = () => {
	const { theme } = useContext(GlobalContext);

	useEffect(() => {
		setTimeout(() => {
			const fileManager = document.createElement('actions-file-manager');
			fileManager.width = '100%';
			fileManager.height = '90vh';
			fileManager.color = defaultConditionalColor;
			fileManager.themeSettings = theme;
			// do not specify the protocol here, since it will be added in. DO NOT USE http://demo.actions-file-manager.dev OR https://demo.actions-file-manager.dev
			fileManager.backendHostname = 'demo.actions-file-manager.dev';

			// the toast function made available is "react-toastify": "^9.0.8"
			const logAction = (record, toast) => {
				console.log('testing log: ', record);
				toast('testing toast');
			};

			const logDisplayCondition = (record) => {
				return record.__typename == 'file' && record.mimeType.includes('image');
			};

			const actions = [
				{
					description: 'log',
					function: logAction,
					displayCondition: logDisplayCondition,
				},
			];

			fileManager.actions = actions;

			// emptying the innerhtml in the event there is already something there
			// necessary for js frameworks that rerender
			document.getElementById('actions-file-manager-container').textContent =
				'';

			document
				.getElementById('actions-file-manager-container')
				.append(fileManager);
		}, [1000]);
	}, [theme]);

	return (
		<div className="border-2 p-2 border-shade-2 rounded">
			<div id="actions-file-manager-container"></div>
		</div>
	);
};

export default Demo;
