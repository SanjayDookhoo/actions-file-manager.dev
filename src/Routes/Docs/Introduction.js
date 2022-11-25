import SyntaxHighlighterCopy from '../../SyntaxHighlighterCopy';

const Introduction = () => {
	const codeString = 'const x = 5;';

	return (
		<>
			<SyntaxHighlighterCopy
				language="javascript"
				codeString={codeString}
			></SyntaxHighlighterCopy>
		</>
	);
};

export default Introduction;
