# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### INFO!

If website dont work try to turn off a adBlock ;)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](/images/screenShots/s1.png)
![](/images/screenShots/s2.png)
![](/images/screenShots/s3.png)

### Links

- Live Site URL: [Live](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JavaScript
- Mobile-first workflow
- Api's
- Axios

### What I learned

I learned to work and connect api and use axios

```js
const getIpAdress = ipAdress => {
	error.style.visibility = 'hidden'
	const URL = `https://geo.ipify.org/api/v2/country,city?apiKey=at_2HKUnyS6jHGEM5tE5znlWOoa8TJih&ipAddress=${ipAdress}`
	axios
		.get(URL)
		.then(res => {
			console.log(res)
			localization = res.data.location

			showMap(
				localization.lat,
				localization.lng,
				localization.city,
				localization.country,
				res.data.ip,
				res.data.isp,
				localization.timezone
			)
		})
		.catch(err => console.error(err))
}
```

### Useful resources

- [Get IP Location](https://geo.ipify.org/) - I used this API to get location and data of this location to catch this and use to viev map.
- [Map API](https://leafletjs.com/) - I used this API to show map with market at IP location
