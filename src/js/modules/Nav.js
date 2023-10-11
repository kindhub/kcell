import closest from "./Closest";

function Nav() {
	let nav, btn, opened = false;
	let classes = {
		nav: {
			base: 'tmpl-hh__nav',
			opened: 'tmpl-hh__nav--opened'
		},
		btn: {
			base: 'tmpl-hh__nav-btn',
			active: 'tmpl-hh__nav-btn--active',
			closed: 'tmpl-hh__nav-btn--closed'
		}
	};

	let close = function () {
		opened = false;
		navs.forEach((item) => {
			nav = item
			nav.classList.remove(classes.nav.opened);
		})
		btns.forEach((item) => {
			btn = item
			btn.classList.remove(classes.btn.active);
			btn.classList.add(classes.btn.closed);
		})
	};
	let open = function () {
		opened = true;
		navs.forEach((item) => {
			nav = item
			nav.classList.add(classes.nav.opened);
		})
		btns.forEach((item) => {
			btn = item
			btn.classList.remove(classes.btn.closed);
			btn.classList.add(classes.btn.active);
		})
	};
	let toggle = function () {
		if(opened){
			close();
		}else{
			open();
		}
	};
	let navs = document.querySelectorAll('.' + classes.nav.base);
	let btns = document.querySelectorAll('.' + classes.btn.base);
	let init = function () {
		navs.forEach((item) => {
			nav = item
		})
		btns.forEach((item) => {
			btn = item
			btn.addEventListener('click', toggle);
			document.addEventListener('mousedown', function (event) {
				if (!event.target) return;
				if(!opened) return;
				if(event.target !== btn && !closest(event.target, '.' + classes.btn.base)){
					close();
				}
			});
		})
	};
	init();
}

export default Nav;
