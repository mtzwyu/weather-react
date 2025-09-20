import { useState } from 'react';

export default function SearchBox({ onSearch }) {
  const [city, setCity] = useState('');

  const handle = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city.trim());
  };

  return (
    <form onSubmit={handle} className="search">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Nhập tên thành phố"
      />
      <button type="submit">Tìm</button>
    </form>
  );
}