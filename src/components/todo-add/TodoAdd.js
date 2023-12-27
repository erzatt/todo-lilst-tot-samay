import React, { Component } from "react";

class TodoAdd extends Component {
	state = {
		text: "",
	};
	// addTodo = () => {
	// 	this.props.onAddTodo(this.state.text);
	// };
	render() {
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
				}}>
				<input
					value={this.state.text}
					className="form-control"
					type="text"
					placeholder="Enter todo"
					onChange={event => {
						this.setState({ text: event.target.value });
					}}
				/>
				<button
					onClick={() => {
						if (this.state.text.trim()) {
							this.props.onAddTodo(this.state.text);
							this.setState({ text: " " });
						}
					}}
					className="btn btn-success">
					Add
				</button>
			</div>
		);
	}
}

export default TodoAdd;
