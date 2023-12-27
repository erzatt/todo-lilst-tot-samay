import React from "react";

const TodoListItem = props => {
	const { completed, important, id } = props;
	const liStyle = {
		textDecoration: completed ? "line-through" : "",
		fontWeight: important ? "bold" : "",
		color: important ? "green" : "",
	};
	return (
		<span
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
			}}>
			<span
				style={liStyle}
				onClick={() => {
					props.onCompleted(id);
				}}>
				{props.todoName}
			</span>
			{/* <button className="btn-outline-danger"></button> */}
			<span>
				<button
					className=" btn btn-outline-danger"
					onClick={() => {
						props.onDelete(props.id);
					}}>
					<i className="bi bi-trash3-fill"></i>
				</button>
				{/* <button>important</button> */}
				<button
					style={liStyle}
					onClick={() => {
						props.onImportant(id);
					}}
					className="btn btn-outline-warning">
					<i className="bi bi-exclamation-circle"></i>
				</button>
			</span>
		</span>
	);
};

export default TodoListItem;
