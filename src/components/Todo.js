
const Todo = ({todo, time}) => {
  return (
    <div className="todoContainer">
        <h3>Feladat: {todo}</h3>
        <span>Szükséges idő: {time}</span>
    </div>
  )
}

export default Todo