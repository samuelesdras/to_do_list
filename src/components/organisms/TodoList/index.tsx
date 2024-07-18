import TodoItem from "../../molecules/TodoItem";

type TodoListProps = {
  tasks: string[];
  checkedTasks: boolean[];
  onDeleteTask: (index: number) => void;
  onToggleChecked: (index: number) => void;
  onEditTask: (index: number, newTask: string) => void;
};

export default function TodoList({
  tasks,
  checkedTasks,
  onToggleChecked,
  onDeleteTask,
  onEditTask,
}: TodoListProps) {
  return (
    <div className="flex justify-center items-center max-w-9">
      {tasks?.length > 0 && (
        <div className="mt-10 gap-4  min-w-80">
          <ul className="list-disc pl-5 py-2 ">
            {tasks.map((task, index) => (
              <li className="border-b border-gray-300 mb-2" key={index}>
                <TodoItem
                  task={task}
                  index={index}
                  isChecked={checkedTasks[index]}
                  onToggleChecked={onToggleChecked}
                  onDelete={() => onDeleteTask(index)}
                  onEdit={onEditTask}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
