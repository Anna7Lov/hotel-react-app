import React, { useEffect, useState } from 'react';
import { Services } from '../../../services/services';

import './DropDownList.scss';

export default function DropDownList() {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState('');

  const handleChange = event => {       
    setSelected(event.target.value);    
  };

  useEffect(() => {
    async function getOptions() {
      const response = await Services.getOptions();
      setOptions(response.data);
    }
    getOptions();
  }, []);

  return (
    <div className='drop-down-list'>
      <label className='drop-down-list__label'>Persons
        <select className='drop-down-list__select' required value={selected} onChange={handleChange}>        
          {options.map((item, index) => (
            <option key={item.id} disabled={index === 0 ? true : false} value={item.value}>{item.name}</option>
          ))}
        </select>
      </label>
    </div>
  )
}