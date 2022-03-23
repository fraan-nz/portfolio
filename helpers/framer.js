export const home = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
	},
};
export const flick = {
	hidden: { opacity: 0 },
	visible: {
		opacity: [0.1, 0.1, 1, 1, 0.1, 1, 1, 0.4, 1],
		transition: {
			times: [0, 0.02, 0.04, 0.19, 0.21, 0.23, 0.8, 0.83, 0.87],
			duration: 2,
			repeat: Infinity,
		},
	},
};

export const flick2 = {
	hidden: { opacity: 0 },
	visible: {
		opacity: [1, 0.1, 1, 1, 0.1, 1, 1, 0.4, 1],
		transition: {
			times: [0.05, 0.07, 0.09, 0.24, 0.26, 0.28, 0.85, 0.87, 0.92],
			duration: 2,
			repeat: Infinity,
			repeatType: "reverse",
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
