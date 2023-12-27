import React from "react";

const AppHeader = ({ allTodo, doneTodo, doneTodoIm }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
			}}
			className="d-flex">
			<h1>Todo List</h1>
			<h2>
				{allTodo} more todo {doneTodo && doneTodoIm} done
			</h2>
		</div>
	);
};

export default AppHeader;
