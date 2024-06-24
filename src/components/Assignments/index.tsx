import { TAssignment } from "../../types";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

type Props = {
  assignments: TAssignment[];
  deleteAssignment: (id: string) => void;
  updateAssignment: (id: string, completed: boolean) => void;
};

export function Assignments({ assignments, deleteAssignment, updateAssignment }: Props) {
  const totalAssignments = assignments.length;
  const completedAssignments = assignments.filter(a => a.completed).length;

  const handleDeleteAssignment = (id: string) => {
    deleteAssignment(id);
  };

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{totalAssignments}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completedAssignments} of {totalAssignments}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment) => (
          <Assignment
            key={assignment.id}
            id={assignment.id}
            assignment={assignment.task}
            completed={assignment.completed}
            deleteAssignment={handleDeleteAssignment}
            updateAssignment={updateAssignment}
          />
        ))}
      </div>
    </section>
  );
}