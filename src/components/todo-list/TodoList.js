import React from "react";
import TodoListItem from "../todo-list-item/TodoListItem";

const TodoList = props => {
	if (props.todoMass.length === 0) {
		return <h4 className="text-center">Todo Not Found</h4>;
	}
	return (
		<ul className="list-group">
			{props.todoMass.map(el => (
				<li className="list-group-item" key={el.id}>
					<TodoListItem
						{...props}
						todoName={el.name}
						id={el.id}
						completed={el.completed}
						important={el.important}
					/>
				</li>
			))}
			{/* <TodoListItem /> */}
		</ul>
	);
};

export default TodoList;
