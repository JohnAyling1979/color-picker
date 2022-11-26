import './LightnessBar.css';

function LightnessBar({
	color,
	lightness,
	setLightness
}) {
	const sections = [];

	for (let i = 0; i <= 10; i++) {
		const styles = {
			background: `hsl(${color}, 50%, ${i * 10}%)`,
			width: '10%',
			height: 50,
			border: lightness === i * 10 ? `solid green 2px` : `solid white 2px`,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			cursor: 'pointer'
		};

		sections.push(<div onClick={() => setLightness(i * 10)} key={i} style={styles}>{i * 10}%</div>)
	}

	return (
		<div className='lightness-bar-root'>
			{sections.map(element => element)}
		</div>
	);
}

export default LightnessBar;
