import { useState } from "react";
import { Form } from "../Form/Form";
import { TodoItem } from "../TodoItem/TodoItem";
import styles from "./Todo.module.css"

const defaultTodos = [
  {
    id: "000",
    text: "First todo",
		completed: false,
	 time: '25.04.21'
  },
  {
    id: "111",
    text: "Second todo",
	  completed: true,
	  time: '25.04.21'
  },
];

interface ITodoItem{
	id: string,
	text: string,
	  completed: boolean,
	time: string
}

export const TodoList = () => {
//   const [text, setText] = useState<string>("");


  const [todos, setTodos] =useState<ITodoItem[] > (
		  []
	 );

  const onClickDelete = (id: string) => {
   
	  const newTodos = todos.filter(function (todo) {
		  if (todo.id !== id) {
			return true
		}
	  })
	  setTodos(newTodos)
    console.log(id);
  };

  const onClickComplete = (id: string) => {
   
	  const newTodos = todos.map(item => {
		  if (item.id === id) {
			  item.completed = !item.completed
		  }
			  return item
		  
	  })
	  setTodos(newTodos)
    
  };

	const addNewTodo = (text: string) => {
		if (text==='') {
			alert('Добавь новую задачу')
		}
		else {
const date = new Date()
			const newTodo = {
				id:
					"id" +
					Math.random().toString(16).slice(2),
				text: text,
				completed: false,
				time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
			};

			const newTodos = [...todos, newTodo];
			setTodos(newTodos);
			// setText("")
		}
   
  };

  return (
    <div className={`${styles.main}`}
      
    >
      <Form
        addNewTodo={addNewTodo}
      //   text={text}
		// 	  setText={setText}
			  
		  />
		  {todos.length === 0 ? (<p className={`${styles.motivation}`} >Начни что-нибудь делать</p>): null}
      {todos.map((item) => {
        return (
          <TodoItem
            key={item.id}
            text={item.text}
            onDelete={() =>
              onClickDelete(item.id)
            }
            onComplete={() =>
              onClickComplete(item.id)
            }
				  completed={item.completed}
				  time= {item.time}
          />
        );
		})}
		  <div className={`${styles.stata}`} >
		  	<p >Всего дел: {todos.length}</p>
			  <p>Выполненные: {todos.reduce((prev, curr) => {
				  if (curr.completed) {
					  return prev +1
				  }
				  return prev
			  },0
			  )}</p>
		  </div>
    </div>
  );
};