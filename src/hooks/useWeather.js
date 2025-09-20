import { useState, useCallback } from 'react';
import { getCurrent, getForecast } from '../api/weather';

export default function useWeather() {
  const [current, setCurrent]   = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState(null);

    const fetchWeather = useCallback(async (city) => {
    setLoading(true); setError(null);
    try {
        console.log('🔍 calling API for', city);
        const [c, f] = await Promise.all([
        getCurrent(city),
        getForecast(city)
        ]);
        console.log('✅ current', c);
        console.log('✅ forecast', f);
        setCurrent(c.current || c);     // WeatherAPI trả về obj gốc
        setForecast(f.forecast || f);
    } catch (e) {
        console.error('❌ API failed', e);
        setError(e.message || 'Lỗi không xác định');
    } finally {
        setLoading(false);
    }
    }, []);

  return { current, forecast, loading, error, fetchWeather };
}