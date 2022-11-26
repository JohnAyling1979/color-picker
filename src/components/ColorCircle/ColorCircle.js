import './ColorCircle.css';

function ColorCircle({
	color,
	setColor,
}) {
	const sections = [];

	for (let i = 0; i < 360; i++) {
		const styles = {
			position: 'absolute',
			top: 152,
			left: 152,
			transform: `rotate(${i - 90}deg)`,
			transformOrigin: 'left',
			background: `hsl(${i}, 50%, 50%)`,
			height: 1,
			border: `solid 1px hsl(${i}, 50%, 50%)`,
			width: 150,
			zIndex: 1,
			cursor: 'pointer'
		};

		sections.push(<div onClick={() => setColor(i)} key={i} style={styles}>{color === i && <span className='selected'/>}</div>)
	}

	return (
			<div data-testid='color-circle' className='color-circle-section'>
				{sections.map(element => element)}
			</div>
	);
}

export default ColorCircle;
