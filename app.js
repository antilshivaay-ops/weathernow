// WeatherNow - app.js
// Get your free API key from https://openweathermap.org/api
const API_KEY = '51b0f7baa81a0e0400bb160257db99b6';
const BASE = 'https://api.openweathermap.org/data/2.5';

const ICONS = {
  Clear: '☀️', Clouds: '☁️', Rain: '🌧️', Drizzle: '🌦️',
  Thunderstorm: '⛈️', Snow: '❄️', Mist: '🌫️', Fog: '🌫️',
  Haze: '🌫️', Smoke: '🌫️'
};
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getIcon(main) { return ICONS[main] || '🌤️'; }
function setText(id, val) { document.getElementById(id).textContent = val; }
function show(id) { document.getElementById(id).style.display = 'block'; }
function hide(id) { document.getElementById(id).style.display = 'none'; }

async function fetchWeather(query) {
  hide('error-msg'); hide('weather-card');
  show('loading');
  try {
    const [wRes, fRes] = await Promise.all([
      fetch(`${BASE}/weather?${query}&units=metric&appid=${API_KEY}`),
      fetch(`${BASE}/forecast?${query}&units=metric&appid=${API_KEY}`)
    ]);
    if (!wRes.ok) throw new Error('City not found');
    const w = await wRes.json();
    const f = await fRes.json();

    // Current weather
    setText('city-name', `${w.name}, ${w.sys.country}`);
    setText('date', new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
    setText('w-icon', getIcon(w.weather[0].main));
    setText('temp', `${Math.round(w.main.temp)}°C`);
    setText('feels', `Feels like ${Math.round(w.main.feels_like)}°C`);
    setText('desc', w.weather[0].description);
    setText('humidity', `${w.main.humidity}%`);
    setText('wind', `${Math.round(w.wind.speed * 3.6)} km/h`);
    setText('visibility', `${(w.visibility / 1000).toFixed(1)} km`);
    setText('pressure', `${w.main.pressure} hPa`);

    // Save to localStorage
    localStorage.setItem('lastCity', w.name);

    // 5-day forecast (group by day)
    const daily = {};
    f.list.forEach(item => {
      const d = new Date(item.dt * 1000);
      const key = d.toDateString();
      if (!daily[key]) daily[key] = { day: DAYS[d.getDay()], temps: [], main: item.weather[0].main };
      daily[key].temps.push(item.main.temp);
    });
    const grid = document.getElementById('forecast-grid');
    grid.innerHTML = Object.values(daily).slice(0, 5).map(d => {
      const avg = Math.round(d.temps.reduce((a, b) => a + b, 0) / d.temps.length);
      return `<div class="forecast-day">
        <div class="day">${d.day}</div>
        <div class="f-icon">${getIcon(d.main)}</div>
        <div class="f-temp">${avg}°C</div>
      </div>`;
    }).join('');

    hide('loading');
    show('weather-card');
  } catch (err) {
    hide('loading');
    show('error-msg');
    document.getElementById('error-msg').textContent = err.message || 'Something went wrong.';
  }
}

// Event listeners
document.getElementById('search-btn').addEventListener('click', () => {
  const city = document.getElementById('city-input').value.trim();
  if (city) fetchWeather(`q=${encodeURIComponent(city)}`);
});

document.getElementById('city-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('search-btn').click();
});

document.getElementById('loc-btn').addEventListener('click', () => {
  if (!navigator.geolocation) return alert('Geolocation not supported by your browser.');
  navigator.geolocation.getCurrentPosition(
    pos => fetchWeather(`lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`),
    () => alert('Location access denied. Please allow location or search manually.')
  );
});

// Load last searched city
const lastCity = localStorage.getItem('lastCity');
if (lastCity) {
  document.getElementById('city-input').value = lastCity;
  fetchWeather(`q=${encodeURIComponent(lastCity)}`);
}
