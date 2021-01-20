import "./App.css";

const styles = {
  doneStyling: { color: "blue", fontStyle: "italic" },
  taskStyling: { color: "grey" },
};

function App() {
  const task = {
    name: "Think think",
    done: false,
    priority: "low",
  };

  const status = (done) =>
    done ? (
      <td className="fa-check-circle">Yes</td>
    ) : (
      <td className="fa-times-circle">No</td>
    );

  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <table>
        <thead>
          <th style={styles.doneStyling}>DONE</th>
          <th style={styles.taskStyling}>TASK</th>
          <th>PRIORITY</th>
        </thead>
        <tbody>
          <tr>
            {status(task.done)}
            <td>Task: {task.name}</td>
            <td className={task.priority}>{task.priority.toUpperCase()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
