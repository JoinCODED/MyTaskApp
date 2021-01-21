import TaskRow from "./TaskRow";
import styles from "../styles";
import tasks from "../tasks";

const TaskTable = () => {
  const taskList = tasks.map((oneTask) => (
    <TaskRow key={oneTask.id} task={oneTask} />
  ));
  return (
    <table>
      <thead>
        <th style={styles.doneStyling}>DONE</th>
        <th style={styles.taskStyling}>TASK</th>
        <th>PRIORITY</th>
      </thead>
      <tbody>{taskList}</tbody>
    </table>
  );
};

export default TaskTable;
