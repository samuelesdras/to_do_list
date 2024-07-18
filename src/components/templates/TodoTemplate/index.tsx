"use client";
import { useState } from "react";
import Button from "../../atoms/button";
import Input from "../../atoms/input";
import TodoList from "../../organisms/TodoList";
import { useLocalStorage } from "../../../hooks/useLocalStore";

export default function TodoTemplate() {
  const [tasks, setTasks] = useLocalStorage<string[]>("tasks", []);
  const [newTask, setNewTask] = useState<string>("");
  const [checkedTasks, setCheckedTasks] = useLocalStorage<boolean[]>(
    "checkedTasks",
    []
  );

  function handleAddTask() {
    if (newTask.trim() !== "") {
      setTasks([...(tasks ?? []), newTask]);
      setCheckedTasks([...(checkedTasks ?? []), false]);
      setNewTask("");
    }
  }

  const handleEditTask = (index: number, newTask: string) => {
    const updatedTasks = [...(tasks ?? [])];
    updatedTasks[index] = newTask;
    setTasks(updatedTasks);
  };

  function handleDeleteTask(index: number) {
    const updatedTasks = tasks?.filter((_, i) => i !== index);

    updatedTasks && setTasks(updatedTasks);

    const updatedCheckedTasks = checkedTasks?.filter((_, i) => i !== index);
    updatedCheckedTasks && setCheckedTasks(updatedCheckedTasks);
  }

  function handleToggleChecked(index: number) {
    const updatedCheckedTasks = [...(checkedTasks ?? [])];
    updatedCheckedTasks[index] = !updatedCheckedTasks[index];
    setCheckedTasks(updatedCheckedTasks);
  }

  return (
    <>
      <div className="flex flex-row gap-2">
        <Input
          placeholder="Ex: ir para a academia as 10:00"
          label="Adicione a 1º tarefa:"
          value={newTask}
          onChange={(e) => setNewTask((e.target as HTMLInputElement).value)}
        />

        <div className="flex flex-col justify-end text-white">
          <Button
            children={"Adicionar"}
            variant={"primary"}
            onClick={handleAddTask}
          />
        </div>
      </div>
      {tasks === undefined || checkedTasks === undefined || !tasks[0] ? (
        <div className="text-white mt-10">Sem atividades até o momento.</div>
      ) : (
        <TodoList
          tasks={tasks}
          checkedTasks={checkedTasks}
          onToggleChecked={handleToggleChecked}
          onDeleteTask={handleDeleteTask}
          onEditTask={handleEditTask}
        />
      )}
    </>
  );
}
