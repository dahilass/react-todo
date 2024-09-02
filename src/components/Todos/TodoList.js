import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}{' '}
    </div>
  );
}

// function TodoList({ todos }) {
//   console.log(!!todos);
//   return (
//     <div className={styles.todoListContainer}>
//       {todos.length ? (
//         todos.map((todo, i) => <Todo key={i} todo={todo} />)
//       ) : (
//         <h2>Todo list is empty</h2>
//       )}{' '}
//     </div>
//   );
// }

export default TodoList;
