(() => {

	function setupEnvironment() {
		const bodyCSS = {
			margin: 0,
			padding: 0,
			overflow: 'hidden',
			width: '100vw',
			height: '100vh'
		};
		Object.assign(document.body.style, bodyCSS);

		const container = document.createElement('div');
		container.classList.add('container');
		containerCSS = {
			width: '100%',
			height: '100%',
			position: 'relative'
		};
		Object.assign(container.style, containerCSS);
		document.body.appendChild(container);
	}


	window.onload = () => {

		setupEnvironment();

		const node = doper('<img src="https://image.flaticon.com/icons/svg/1591/1591801.svg" />', '.container', {
			minAnchorX: 0.5,
			maxAnchorX: 0.5,
			minAnchorY: 0.5,
			maxAnchorY: 0.5
		});
		
		node.width = 500;


	}
})();