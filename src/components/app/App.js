import { Component } from "react";
import AppHeader from "../app-header/AppHeader";
import TodoAdd from "../todo-add/TodoAdd";
import TodoList from "../todo-list/TodoList";
import TodoSearch from "../todo-search/TodoSearch";

import "./App.css";

class App extends Component {
	state = {
		todos: [
			{ name: "Learn HTML", completed: false, important: false, id: 1 },
			{ name: "Learn JS", completed: true, important: true, id: 2 },
			{ name: "Learn JS2", completed: false, important: false, id: 3 },
		],
		btnStatus: "all",
		searchText: "",

		//all|active|done
	};
	todoSearch = (todos, todoName) => {
		if (todoName.length === 0) {
			return todos;
		}
		return todos.filter(el =>
			el.name.toLowerCase().includes(todoName.toLowerCase())
		);
	};
	setSearchText = text => {
		this.setState({ searchText: text });
	};
	setBtn = status => {
		this.setState({ btnStatus: status });
	};

	filterTodo = (todos, todoStatus) => {
		//todos=[{},{},{}]
		//todoStatus /all/active/done
		switch (todoStatus) {
			case "all":
				return todos;

			case "active":
				return todos.filter(el => el.completed === false);

			case "done":
				return todos.filter(el => el.completed === true);

			default:
				return todos;
		}
	};
	deleteTodo = id => {
		// delete logika for delete
		this.setState({ todos: this.state.todos.filter(el => el.id !== id) });
	};
	changeCompleted = id => {
		let { todos } = this.state;
		let index = this.state.todos.findIndex(el => el.id === id);
		console.log(index);
		let beforeTodo = todos.slice(0, index);
		let afterTodo = todos.slice(index + 1);
		let currenTodo = todos[index];
		let updateTodo = {
			...currenTodo,
			completed: !currenTodo.completed,
		};
		this.setState({ todos: [...beforeTodo, updateTodo, ...afterTodo] });
	};
	changeImportant = id => {
		let { todos } = this.state;
		let index = this.state.todos.findIndex(el => el.id === id);
		let beforeTodo = todos.slice(0, index);
		let afterTodo = todos.slice(index + 1);
		let currenTodo = todos[index];
		let updateTodo = {
			...currenTodo,
			important: !currenTodo.important,
		};
		this.setState({ todos: [...beforeTodo, updateTodo, ...afterTodo] });
	};
	addTodo = name => {
		const oldTodo = this.state.todos.map(el => el.id);
		const newTodo = {
			name: name,
			completed: false,
			important: false,
			id: oldTodo.at(-1) + 1 || 1,
		};
		this.setState({ todos: [...this.state.todos, newTodo] });
	};
	render() {
		const { todos, btnStatus, searchText } = this.state;
		const doneTodo = todos.filter(el => el.completed === true).length;
		const doneTodoIm = todos.filter(el => el.important === true).length;

		const allTodo = todos.length - doneTodoIm;
		const { filterTodo, todoSearch } = this;
		const filteredTodo = todoSearch(filterTodo(todos, btnStatus), searchText);

		return (
			<div className="container">
				<AppHeader
					allTodo={allTodo}
					doneTodo={doneTodo}
					doneTodoIm={doneTodoIm}
				/>
				<TodoSearch
					btnStatus={btnStatus}
					onSetBtn={this.setBtn}
					onSearch={this.setSearchText}
				/>
				<TodoList
					todoMass={filteredTodo}
					onDelete={this.deleteTodo}
					onCompleted={this.changeCompleted}
					onImportant={this.changeImportant}
				/>
				<TodoAdd onAddTodo={this.addTodo} />
			</div>
		);
	}
}

export default App;
