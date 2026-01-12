import TaskAction from "./components/TaskAction";
import FilterButton from "./components/FilterButton";
import { useTasks } from "./context/TaskContext";

function App() {
    const {
        filteredTasks,
        addTask,
        toggleTask,
        editingId,
        editText,
        setEditText,
        saveEdit,
        startEdit,
        filter,
        setFilter,
        tasks,
    } = useTasks();

    const totalCount = tasks.length
    const activeCount = tasks.filter(t => !t.isCompleted).length;
    const completedCount = tasks.filter(t => t.isCompleted).length;

    const countMap = {
        all: totalCount,
        active: activeCount,
        completed: completedCount,
    };
    const labelMap = {
        all: "All",
        active: "Active",
        completed: "Completed",
    };
    function handleSubmit(e) {
        e.preventDefault();
        const title = e.target.task.value.trim();
        if (!title) return;
        addTask(title);
        e.target.reset();
    }

    return (
        <div className="max-w-[500px] mx-auto bg-[#F5F5F5] p-[25px] mt-[50px]">
            <h1 className="text-5xl font-bold underline text-center">
                Todo App
            </h1>

            <form onSubmit={handleSubmit} className="mt-[50px] flex gap-2">
                <input
                    name="task"
                    className="border p-2 flex-1"
                    placeholder="Enter task"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                    Add
                </button>
            </form>

            <div className="flex justify-between my-4">
                <h3>{countMap[filter]} {labelMap[filter]}</h3>

                <div className="flex gap-2">
                    <FilterButton label="All" value="all" />
                    <FilterButton label="Active" value="active" />
                    <FilterButton label="Completed" value="completed" />
                </div>
            </div>

            {filteredTasks.map(task => (
                <div
                    key={task.id}
                    className="flex my-2 justify-between items-center"
                >
                    <div className="flex gap-2 items-center">
                        <input
                            type="checkbox"
                            checked={task.isCompleted}
                            onChange={() => toggleTask(task.id)}
                        />

                        {editingId === task.id ? (
                            <input
                                value={editText}
                                autoFocus
                                onChange={e => setEditText(e.target.value)}
                                onBlur={() => saveEdit(task.id)}
                                onKeyDown={e =>
                                    e.key === "Enter" && saveEdit(task.id)
                                }
                                className="border px-2"
                            />
                        ) : (
                            <h3
                                className={`${
                                    task.isCompleted
                                        ? "line-through text-gray-400"
                                        : ""
                                }`}
                            >
                                {task.title}
                            </h3>
                        )}
                    </div>

                    <TaskAction task={task} />
                </div>
            ))}
        </div>
    );
}

export default App;
