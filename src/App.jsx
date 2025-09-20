import SearchBox from './components/SearchBox';
import CurrentWeather from './components/CurrentWeather';
import ForecastList from './components/ForecastList';
import useWeather from './hooks/useWeather';
import Spinner from './components/Spinner';

function App() {
  const { current, forecast, loading, error, fetchWeather } = useWeather();

  return (
    <div className="app">
      <h1>🌤 Ứng dụng thời tiết</h1>
      <SearchBox onSearch={fetchWeather} />

      {error && <p className="error">{error}</p>}

      {loading ? (
        <Spinner />
      ) : (
        <>
          {current && (
            <div key={current.name} className="current">
              <CurrentWeather data={current} />
            </div>
          )}
          {forecast && (
            <div key={current.name + 'f'} className="forecast">
              <ForecastList data={forecast} />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;