import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";


type Props = {
  id: string;
  assignment: string;
  completed: boolean;
  deleteAssignment: (id: string) => void;
  updateAssignment: (id: string, completed: boolean) => void;
};

export function Assignment({ id, assignment, completed, deleteAssignment, updateAssignment }: Props) {
  const [isCompleted, setIsCompleted] = useState<boolean>(completed);

  const handleToggleCompletion = () => {
    setIsCompleted(!isCompleted);
    updateAssignment(id, !isCompleted);
  };

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={handleToggleCompletion}>
        {isCompleted ? (
          <div className={styles.checkIcon}>
            <BsCheckCircleFill size={18} />
          </div>
        ) : (
          <div className={styles.circle}></div>
        )}
      </button>

      <p className={isCompleted ? styles.textCompleted : ""}>{assignment}</p>

      <button className={styles.deleteButton} onClick={() => deleteAssignment(id)}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
