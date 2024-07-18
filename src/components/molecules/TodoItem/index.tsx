import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaTrash, FaUndo } from "react-icons/fa";
import Input from "../../atoms/input";

type TodoItemProps = {
  task: string;
  index: number;
  isChecked: boolean;
  onToggleChecked: (index: number) => void;
  onDelete: (index: number) => void;
  onEdit: (index: number, newTask: string) => void;
};

const shakeAnimation = {
  hidden: { x: 0 },
  visible: {
    x: [0, -5, 5, -5, 5, -5, 5, -5, 5, 0],
    transition: { duration: 0.9 },
  },
};

export default function TodoItem({
  task,
  index,
  isChecked,
  onToggleChecked,
  onEdit,
  onDelete,
}: TodoItemProps) {
  const [isShaking, setIsShaking] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleSaveEdit = () => {
    onEdit(index, editedTask);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedTask(task);
    setIsEditing(false);
  };

  function handleCheck() {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
    onToggleChecked(index);
  }

  return (
    <div key={index} className="flex flex-row justify-between">
      {isEditing ? (
        <Input
          placeholder="Edite o nome da tarefa."
          value={editedTask}
          onChange={(e) => setEditedTask((e.target as HTMLInputElement).value)}
          onBlur={handleSaveEdit}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSaveEdit();
            if (e.key === "Escape") handleCancelEdit();
          }}
          autoFocus
        />
      ) : (
        <motion.p
          className={`flex-1 mr-2 truncate ${isChecked ? "line-through" : ""}`}
          variants={shakeAnimation}
          initial="hidden"
          animate={isShaking ? "visible" : "hidden"}
          onClick={() => setIsEditing(true)}
        >
          {task}
        </motion.p>
      )}
      <div className="flex flex-row gap-4 ml-4 items-center hover:cursor-pointer">
        {isChecked ? (
          <FaUndo aria-label="undo" onClick={handleCheck} />
        ) : (
          <FaCheck aria-label="check" onClick={handleCheck} />
        )}
        <FaTrash aria-label="delete" onClick={() => onDelete(index)} />
      </div>
    </div>
  );
}
