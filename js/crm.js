(() => {
	let scale = 1;
	let gsap, crm, userContainer, users = [], title, timeline;

	class User {
		constructor(x, y, size) {
			this.size = size;
			this.x = x;
			this.y = y;
			this.div = document.createElement('div');
			this.div.classList.add('gsap--crm--user-container--user');
			this.div.style.transform = `scale(${size}) translate(${x * 16 * scale}px, ${y * 16 * scale}px)`;
			this.img = document.createElement('img');
			this.img.src = 'https://image.flaticon.com/icons/svg/10/10522.svg';
			this.img.style.filter = `invert(50%) sepia(100%) hue-rotate(${Math.round(Math.random() * 360)}deg)`;
			this.div.appendChild(this.img);
			userContainer.appendChild(this.div);
		}

		moveAround() {
			if (this.stopped) return;
			let x = (this.x + (Math.random() * 2 - 1) * 0.5) * 16 * scale;
			let y = (this.y + (Math.random() * 2 - 1) * 0.5) * 16 * scale;
			TweenMax.to(this.div, 1 + Math.random() * 2, { x, y, onComplete: this.moveAround.bind(this), ease: Power1.easeInOut });
		}

		stopMoving() {
			this.stopped = true;
		}
	}

	function showGroup(text, targetUsers, color, delay) {
		title.style.color = color;
		title.innerHTML = text;

		timeline.to(title, 0.2, {
			opacity: 1, scaleY: 1, delay, onStart: () => {
				title.style.color = color;
				title.innerHTML = text;
			}
		});

		users.forEach((user, index) => {
			if (targetUsers.indexOf(user) < 0) {
				timeline.to(user.div, 0.2, { opacity: 0.2, scale: 0.5, delay: -0.195, ease: Power1.easeOut });
			} else {
				timeline.to(user.div, 0.2, { opacity: 1, scale: 1.33, delay: -0.195, ease: Power1.easeOut });
			}
		});

		timeline.to(title, 0.2, { opacity: 0, scaleY: 0, delay: delay * 3 });

		users.forEach((user, index) => {
			timeline.to(user.div, 0.2, { opacity: 1, scale: user.size, delay: -0.195, ease: Power1.easeOut });
		});
	}


	function start() {
		gsap = document.querySelector('.gsap');
		gsap.style.fontSize = (100 * scale) + '%';
		crm = document.createElement('div');
		userContainer = document.createElement('div');
		title = document.createElement('div');

		crm.classList.add('gsap--crm');
		gsap.appendChild(crm);

		userContainer.classList.add('gsap--crm--user-container');
		crm.appendChild(userContainer);

		title.classList.add('gsap--crm--title');
		crm.appendChild(title);

		users.push(new User(-5, -10, 0.8));
		users.push(new User(8.2, -8, 0.75));
		users.push(new User(9, 10, 0.8));
		users.push(new User(-12, 3, 0.73));
		users.push(new User(3.2, -4, 0.75));
		users.push(new User(2, 7, 0.8));
		users.push(new User(-9, 10, 0.6));
		users.push(new User(-4, 0, 0.6));
		users.push(new User(12, 0, 0.7));
		users.push(new User(-10, -6, 0.65));

		timeline = new TimelineMax({ repeat: Infinity, repeatDelay: 1 });

		users.forEach((user, index) => {
			Draggable.create(user.div, {
				bounds: crm,
				throwProps:true,
				onDragEnd:function() {
					user.moveAround();
				}
			});
			timeline.from(user.div, 0.4, { x: 0, y: 0, opacity: 0, scale: 0, delay: index === 0 ? 0 : -0.32, ease: Power1.easeOut });
		});

		timeline.to(title, 0.2, {
			opacity: 1, scaleY: 1, delay: 0.5, onStart: () => {
				title.innerHTML = 'CRMは？';
			}
		});

		timeline.to(title, 0.2, {
			opacity: 0, scaleY: 0, delay: 1
		});

		showGroup('男性', [users[0], users[1], users[4], users[6], users[7]], '#892', 0.4);
		showGroup('女性', [users[8], users[2], users[3], users[5], users[9]], '#892', 0.4);
		showGroup('20代', [users[0], users[1], users[2]], '#892', 0.3);
		showGroup('30代', [users[3], users[4], users[5], users[6]], '#892', 0.3);
		showGroup('40代', [users[7], users[8], users[9]], '#892', 0.3);
		showGroup('犬派', [users[1], users[3], users[4], users[5]], '#892', 0.2);
		showGroup('猫派', [users[0], users[2], users[7], users[8]], '#892', 0.2);
		showGroup('辛口', [users[4], users[6], users[9]], '#892', 0.2);
		showGroup('甘口', [users[2], users[5], users[7], users[8]], '#892', 0.2);

		users.forEach((user, index) => {
			timeline.to(user.div, 0.3, { opacity: 0, scale: 0, ease: Power1.easeOut, delay: index === 0 ? 1 : -0.25 });
		});

		users.forEach((user, index) => {
			user.moveAround();
		});
	}

	window.onload = start;
})();