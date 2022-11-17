import React from "react";

import { Tasks, EmptyCircle, CircleFill } from "../layouts/common/Components";

export function TodoExample() {
	const toDoExample = [
		"this is a new task",
		"Develop the To-do list page",
		"Create the drag-and-drop function",
		"Add new tasks",
		"Delete itens",
		"Erase all",
		"Checked item goes to Done list",
		"This item label may be edited",
		"Editing an item..."
	];

	return(
		<Tasks>
			{toDoExample.map((item, index) => (
				<>
					<div key={index}>
						<EmptyCircle />
						<p>{item}</p>
						<a>delete</a>
					</div>								
				</>
			))}
		</Tasks>
	);
}

export function DoneExample() {
	const doneExamples = [
		"Get FTP credentials",
		"Home Page Design",
		"E-mail John about the deadline",
		"Create a Google Drive folder",
		"Send a gift to the client"
	];

	return(
		<Tasks>
			{doneExamples.map((item, index) => (
				<>
					<div key={index}>
						<CircleFill />
						<p>{item}</p>
						<a>delete</a>
					</div>
				</>
			))}
		</Tasks>
	);
}