import React from "react";

import Header from "../components/Header";
import Cover from "../components/Cover";
import ToDoList from "../components/ToDoList";
import GoodThing from "../components/GoodThing";

export default function Home() {
	return (
		<>
			<Header />
			<Cover />
			<ToDoList />
			<GoodThing />
		</>
	);
}