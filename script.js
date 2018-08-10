/* by: ZIMONH src: https://github.com/zimonh/YouTube-Thumbnail
License: https://creativecommons.org/licenses/by-nc-sa/4.0/ */

const customThumbnail = inp =>{
	const qs = e => document.querySelector(e);
	const qsa = e => document.querySelectorAll(e);

	qs('#'+inp.id).classList.add('aspect-ratio');
	qs('#'+inp.id).classList.add('customThumbnailPointer');


	qs('#'+inp.id).innerHTML = `<iframe  src="" frameborder="0" allowfullscreen></iframe>
	<img class="coverThumbnail" src="${inp.thumbnail}" >
	<div class="coverThumbnail">
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 13.3"><path class="playIcon" d="M9.6 0C12.1 0 14 0.1 16 0.2c0.7 0 1.4 0.2 1.9 0.7 0.7 0.6 0.9 1.5 0.9 2.3 0.2 2.3 0.2 4.6 0 7 -0.1 0.9-0.3 1.8-1.1 2.4 -0.5 0.4-1 0.5-1.6 0.6 -3.3 0.2-6.6 0.2-9.9 0.1 -1.2 0-2.4 0-3.5-0.2 -1.6-0.2-2.2-0.9-2.5-2.5C0.1 9.7 0 8.9 0 8 0 6.4 0 4.8 0.2 3.2c0.1-0.8 0.2-1.5 0.7-2.1C1.4 0.4 2.2 0.2 3 0.2 5.4 0 7.8 0 9.6 0zM12.7 6.7C11 5.8 9.3 4.9 7.6 4c0 1.8 0 3.5 0 5.3C9.3 8.4 11 7.5 12.7 6.7z"/></svg>
		</div>
	</div>`;

	//iframe remebers for some reason...
	qs('#'+inp.id+' > iframe').setAttribute('src','');

	let once = 0;

	qs('#'+inp.id).onmouseover = () => qs('.playIcon').classList.add('playIconWhite');
	qs('#'+inp.id).onmouseout = () => qs('.playIcon').classList.remove('playIconWhite');
	qs('#'+inp.id).onclick = ev =>{
		if(once == 0){once++;
			qs('#'+inp.id+' > iframe').setAttribute('src',inp.url+'?autoplay=1');
			ev.preventDefault();
		}

		setTimeout(()=>{
			qsa('.coverThumbnail')[0].classList.add('coverThumbnail1');
			qsa('.coverThumbnail')[1].classList.add('coverThumbnail1');
			qs('#'+inp.id).classList.remove('customThumbnailPointer');
		}, 500);
	};
};