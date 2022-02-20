import Employeeslistitem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesItem = ({data})=>{

  const elements = data.map(item=>{
    return (
      <Employeeslistitem {...item}/>
    );
  });


  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
}

export default EmployeesItem;