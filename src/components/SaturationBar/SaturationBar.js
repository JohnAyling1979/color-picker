import './SaturationBar.css';

function SaturationBar({
	color,
	saturation,
	setSaturation
}) {
	const sections = [];

	for (let i = 0; i <= 10; i++) {
		const styles = {
			background: `hsl(${color}, ${i * 10}%, 50%)`,
			width: '10%',
			height: 50,
			border: saturation === i * 10 ? `solid green 2px` : `solid white 2px`,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			cursor: 'pointer'
		};

		sections.push(<div onClick={() => setSaturation(i * 10)} key={i} style={styles}>{i * 10}%</div>)
	}

	return (
		<div className='saturation-bar-root'>
			{sections.map(element => element)}
		</div>
	);
}

export default SaturationBar;
