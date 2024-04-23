import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";



//create your first component
const Home = () => {
	const [ inputValue, setInputValue ] = useState("")
	const [ todos, setTodos ] = useState([])
	const handleForm = (event) => {
		event.preventDefault()
		setTodos(todos.concat(inputValue));
		
			setInputValue("");
	}
	return (
		<div className="container">
			<h1>My Todos {inputValue}</h1>
			
				<form onSubmit={handleForm}>
			<input type="text"
			onChange={(event) => {setInputValue(event.target.value)}}
			value={inputValue}
			placeholder="What to you need to do?"></input>
			<button style={{opacity:0}} type="submit"></button>
			</form><ul>
			{todos?.map((item, index) => (
				<li key={index}>
					{item}{""}
			<FaTrash
			onClick={() =>
			setTodos(
				todos.filter(
					(t,currentIndex) =>
					index != currentIndex
				))}/>
			</li>
			))}
			</ul>
		
			<div>{todos?.length}taks</div>
		</div >
	);
};

export default Home;
