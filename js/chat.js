window.onload = () => {
	const timeline = new TimelineMax({ repeat: Infinity });

	const userA = document.querySelector('.gsap #userA');
	const userB = document.querySelector('.gsap #userB');
	const userC = document.querySelector('.gsap #userC');
	const userD = document.querySelector('.gsap #userD');
	const bubbleA = document.querySelector('.gsap #bubbleA');
	const bubbleB = document.querySelector('.gsap #bubbleB');
	const bubbleC = document.querySelector('.gsap #bubbleC');
	const bubbleD = document.querySelector('.gsap #bubbleD');

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