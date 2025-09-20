# weather-react

Ứng dụng thời tiết đơn giản built with Vite + React, dữ liệu từ WeatherAPI.

## Demo

Trực tiếp: `https://&lt;your-username&gt;.github.io/weather-react`

## Tính năng

- Xem thời tiết hiện tại (nhiệt độ, icon, độ ẩm, gió)
- Dự báo 5 ngày tiếp theo
- Hỗ trợ Tiếng Việt (lang=vi)
- Giao diện responsive, gradient nền động
- Không cần Redux, chỉ dùng React Hook

## Cài đặt & Chạy local

```bash
# 1. Clone
git clone https://github.com/&lt;your-username&gt;/weather-react.git
cd weather-react

# 2. Cài dependencies
npm install

# 3. Tạo file .env.local ở thư mục gốc
echo "VITE_WEATHERAPI_KEY=YOUR_WEATHERAPI_KEY" &gt; .env.local

# 4. Chạy
npm run dev
# Mở http://localhost:5173
