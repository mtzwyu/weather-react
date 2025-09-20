export default function CurrentWeather({ data }) {
  const { temp_c, humidity } = data;
  const { text, icon } = data.condition;
  return (
    <div className="current">
      <h2>{data.name}</h2>
      <img src={`https:${icon}`} alt={text} />
      <p className="temp">{Math.round(temp_c)} °C</p>
      <p className="desc">{text}</p>
      <p>Độ ẩm: {humidity} %</p>
      <p>Gió: {data.wind_kph} km/h</p>
    </div>
  );
}