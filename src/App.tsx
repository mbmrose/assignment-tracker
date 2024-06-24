import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";
import { TAssignment } from "./types";

function App() {
  const [assignments, setAssignments] = useState<TAssignment[]>([
    { id: "1", task: "study typescript", completed: false },
  ]);

  const deleteAssignment = (id: string) => {
    setAssignments((prevAssignments) =>
      prevAssignments.filter((assignment) => assignment.id !== id)
    );
  };

  const updateAssignment = (id: string, completed: boolean) => {
    setAssignments((prevAssignments) =>
      prevAssignments.map((assignment) =>
        assignment.id === id ? { ...assignment, completed } : assignment
      )
    );
  };

  return (
    <>
      <Header setAssignments={setAssignments} />
      <Assignments assignments={assignments} deleteAssignment={deleteAssignment} updateAssignment={updateAssignment} />

    </>
  );
}

export default App;