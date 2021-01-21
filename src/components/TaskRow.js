const TaskRow = (props) => {
  const status = (done) =>
    done ? (
      <td className="fa-check-circle">Yes</td>
    ) : (
      <td className="fa-times-circle">No</td>
    );

  return (
    <tr>
      {status(props.task.done)}
      <td>{props.task.name}</td>
      <td className={props.task.priority}>
        {props.task.priority.toUpperCase()}
      </td>
    </tr>
  );
};

export default TaskRow;
