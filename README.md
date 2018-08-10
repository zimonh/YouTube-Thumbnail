# YouTube-Thumbnail
Replace the default YouTube thumbnail

## Step 1: install a user script manager
- Copy the __script.js__
- Copy the __style.css__
- Use this in your page:
```
<div
	id="customThumbnail"
	class="aspect-ratio customThumbnailPointer"
	style="
		width: 600px;		  /* <= width */
		padding-bottom: 600px;/* <= height */
	">
	<iframe  id="example" src="" frameborder="0" allowfullscreen></iframe>
	<img class="coverThumbnail" src="thumbnail.jpg" >
	<div class="coverThumbnail">
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 13.3"><path class="playIcon" d="M9.6 0C12.1 0 14 0.1 16 0.2c0.7 0 1.4 0.2 1.9 0.7 0.7 0.6 0.9 1.5 0.9 2.3 0.2 2.3 0.2 4.6 0 7 -0.1 0.9-0.3 1.8-1.1 2.4 -0.5 0.4-1 0.5-1.6 0.6 -3.3 0.2-6.6 0.2-9.9 0.1 -1.2 0-2.4 0-3.5-0.2 -1.6-0.2-2.2-0.9-2.5-2.5C0.1 9.7 0 8.9 0 8 0 6.4 0 4.8 0.2 3.2c0.1-0.8 0.2-1.5 0.7-2.1C1.4 0.4 2.2 0.2 3 0.2 5.4 0 7.8 0 9.6 0zM12.7 6.7C11 5.8 9.3 4.9 7.6 4c0 1.8 0 3.5 0 5.3C9.3 8.4 11 7.5 12.7 6.7z"/></svg>
		</div>
	</div>
</div>
```

## License
<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br>
Copyright - ZIMONH 2018
