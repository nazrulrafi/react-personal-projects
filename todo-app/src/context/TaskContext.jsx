import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });

    const [filter, setFilter] = useState("all");
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    // ➕ Add task
    function addTask(title) {
        setTasks(prev => [
            {
                id: Date.now(),
                title,
                isCompleted: false,
            },
            ...prev,
        ]);
    }

    // ✅ Toggle check
    function toggleTask(id) {
        setTasks(prev =>
            prev.map(task =>
                task.id === id
                    ? { ...task, isCompleted: !task.isCompleted }
                    : task
            )
        );
    }

    // ❌ Delete
    function deleteTask(id) {
        setTasks(prev => prev.filter(task => task.id !== id));
    }

    // ✏️ Start edit
    function startEdit(task) {
        setEditingId(task.id);
        setEditText(task.title);
    }

    // 💾 Save edit
    function saveEdit(id) {
        setTasks(prev =>
            prev.map(task =>
                task.id === id ? { ...task, title: editText } : task
            )
        );
        setEditingId(null);
        setEditText("");
    }

    const filteredTasks = tasks.filter(task => {
        if (filter === "active") return !task.isCompleted;
        if (filter === "completed") return task.isCompleted;
        return true;
    });



    return (
        <TaskContext.Provider
            value={{
                tasks,
                filteredTasks,
                filter,
                setFilter,
                editingId,
                editText,
                setEditText,
                addTask,
                toggleTask,
                deleteTask,
                startEdit,
                saveEdit,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}

export function useTasks() {
    return useContext(TaskContext);
}
