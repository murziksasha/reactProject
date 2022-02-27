import {Component} from 'react';
import './employees-list-item.css';

class Employeeslistitem extends Component{
  constructor(props){
    super(props);
    this.state={
      increase: false,
      favor: false
    }
  }

  onIncrease = ()=>{
    this.setState(({increase}) =>({
      increase: !increase
    }))
  }
  
  onFavorite= (e)=>{
    
     this.setState(({rise})=>({
       rise : !rise
     }))
    
  }

    onFavor = ()=>{
      this.setState(({favor}) =>({
        favor: !favor
      }))

  }


  render(){
    const {name, salary, onDelete} = this.props;

    const {increase} = this.state;
    const {favor} = this.state;


    let classNames = "list-group-item d-flex justify-content-between";

    if(increase) {
      classNames +=" increase";
    }


    if(favor){

      classNames +=" like";
    }
    return (
      <li className={classNames}>
        <span className="list-group-item-label"

        onClick={this.onFavor}>

          {name}
        </span>
        <input type="text" className="list-group-item-input" 
        defaultValue={salary + "$"}/>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-cookie btn-sm" type='button'
          onClick={this.onIncrease}>
            <i className="fas fa-cookie"></i>
          </button>
  
          <button className="btn-trash btn-sm" type='button'
          onClick={onDelete}>
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default Employeeslistitem;