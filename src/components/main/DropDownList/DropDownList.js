import React, { useEffect, useState } from 'react';
import axios from "axios";

import './DropDownList.scss';

export default function DropDownList() {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function getOptions() {
      const response = await axios.get('/api/options');
      setOptions(response.data);
    }
    getOptions();
  }, []);

  return (
    <div className='drop-down-list'>
      <label className='drop-down-list__label'>Persons
        <select className='drop-down-list__select'>
          {options.map((item) => (
            <option key={item.id} value={item.value}>{item.name}</option>
          ))}
        </select>
      </label>
    </div>
  )
}