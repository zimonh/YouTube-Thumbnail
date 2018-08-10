/* by: ZIMONH src: https://github.com/zimonh/YouTube-Thumbnail
License: https://creativecommons.org/licenses/by-nc-sa/4.0/ */
document.addEventListener('DOMContentLoaded',()=>{

	const qs = e => document.querySelector(e);
	const qsa = e => document.querySelectorAll(e);

	//iframe remebers for some reason...
	qs('#example').setAttribute('src','');

	let once = 0;

	qs('#customThumbnail').onmouseover = () => qs('.playIcon').classList.add('playIconWhite');
	qs('#customThumbnail').onmouseout = () => qs('.playIcon').classList.remove('playIconWhite');
	qs('#customThumbnail').onclick = ev =>{
		if(once == 0){once++;
			qs('#example').setAttribute('src','https://www.youtube.com/embed/H46Kil1k-m8?autoplay=1');
			ev.preventDefault();
		}

		setTimeout(()=>{
			qsa('.coverThumbnail')[0].classList.add('coverThumbnail1');
			qsa('.coverThumbnail')[1].classList.add('coverThumbnail1');
			qs('#customThumbnail').classList.remove('customThumbnailPointer');
		}, 500);
	};
});