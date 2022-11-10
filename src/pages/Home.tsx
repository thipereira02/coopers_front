import React from "react";

import Header from "../components/Header";
import Cover from "../components/Cover";
import ToDoList from "../components/ToDoList";

export default function Home() {
	return (
		<>
			<Header />
			<Cover />
			<ToDoList />
		</>
	);
}