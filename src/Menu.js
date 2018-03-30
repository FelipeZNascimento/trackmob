import React, { Component } from 'react';
import './Menu.css';
import {Row, Col, Button, Icon} from 'react-materialize'

console.clear();
const TodoForm = ({addTodo}) => {
	let input;
	return (
		<Row className="noMargin">
			<Col s={12} l={6} offset={'l3'} className="center-align">
				<Col l={7} s={12} offset={'l1'}><input label="First Name" placeholder="Task" className="noMargin" ref={node => {input = node;}} /></Col>
				<Col l={4} s={4} offset={'s4'}>
					<Button type="submit" className="orange" onClick={() => {addTodo(input.value); input.value= '';}}>
						<Icon>add_box</Icon>
					</Button>
				</Col>			
			</Col>
		</Row>
  );
};

const Todo = ({todo, remove, check}) => {
  // Each Todo
  return (
		<Col s={12} className="listItem hoverable">
			<Col s={2} className="noMargin">
				<Button type="submit" className="green left button" onClick={() => {check(todo.id)}}>
					<Icon>{todo.isChecked ? 'cancel' : 'check'}</Icon>
				</Button>
			</Col>
			<Col s={8} className={todo.isChecked ? 'checked' : 'unchecked'}>
				{todo.text}
			</Col>
			<Col s={2} className="noMargin">
				<Button type="submit" className="red right button" onClick={() => {remove(todo.id)}}>
					<Icon>delete</Icon>
				</Button>
			</Col>
		</Col>
	);

}

const TodoList = ({todos, remove, check}) => {
  const todoNode = todos.map((todo) => {
    return (
			<Row className="noMargin">
				<Col s={12} l={6} offset={'l3'}>
					<Todo todo={todo} key={todo.id} remove={remove} check={check} isChecked={todo.isChecked}/>
				</Col>
			</Row>
  )});
  return (todoNode);
}

const Title = () => {
  return (
    <div>
       <div>
          <h3>To Do List</h3>
       </div>
    </div>
  );
}


window.id = 0;
class Menu extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      taskList: [
				 {text: 'Conhecimento básico de programação', id: window.id++, isChecked: true},
				 {text: 'Conhecimento básico de javascript', id: window.id++, isChecked: true},
				 {text: 'Conhecimento básico de git', id: window.id++, isChecked: true},
				 {text: 'Vontade de aprender coisas novas e resolver problemas complexos', id: window.id++, isChecked: true},
				 {text: 'Proatividade', id: window.id++, isChecked: true},
				 {text: 'Conhecimento básico de React', id: window.id++, isChecked: true},
				 {text: 'Conhecimento básico de React Native', id: window.id++, isChecked: false},
				 {text: 'Conhecimento básico de Flexbox', id: window.id++, isChecked: false},
				 {text: 'Conhecimento básico de Styling e Css', id: window.id++, isChecked: true},
				 {text: 'Diferencial: Inglês', id: window.id++, isChecked: true},
				 {text: 'Diferencial: Redux', id: window.id++, isChecked: false},
				 {text: 'Diferencial: Relay', id: window.id++, isChecked: false},
				 {text: 'Diferencial: Storybook ', id: window.id++, isChecked: false}]
    }
	
	this.addTodo = this.addTodo.bind(this);
  }
  
  addTodo(val){
    let task = {text: val, id: window.id++, isChecked: false}
	let taskList = [...this.state.taskList];

    taskList.unshift(task);
    this.setState({taskList: taskList});
  }

  handleRemove(id){
	let taskList = [...this.state.taskList];
	for (let i = 0; i < taskList.length; i ++) {
		if (taskList[i].id == id) {
			taskList.splice(i, 1);
		}
	}	
	this.setState({taskList});
  }
  
  handleCheck(id){	
	let taskList = [...this.state.taskList];
	for (let i = 0; i < taskList.length; i ++) {
		if (taskList[i].id == id) {
			taskList[i].isChecked = !taskList[i].isChecked;
		}
	}	
	this.setState({taskList});
  }

  render(){
    return (
      <div>
        <Title />
        <TodoForm addTodo={this.addTodo.bind(this)}/>
		<div className="list">
			<TodoList
			  todos={this.state.taskList} 
			  remove={this.handleRemove.bind(this)}
			  check={this.handleCheck.bind(this)}
			/>
		</div>
      </div>
    );
  }
}

export default Menu;