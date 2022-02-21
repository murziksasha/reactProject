import Employeeslistitem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesItem = ({data})=>{

  const elements = data.map(item=>{
    const {id, ...itemProps} = item;
    return (
      <Employeeslistitem key={id} {...itemProps}/>
    );
  });


  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
}

export default EmployeesItem;