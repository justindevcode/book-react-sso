import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import React,{useEffect, useState} from 'react';
import {Container,List, Paper} from "@mui/material";
import AddTodo from "./AddTodo"
import { call } from "./service/ApiService";

function App() {
  const [items, setItems] = useState([]);

  // //무한루프 안빠지게
  // useEffect(() => {
  //   const requestOptions = {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json"},
  //   }
  //   fetch("http://localhost:8080/todo", requestOptions)
  //   .then((reponse) => reponse.json())
  //   .then(
  //     (response) => {
  //       setItems(response.data);
  //     },
  //     (error) => {}
  //   )
  // },[])

  useEffect(() => {
    call("/todo", "GET", null)
    .then((response) => setItems( response.data )
    );
  }, []);

  const add = (item) => {
    call("/todo", "POST", item).then((response) =>
      setItems(response.data )
    );
  };

  const deleteItem = (item) => {
    call("/todo", "DELETE", item).then((response) =>
      setItems(response.data )
    );
  };

  const editItem = (item) => {
    call("/todo", "PUT", item).then((response) =>
      setItems(response.data )
    );
  };




// const addItem = (item) => {
//   item.id = "ID-" + items.length;
//   item.done = false;
//   setItems([...items,item]);
//   console.log("items : ", items);
// }

// const deleteItem = (item) => {
//   const newItems = items.filter(e => e.id !== item.id);
//   setItems([...newItems]);
// }

// const editItem = () => {
//   setItems([...items]);
// }

  let todoItems = items.length > 0 && (
    <Paper style={{margin:16}}>
      <List>
        {items.map((item) => (
          <Todo item={item} key ={item.id} editItem={editItem} deleteItem={deleteItem} />
        ))}
      </List>
    </Paper>
  )
  return (<div className="App">
        <Container maxWidth="md">
          <AddTodo addItem={add}/>
          <div className='TodoList'>{todoItems}</div>
        </Container>
  </div>)
}

export default App;
