// src/hooks/useWeather.js
import { useState, useCallback } from 'react';
import { getCurrent, getForecast } from '../api/weather';

export default function useWeather() {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async (city) => {
    setLoading(true);
    setError(null);
    try {
      const [c, f] = await Promise.all([getCurrent(city), getForecast(city)]);

      /* ---- bắt lỗi không tìm thấy thành phố ---- */
      if (c.error?.code === 1006 || f.error?.code === 1006) {
        throw new Error('Không tìm thấy thành phố. Vui lòng nhập thành phố hoặc thủ đô lớn của nước đó.');
      }

      setCurrent(c.current);
      setForecast(f.forecast);
    } catch (e) {
      setError(e.message || 'Lỗi không xác định');
    } finally {
      setLoading(false);
    }
  }, []);

  return { current, forecast, loading, error, fetchWeather };
}