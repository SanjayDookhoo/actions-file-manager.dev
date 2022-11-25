const Card = ({ feature }) => {
	return (
		<div className="p-4 m-2 border rounded bg-shade-2 border-shade-3 w-64 flex items-center">
			{feature}
		</div>
	);
};

export default Card;
