import {
	a11yDark,
	atelierCaveLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useContext, useState } from 'react';
import { GlobalContext } from './App';
import SyntaxHighlighter from './SyntaxHighlighter';

const SyntaxHighlighterCopy = ({ language, style, codeString }) => {
	const { theme } = useContext(GlobalContext);
	const [copyIcon, setCopyIcon] = useState('content_copy');

	const copy = () => {
		navigator.clipboard.writeText(codeString);
		setCopyIcon('done');
		setTimeout(() => {
			setCopyIcon('content_copy');
		}, 1000);
	};

	return (
		<>
			<div className="relative">
				<div
					className="absolute right-0.5 top-0.5 cursor-pointer select-none"
					onClick={copy}
				>
					<span className="material-symbols-outlined">{copyIcon}</span>
				</div>
				<SyntaxHighlighter
					language={language}
					style={theme == 'light' ? atelierCaveLight : a11yDark}
				>
					{codeString}
				</SyntaxHighlighter>
			</div>
		</>
	);
};

export default SyntaxHighlighterCopy;
