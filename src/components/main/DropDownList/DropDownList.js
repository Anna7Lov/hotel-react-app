import './DropDownList.scss';

export default function DropDownList({options, selected, handleChange}) {  

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