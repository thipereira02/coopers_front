import React from "react";

import { Tasks, EmptyCircle, CircleFill } from "../layouts/common/Components";

export function UserToDoTasks(tasks: any) {
	return(
		<Tasks>
			{tasks.tasks.map((item: any, index: number) => (
				<>
					<div key={index}>
						<EmptyCircle />
						<p>{item.description}</p>
						<a>delete</a>
					</div>								
				</>
			))}
		</Tasks>
	);
}

export function UserDoneTasks(tasks: any) {
	return(
		<Tasks>
			{tasks.tasks.map((item: any, index: number) => (
				<>
					<div key={index}>
						<CircleFill />
						<p>{item.description}</p>
						<a>delete</a>
					</div>								
				</>
			))}
		</Tasks>
	);
}