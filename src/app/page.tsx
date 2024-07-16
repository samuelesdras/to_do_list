import React from "react";
import Header from "../components/organisms/Header";
import TodoTemplate from "../components/templates/TodoTemplate";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header title="Lista de afazeres" />
      <TodoTemplate />
    </main>
  );
}
