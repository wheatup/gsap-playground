(()=>{
	function createUser(target, id, position, src, text) {
		let img = document.createElement('img');
		img.classList.add('user', `user--${position}`);
		img.id = `user${id}`;
		img.setAttribute('src', src);

		let bubble = document.createElement('div');
		bubble.classList.add('bubble', `bubble--${position}`);
		bubble.id = `bubble${id}`;
		bubble.style.position = 'absolute';
		for (let i = 0; i < 3; i++) {
			let dot = document.createElement('span');
			dot.classList.add('dot');
			bubble.appendChild(dot);
		}
		let t = document.createElement('span');
		t.classList.add('symbol');
		t.innerHTML = text;
		bubble.appendChild(t);

		if (!(target instanceof HTMLElement)) {
			target = document.querySelector(target);
		}
		target.appendChild(img);
		target.appendChild(bubble);

		return { user: img, bubble };
	}

	window.onload = () => {
		const timeline = new TimelineMax({ repeat: Infinity });

		let chat = document.createElement('div');
		chat.classList.add('gsap--chat');
		document.querySelector('.gsap').appendChild(chat);
		const { user: userA, bubble: bubbleA } = createUser(chat, 'A', 'left', 'https://image.flaticon.com/icons/svg/145/145867.svg', '?');
		const { user: userB, bubble: bubbleB } = createUser(chat, 'B', 'right', 'https://image.flaticon.com/icons/svg/1462/1462490.svg', '!');
		const { user: userC, bubble: bubbleC } = createUser(chat, 'C', 'left', 'https://image.flaticon.com/icons/svg/145/145867.svg', '?');
		const { user: userD, bubble: bubbleD } = createUser(chat, 'D', 'right', 'https://image.flaticon.com/icons/svg/1462/1462490.svg', '!');

		timeline
			// User A appear
			.from(userA, 0.5, { x: -50, opacity: 0, ease: Back.easeOut })

			// User A speak
			.from(bubbleA, 0.3, { x: -50, opacity: 0, scaleX: 0, rotation: -30, delay: -0.25, transformOrigin: "left center", ease: Back.easeOut })
			.staggerFrom('#bubbleA span', 0.2, { opacity: 0, scale: 0, rotation: 90, stagger: 0.1 })

			// Move user A
			.to(userA, 0.5, { y: -150, ease: Back.easeOut, delay: 0.2 })
			.to(bubbleA, 0.5, { y: -150, ease: Back.easeOut, delay: -0.5 })

			// User B appear
			.from(userB, 0.6, { x: 50, opacity: 0, delay: -0.5, ease: Back.easeOut })

			// User B speak
			.from(bubbleB, 0.3, { x: 50, opacity: 0, scaleX: 0, rotation: 30, delay: -0.25, transformOrigin: "right center", ease: Back.easeOut })
			.staggerFrom('#bubbleB span', 0.2, { opacity: 0, scale: 0, rotation: 90, stagger: 0.1 })

			// Move user A & B
			.to(userA, 0.5, { y: -300, ease: Back.easeOut, delay: 0.75 })
			.to(bubbleA, 0.5, { y: -300, ease: Back.easeOut, delay: -0.5 })
			.to(userB, 0.5, { y: -150, ease: Back.easeOut, delay: -0.5 })
			.to(bubbleB, 0.5, { y: -150, ease: Back.easeOut, delay: -0.5 })

			// User C appear
			.from(userC, 0.5, { x: -50, opacity: 0, delay: -0.5, ease: Back.easeOut })

			// User C speak
			.from(bubbleC, 0.3, { x: -50, opacity: 0, scaleX: 0, rotation: -30, delay: -0.25, transformOrigin: "left center", ease: Back.easeOut })
			.staggerFrom('#bubbleC span', 0.2, { opacity: 0, scale: 0, rotation: 90, stagger: 0.1 })

			// Move user A & B & C
			.to(userA, 0.5, { y: -450, ease: Back.easeOut, delay: 0.2 })
			.to(bubbleA, 0.5, { y: -450, ease: Back.easeOut, delay: -0.5 })
			.to(userB, 0.5, { y: -300, ease: Back.easeOut, delay: -0.5 })
			.to(bubbleB, 0.5, { y: -300, ease: Back.easeOut, delay: -0.5 })
			.to(userC, 0.5, { y: -150, ease: Back.easeOut, delay: -0.5 })
			.to(bubbleC, 0.5, { y: -150, ease: Back.easeOut, delay: -0.5 })

			// User D appear
			.from(userD, 0.6, { x: 50, opacity: 0, delay: -0.5, ease: Back.easeOut })

			// User D speak
			.from(bubbleD, 0.3, { x: 50, opacity: 0, scaleX: 0, rotation: 30, delay: -0.25, transformOrigin: "right center", ease: Back.easeOut })
			.staggerFrom('#bubbleD span', 0.2, { opacity: 0, scale: 0, rotation: 90, stagger: 0.1 })

			// User A & B disappear
			.to(userA, 0.5, { x: -100, opacity: 0, delay: 0.75, ease: Back.easeIn })
			.to(bubbleA, 0.5, { x: -100, opacity: 0, ease: Back.easeIn, delay: -0.45 })
			.to(userB, 0.5, { x: 100, opacity: 0, ease: Back.easeIn, delay: -0.45 })
			.to(bubbleB, 0.5, { x: 100, opacity: 0, ease: Back.easeIn, delay: -0.45 })
			.to(userC, 0.5, { x: -100, opacity: 0, ease: Back.easeIn, delay: -0.45 })
			.to(bubbleC, 0.5, { x: -100, opacity: 0, ease: Back.easeIn, delay: -0.45 })
			.to(userD, 0.5, { x: 100, opacity: 0, ease: Back.easeIn, delay: -0.45 })
			.to(bubbleD, 0.5, { x: 100, opacity: 0, ease: Back.easeIn, delay: -0.45 })

			.to(bubbleB, 0.5, {});
	};
})();