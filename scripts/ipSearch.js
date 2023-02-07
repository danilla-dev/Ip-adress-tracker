const searchBtn = document.querySelector('.search-btn')
const input = document.querySelector('.ip-input')
const error = document.querySelector('.error')
const infoWindow = document.querySelector('.info-window')

const ipResult = document.querySelector('.ip-adress-result')
const locationResult = document.querySelector('.location-result')
const timeZomeResult = document.querySelector('.time-zone-result')
const ispResult = document.querySelector('.isp-result')

const mapContainer = document.querySelector('.map-container')
const ipv4RegExp = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/gm

let localization
let as
const searchLocation = () => {
	if (ipv4RegExp.test(input.value)) {
		error.style.visibility = 'hidden'
		getIpAdress(input.value)
	} else {
		error.style.visibility = 'visible'
	}
}
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


const showMap = (lat, lng, city, country, ip, isp, timezone) => {
	mapContainer.innerHTML = '<div id="map" style="height: 100%;"></div>'
	renderMap(lat, lng)
	printValue(city, country, ip, isp, timezone)
}


const renderMap = (lat, lng) => {
	const map = L.map('map').setView([lat, lng], 13)
	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	}).addTo(map)
	const marker = L.marker([lat, lng]).addTo(map)
}


const printValue = (city, country, ip, isp, timezone) => {
	ipResult.textContent = ip
	locationResult.textContent = `${city}, ${country}`
	timeZomeResult.textContent = `UTC ${timezone}`
	ispResult.textContent = isp
	infoWindow.style.visibility = 'visible'
}



searchBtn.addEventListener('click', searchLocation)

window.addEventListener('DOMContentLoaded', getIpAdress(''))
