import "./App.css";

import styles from "./styles";
import tasks from "./tasks";

function App() {
  const status = (done) =>
    done ? (
      <td className="fa-check-circle">Yes</td>
    ) : (
      <td className="fa-times-circle">No</td>
    );

  const taskList = tasks.map((task) => (
    <tr>
      {status(task.done)}
      <td>{task.name}</td>
      <td className={task.priority}>{task.priority.toUpperCase()}</td>
    </tr>
  ));

  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <table>
        <thead>
          <th style={styles.doneStyling}>DONE</th>
          <th style={styles.taskStyling}>TASK</th>
          <th>PRIORITY</th>
        </thead>
        <tbody>{taskList}</tbody>
      </table>
    </div>
  );
}

export default App;
