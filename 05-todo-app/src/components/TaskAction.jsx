import { useTasks } from "../context/TaskContext";

function TaskAction({ task}) {
    const { deleteTask, startEdit } = useTasks();

    return (
        <div className="flex gap-2">
            {/* Edit */}
            <button
                onClick={() => startEdit(task)}
                className="bg-blue-500 text-white p-1 rounded hover:bg-blue-600 cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z"
                    />
                </svg>
            </button>

            {/* Delete */}
            <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 text-white p-1 rounded hover:bg-red-600 cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>
    );
}

export default TaskAction;
