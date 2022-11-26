import SyntaxHighlighterCopy from '../../../SyntaxHighlighterCopy';

const html = `
<!DOCTYPE html>
<html>
	<head>
	 	<!-- Replace actions-file-manager@0 with the specific version being used in the backend, could be actions-file-manager@1 -->
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sanjaydookhoo/actions-file-manager@0/dist/actions-file-manager.min.css" />
	</head>
	<body>
		<div id="actions-file-manager-container"></div>

		<!-- Replace actions-file-manager@0 with the specific version being used in the backend, could be actions-file-manager@1 -->
		<script src="https://cdn.jsdelivr.net/gh/sanjaydookhoo/actions-file-manager@0/dist/actions-file-manager.min.js"></script>
		<script src="index.js"></script>
	</body>
</html>
`;

const javascript = `
const fileManager = document.createElement('actions-file-manager');
fileManager.width = '100%';
fileManager.height = '100vh';
fileManager.color = '#7eb9a0';
fileManager.themeSettings = 'dark';
// do not specify the protocol here, since it will be added in. DO NOT USE http://demo.actions-file-manager.dev OR https://demo.actions-file-manager.dev
fileManager.backendHostname = 'demo.actions-file-manager.dev';
fileManager.tokenNameInLocalStorage = 'token' // defaults to token if not specified

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

document
	.getElementById('actions-file-manager-container')
	.append(fileManager);
`;

const Frontend = () => {
	return (
		<div className="flex flex-col">
			<h1 className="text-2xl py-4">index.html</h1>
			<SyntaxHighlighterCopy
				language="xml"
				codeString={html}
			></SyntaxHighlighterCopy>
			<h1 className="text-2xl py-4">index.js</h1>
			<SyntaxHighlighterCopy
				language="javascript"
				codeString={javascript}
			></SyntaxHighlighterCopy>
		</div>
	);
};

export default Frontend;
