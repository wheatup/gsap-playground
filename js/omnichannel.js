(function () {
	function wait(delay) {
		return new Promise(resolve => setTimeout(resolve, delay));
	}

	let gsap, omnichannel, anybot;
	const icons = [], rings = [];

	class Icon {
		constructor({ name, src, x, y, deg, distance, scale, scaleX, scaleY, rotation, opacity, text, ...rest }) {
			this.active = true;
			this.x = x === undefined ? 0 : x;
			this.y = y === undefined ? 0 : y;
			this.scale = isNaN(scale) ? 1 : scale;
			this.scaleX = isNaN(scaleX) ? 1 : scaleX;
			this.scaleY = isNaN(scaleY) ? 1 : scaleY;
			this.rotation = rotation === undefined ? 0 : rotation;
			this.opacity = opacity === undefined ? 1 : opacity;
			this.deg = deg;
			this.distance = distance;
			this.dom = src ? document.createElement('img') : document.createElement('div');
			this.text = text;
			if (text) {
				this.dom.innerText = text;
			}
			if (src) {
				this.dom.src = src;
			}
			Object.apply(this.dom, { ...rest });
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
			this.dom.style.transform = `translate3D(${this.x}em, ${this.y}em, 0) scale(${this.scale * this.scaleX}, ${this.scale * this.scaleY}) rotate(${this.rotation}rad)`;
			requestAnimationFrame(this.update.bind(this));
		}

		destory() {
			this.active = false;
			this.dom.remove();
		}
	}

	function animFlow() {
		icons.push(new Icon({ name: 'line', src: 'https://image.flaticon.com/icons/svg/124/124027.svg', deg: 0.3, distance: 16 }));
		icons.push(new Icon({ name: 'facebook', src: 'https://image.flaticon.com/icons/svg/174/174848.svg', deg: -0.9, distance: 16 }));
		icons.push(new Icon({ name: 'sms', src: 'https://image.flaticon.com/icons/svg/321/321812.svg', deg: 3.12, distance: 15 }));
		icons.push(new Icon({ name: 'gmail', src: 'https://image.flaticon.com/icons/svg/281/281769.svg', deg: 2, distance: 16 }));
		icons.push(new Icon({ name: 'chrome', src: 'https://image.flaticon.com/icons/svg/179/179313.svg', deg: 4, distance: 15 }));
		icons.push(new Icon({ name: 'ie', src: 'https://image.flaticon.com/icons/svg/220/220213.svg', deg: 1.2, distance: 13 }));

		anybot = new Icon({ name: 'anybot', src: 'https://anybot.s3.amazonaws.com/367_widget_button.png', deg: 0, distance: 0, opacity: 0 });

		let ring = new Icon({ name: 'ring' });
		let ring2 = new Icon({ name: 'ring' });

		let timeline = 0;

		icons.forEach((icon, index) => {
			new Wheen(icon)
				.from({ scale: 0.1, opacity: 0 })
				.wait(timeline + index * 200)
				.to({ scale: 1, opacity: 1 }, 500, Wheen.Easing.Back.easeOut)
				.wait(timeline + 1500 + icons.length * 200 - index * 200)
				.to({ scale: 0.5 }, 1500, Wheen.Easing.Linear)
				.start();

			new Wheen(icon)
				.to({ distance: 0, deg: icon.deg + Math.PI * 1 + Math.random() * 0.5, rotation: Math.PI * 0.25 + Math.random() * 2 }, 4000, Wheen.Easing.Quint.easeIn)
				.callFunc(() => icon.destory())
				.start();
		});

		timeline += 4000;

		new Wheen(anybot)
			.from({ scale: 0.5, opacity: 0 })
			.wait(timeline - 200)
			.to({ scale: 1.5, opacity: 1 }, 200, Wheen.Easing.Quad.easeOut)
			.to({ scale: 0.9 }, 200, Wheen.Easing.Quad.easeOut)
			.to({ scale: 1 }, 200, Wheen.Easing.Quad.easeOut)
			.start();

		new Wheen(ring)
			.from({ scale: 0 })
			.wait(timeline - 200)
			.to({ scale: 4 }, 1000, Wheen.Easing.Quad.easeOut)
			.start();

		new Wheen(ring)
			.from({ opacity: 0 })
			.wait(timeline - 200)
			.to({ opacity: 0.8 }, 250)
			.to({ opacity: 0 }, 750, Wheen.Easing.Quad.easeOut)
			.start();

		new Wheen(ring2)
			.from({ scale: 0 })
			.wait(timeline)
			.to({ scale: 3 }, 2000, Wheen.Easing.Quad.easeOut)
			.start();

		new Wheen(ring2)
			.from({ opacity: 0 })
			.wait(timeline)
			.to({ opacity: 0.4 }, 500)
			.to({ opacity: 0 }, 1500, Wheen.Easing.Quad.easeOut)
			.start();

		timeline += 2000;

		new Wheen(anybot)
			.wait(timeline)
			.to({ distance: -8 }, 800, Wheen.Easing.Back.easeInOut)
			// .callFunc(start)
			// .callFunc(() => { anybot.destory() })
			.start();

		timeline += 400;
		// timeline = 0;

		let any = new Icon({ name: 'any', text: 'Any', x: 0 });
		let one = new Icon({ name: 'one', text: 'One', x: 2 });
		let time = new Icon({ name: 'time', text: 'Time', x: 2.25 });
		let thing = new Icon({ name: 'thing', text: 'Thing', x: 2.3 });
		let where = new Icon({ name: 'where', text: 'Where', x: 2.6 });
		let bot = new Icon({ name: 'bot', text: 'Bot', x: 1.8 });
		new Wheen(any)
			.from({ scale: 0 })
			.wait(timeline)
			.to({ scale: 1.1 }, 200, Wheen.Easing.Quad.easeOut)
			.to({ scale: 0.95 }, 100, Wheen.Easing.Quad.easeIn)
			.to({ scale: 1 }, 100, Wheen.Easing.Quad.easeOut)
			.start();

		new Wheen(one)
			.from({ scale: 0 })
			.wait(timeline)
			.to({ scale: 1.1 }, 200, Wheen.Easing.Quad.easeOut)
			.to({ scale: 0.95 }, 100, Wheen.Easing.Quad.easeIn)
			.to({ scale: 1 }, 100, Wheen.Easing.Quad.easeOut)
			.wait(300)
			.callFunc(() => one.dom.style.transformOrigin = 'bottom')
			.to({ scaleY: 0 }, 300, Wheen.Easing.Back.easeIn)
			.callFunc(() => one.destory())
			.start();

		timeline += 1000;

		new Wheen(time)
			.from({ scaleY: 0 })
			.callFunc(() => time.dom.style.transformOrigin = 'top')
			.wait(timeline)
			.to({ scaleY: 1 }, 200, Wheen.Easing.Quad.easeOut)
			.wait(500)
			.callFunc(() => time.dom.style.transformOrigin = 'bottom')
			.to({ scaleY: 0 }, 300, Wheen.Easing.Back.easeIn)
			.callFunc(() => time.destory())
			.start();
		timeline += 1000;

		new Wheen(thing)
			.from({ scaleY: 0 })
			.callFunc(() => thing.dom.style.transformOrigin = 'top')
			.wait(timeline)
			.to({ scaleY: 1 }, 200, Wheen.Easing.Quad.easeOut)
			.wait(500)
			.callFunc(() => thing.dom.style.transformOrigin = 'bottom')
			.to({ scaleY: 0 }, 300, Wheen.Easing.Back.easeIn)
			.callFunc(() => thing.destory())
			.start();
		timeline += 1000;

		new Wheen(where)
			.from({ scaleY: 0 })
			.callFunc(() => where.dom.style.transformOrigin = 'top')
			.wait(timeline)
			.to({ scaleY: 1 }, 200, Wheen.Easing.Quad.easeOut)
			.wait(500)
			.callFunc(() => where.dom.style.transformOrigin = 'bottom')
			.to({ scaleY: 0 }, 300, Wheen.Easing.Back.easeIn)
			.callFunc(() => where.destory())
			.start();

		timeline += 1000;

		new Wheen(bot)
			.from({ scaleY: 0 })
			.callFunc(() => bot.dom.style.transformOrigin = 'top')
			.wait(timeline)
			.to({ scaleY: 1 }, 200, Wheen.Easing.Quad.easeOut)
			.wait(500)
			.start();

		timeline += 3000;

		new Wheen(bot)
			.wait(timeline + 200)
			.callFunc(() => bot.dom.style.transformOrigin = 'center')
			.to({ scale: 0 }, 500, Wheen.Easing.Back.easeIn)
			.start();

		new Wheen(any)
			.wait(timeline + 100)
			.callFunc(() => any.dom.style.transformOrigin = 'center')
			.to({ scale: 0 }, 500, Wheen.Easing.Back.easeIn)
			.start();

		new Wheen(anybot)
			.wait(timeline)
			.callFunc(() => any.dom.style.transformOrigin = 'center')
			.to({ scale: 0 }, 500, Wheen.Easing.Back.easeIn)
			.start();

		timeline += 1500;

		setTimeout(start, timeline);
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