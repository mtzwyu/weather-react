import SearchBox from './components/SearchBox';
import CurrentWeather from './components/CurrentWeather';
import ForecastList from './components/ForecastList';
import useWeather from './hooks/useWeather';

function App() {
  const { current, forecast, loading, error, fetchWeather } = useWeather();

  return (
    <div className="app">
      <h1>🌤 Ứng dụng thời tiết</h1>
      <SearchBox onSearch={fetchWeather} />

      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">Đang tải…</p>}

      {current && <CurrentWeather data={current} />}
      {forecast && <ForecastList data={forecast} />}
    </div>
  );
}

export default App;