import React from "react";

const TodoSearch = ({ btnStatus, onSetBtn, onSearch }) => {
	const btns = [
		{ btnName: "All", status: "all" },
		{ btnName: "Active", status: "active" },
		{ btnName: "Done", status: "done" },
	];
	return (
		<div className="d-flex">
			<input
				onChange={event => {
					onSearch(event.target.value.trim());
				}}
				className="form-control"
				type="text"
				placeholder="search"
			/>
			{btns.map(btn => {
				let isActive =
					btnStatus === btn.status ? "btn-info" : "btn-outline-secondary";
				return (
					<button
						onClick={() => onSetBtn(btn.status)}
						className={`btn ${isActive}`}>
						{btn.btnName}
					</button>
				);
			})}
		</div>
	);
};

export default TodoSearch;
