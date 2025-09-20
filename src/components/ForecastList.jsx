export default function ForecastList({ data }) {
  return (
    <div className="forecast">
      {data.forecastday.map(d => (
        <div key={d.date} className="card">
          <p>{new Date(d.date).toLocaleDateString('vi',{weekday:'short',day:'numeric'})}</p>
          <img src={`https:${d.day.condition.icon}`} alt={d.day.condition.text} />
          <p>{Math.round(d.day.mintemp_c)} – {Math.round(d.day.maxtemp_c)} °C</p>
        </div>
      ))}
    </div>
  );
}