(function () {
	function wait(delay) {
		return new Promise(resolve => setTimeout(resolve, delay));
	}

	let gsap, omnichannel, anybot;
	const icons = [], rings = [];

	class Icon {
		constructor({ name, src, x, y, deg, distance, scale, rotation, opacity }) {
			this.active = true;
			this.x = x === undefined ? 0 : x;
			this.y = y === undefined ? 0 : y;
			this.scale = scale === undefined ? 1 : scale;
			this.rotation = rotation === undefined ? 0 : rotation;
			this.opacity = opacity === undefined ? 1 : opacity;
			this.deg = deg === undefined ? 0 : deg;
			this.distance = distance === undefined ? 0 : distance;
			this.dom = src ? document.createElement('img') : document.createElement('div');
			if (src) {
				this.dom.src = src;
			}
			this.dom.classList.add('gsap--omnichannel--icon');
			this.dom.classList.add('gsap--omnichannel--icon__' + name);
			omnichannel.appendChild(this.dom);
			this.update();
		}

		update() {
			if (!this.active) return;
			if (this.deg !== undefined && this.distance !== undefined) {
				this.x = Math.cos(this.deg) * this.distance;
				this.y = Math.sin(this.deg) * this.distance;
			}
			this.dom.style.opacity = this.opacity;
			this.dom.style.transform = `translate3D(${this.x}em, ${this.y}em, 0) scale(${this.scale}) rotate(${this.rotation}rad)`;
			requestAnimationFrame(this.update.bind(this));
		}

		destory() {
			this.active = false;
			this.dom.remove();
		}
	}

	function animFlow() {
		icons.push(new Icon({ name: 'line', src: 'https://image.flaticon.com/icons/svg/124/124027.svg', deg: 0.6, distance: 16 }));
		icons.push(new Icon({ name: 'facebook', src: 'https://image.flaticon.com/icons/svg/174/174848.svg', deg: -0.9, distance: 16 }));
		icons.push(new Icon({ name: 'sms', src: 'https://image.flaticon.com/icons/svg/321/321812.svg', deg: 3.12, distance: 15 }));
		icons.push(new Icon({ name: 'gmail', src: 'https://image.flaticon.com/icons/svg/281/281769.svg', deg: 2, distance: 16 }));
		icons.push(new Icon({ name: 'chrome', src: 'https://image.flaticon.com/icons/svg/179/179313.svg', deg: 4, distance: 15 }));
		anybot = new Icon({ name: 'anybot', src: 'https://anybot.s3.amazonaws.com/367_widget_button.png', deg: 0, distance: 0, opacity: 0 });

		let ring = new Icon({ name: 'ring' });
		let ring2 = new Icon({ name: 'ring' });

		icons.forEach((icon, index) => {
			new Wheen(icon)
				.from({ scale: 0.1, opacity: 0 })
				.wait(index * 200)
				.to({ scale: 1, opacity: 1 }, 500, Wheen.Easing.Back.easeOut)
				.wait(1500 + icons.length * 200 - index * 200)
				.to({ scale: 0.5 }, 1500, Wheen.Easing.Linear)
				.start();

			new Wheen(icon)
				.to({ distance: 0, deg: icon.deg + Math.PI * 1 + Math.random() * 0.5, rotation: Math.PI * 0.25 + Math.random() * 2 }, 4000, Wheen.Easing.Quint.easeIn)
				.callFunc(() => icon.destory())
				.start();
		});

		new Wheen(anybot)
			.from({ scale: 0.5, opacity: 0 })
			.wait(3800)
			.to({ scale: 1.5, opacity: 1 }, 200, Wheen.Easing.Quad.easeOut)
			.to({ scale: 0.9 }, 200, Wheen.Easing.Quad.easeOut)
			.to({ scale: 1 }, 200, Wheen.Easing.Quad.easeOut)
			.start();

		new Wheen(ring)
			.from({ scale: 0 })
			.wait(3800)
			.to({ scale: 4 }, 1000, Wheen.Easing.Quad.easeOut)
			.start();

		new Wheen(ring)
			.from({ opacity: 0 })
			.wait(3800)
			.to({ opacity: 0.8 }, 250)
			.to({ opacity: 0 }, 750, Wheen.Easing.Quad.easeOut)
			.start();

		new Wheen(ring2)
			.from({ scale: 0 })
			.wait(4000)
			.to({ scale: 3 }, 2000, Wheen.Easing.Quad.easeOut)
			.start();

		new Wheen(ring2)
			.from({ opacity: 0 })
			.wait(4200)
			.to({ opacity: 0.4 }, 500)
			.to({ opacity: 0 }, 1500, Wheen.Easing.Quad.easeOut)
			.start();

		new Wheen(anybot)
			.wait(5000)
			.to({ scale: 0 })
			.start();
	}

	function clearEnvironment() {
		if (omnichannel) omnichannel.remove();
		icons.length = 0;
		rings.length = 0;
	}

	function setupEnvironment() {
		gsap = document.querySelector('.gsap');
		omnichannel = document.createElement('div');
		omnichannel.classList.add('gsap--omnichannel');
		gsap.appendChild(omnichannel);
	}

	function start() {
		clearEnvironment();
		setupEnvironment();
		animFlow();
	}

	window.onload = start;
	window.addEventListener('click', start);
})();