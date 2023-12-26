import LocomotiveScroll from 'locomotive-scroll';

export function locomotive() {
	const locomotiveScroll = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
		smooth: true,
		smartphone: {
			smooth: true
		},
		tablet: {
			smooth: true
		}
	});
}
