import React, { useState, useEffect } from 'react';
import TableRow from './TableRow';
import './MainComponent.css'; // Import the CSS file for styling

const MainComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Crypto Market</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Image</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <TableRow key={item.id} data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MainComponent;
