export const home = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
	},
};

export const moveArrow = {
	hidden: { x: 70 },
	visible: {
		x: 0,
		transition: {
			duration: 0.5,
		},
	},
};
export const moveSocial = {
	hidden: {
		x: -70,
	},
	visible: {
		x: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export const menuOpen = {
	close: { x: "100%" },
	open: { x: 0 },
};
export const burgerTop = {
	open: { rotate: 45, y: 10, x: 0 },
};
export const burgerMid = {
	open: { rotate: -45 },
};
export const burgerBottom = {
	open: { rotate: -45, y: -10, x: 0 },
};
