export const rgbAddA = (rgb, a) => {
	const rgbSplit = rgb.replace('rgb', 'rgba').split(')');
	rgbSplit.pop();
	return rgbSplit.join(')') + ',' + a + ')';
};
