import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import Employeeslistitem from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : [
        {name:'John C.', salary: 800, increase: false,  favor: true, id:1},
        {name:'Alex M.' , salary: 3000, increase: true, favor: false, id:2},
        {name: 'Carl U.', salary: 5000, increase: false, favor: false, id:3}
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase:false,
      favor: false,
      id: this.maxId++
    }
    this.setState(({data}) => ({

    }))
  }

  onToggleProp = (id, prop) => {


    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }))

  }



  render(){
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item=> item.increase).length;
    return (
      <div className='app'>
        <AppInfo employees={employees} increased={increased}/>
  
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
  
        <Employeeslistitem 
        data={this.state.data}
        onDelete={this.deleteItem}
        onToggleProp={this.onToggleProp}/>
        <EmployeesAddForm onAdd={this.addItem}
/>
  
      </div>
    );
  }

}

export default App;