# YouTube-Thumbnail
Replace the default YouTube thumbnail

## Step 1: install a user script manager
- Copy the __script.js__
- Copy the __style.css__
- Use this in your page:
```
<div id="myMovie" style=" width: 1100px; padding-bottom: 600px; /* padding-bottom = height */"></div>

<script>
customThumbnail({
	id:'myMovie',
	url:'https://www.youtube.com/embed/H46Kil1k-m8',
	thumbnail:'thumbnail.jpg'
});
</script>
```

## License
<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br>
Copyright - ZIMONH 2018
