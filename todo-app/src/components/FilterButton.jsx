import { useTasks } from "../context/TaskContext";

function FilterButton({ label, value }) {
    const { filter, setFilter } = useTasks();

    return (
        <button
            onClick={() => setFilter(value)}
            className={`px-3 ${
                filter === value ? "bg-green-600" : "bg-gray-400"
            }`}
        >
            {label}
        </button>
    );
}

export default FilterButton;
