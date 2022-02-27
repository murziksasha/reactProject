import Employeeslistitem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesItem = ({data, onDelete, onToggleProp})=>{

  const elements = data.map(item=>{
    const {id, ...itemProps} = item;
    return (
      <Employeeslistitem 
      key={id} 
      {...itemProps}
      onDelete={()=>onDelete(id)}
      onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
    );
  });


  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
}

export default EmployeesItem;