# 🌤️ WeatherNow

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![API](https://img.shields.io/badge/OpenWeatherMap-API-orange?style=flat)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

> A responsive real-time weather dashboard. Search any city in the world, detect your location automatically, and get current conditions + a 5-day forecast — all in a clean dark UI.

---

## 📸 Preview

```
┌──────────────────────────────────────┐
│  WeatherNow                          │
│  [ Enter city name...  ]  [ Search ] │
│  📍 Use My Location                  │
│                                      │
│  New Delhi, IN                       │
│  Monday, 22 March 2025               │
│                                      │
│  ☀️         34°C                     │
│             Feels like 37°C          │
│  Clear sky                           │
│                                      │
│  Humidity  Wind     Vis    Pressure  │
│  28%       12 km/h  8 km   1012 hPa  │
│                                      │
│  ── 5-Day Forecast ──────────────    │
│  Mon  Tue  Wed  Thu  Fri             │
│  ☀️    ⛅   🌧️   ☀️   ☁️            │
│  34°  31°  27°  33°  30°             │
└──────────────────────────────────────┘
```

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔍 City Search | Search weather for any city worldwide |
| 📍 Geolocation | Auto-detect and use your current location |
| 🌡️ Current Weather | Temp, feels-like, description, weather icon |
| 📊 Stats Grid | Humidity, wind speed, visibility, pressure |
| 📅 5-Day Forecast | Daily average temp + weather icon per day |
| 💾 localStorage | Remembers and reloads your last searched city |
| 📱 Responsive | Works on desktop, tablet, and mobile |

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure and layout |
| CSS3 | Styling, dark gradient theme, responsive grid |
| JavaScript (ES6+) | API calls, DOM updates, async/await |
| OpenWeatherMap API | Live weather & forecast data |
| localStorage | Caching last searched city |

---

## 🚀 Setup & Run

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/weathernow.git
cd weathernow
```

### 2. Get a free API key
1. Visit [openweathermap.org](https://openweathermap.org/api) and sign up
2. Go to **My Profile → API Keys** and copy your key
3. The free plan gives you **1,000 API calls/day** — more than enough

### 3. Add your API key
Open `app.js` and update line 3:
```js
// Change this:
const API_KEY = 'YOUR_API_KEY_HERE';

// To your actual key:
const API_KEY = 'a1b2c3d4e5f6yourkeyhere';
```

### 4. Open in browser
```bash
# No server needed — just open the file
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

---

## 📁 File Structure

```
weathernow/
├── index.html    ← HTML structure, all sections
├── style.css     ← Dark theme, layout, responsive styles
├── app.js        ← API logic, DOM updates, localStorage
├── .gitignore    ← Ignores .env, node_modules, OS files
├── LICENSE       ← MIT License
└── README.md     ← You are here
```

---

## 🔑 API Endpoints Used

```
GET https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={key}
GET https://api.openweathermap.org/data/2.5/forecast?q={city}&units=metric&appid={key}
```

Both available on the **free tier**.

---

## 🌐 Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to repo → **Settings** → **Pages**
3. Set source: **Deploy from branch → main → / (root)**
4. Live at: `https://YOUR_USERNAME.github.io/weathernow`

> ⚠️ **Security Note:** Never push your real API key to a public GitHub repo. For production, hide it behind a backend proxy.

---

## 📄 License

[MIT](LICENSE) © 2025 Lokesh Kumar

---

## 👨‍💻 Author

**Lokesh Kumar** · Sonipat, Haryana, India
📧 17mr.antil@gmail.com · 🐙 [GitHub](https://github.com/YOUR_USERNAME)
