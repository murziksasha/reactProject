import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import Employeeslistitem from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App(){

  const data = [
    {name:'John C.', salary: 800, increase: false},
    {name:'Alex M.' , salary: 3000, increase: true},
    {name: 'Carl U.', salary: 5000, increase: false}
  ];
  
  return (
    <div className='app'>
      <AppInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

      <Employeeslistitem data={data}/>
      <EmployeesAddForm/>

    </div>
  );
}

export default App;