const KEY = import.meta.env.VITE_WEATHERAPI_KEY; // đọc từ .env
const BASE = 'https://api.weatherapi.com/v1';

/* lấy thời tiết hiện tại */
export const getCurrent = (city) =>
  fetch(`${BASE}/current.json?key=${KEY}&q=${city}&lang=vi`)
    .then((r) => r.json());

/* lấy dự báo 5 ngày */
export const getForecast = (city) =>
  fetch(`${BASE}/forecast.json?key=${KEY}&q=${city}&days=5&lang=vi`)
    .then((r) => r.json());
console.log('KEY loaded:', KEY);