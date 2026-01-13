import React from 'react';
import Task from "./Task.jsx";

function Tasks({tasks}) {
    console.log(tasks);
    return (
        <div>
            {
                tasks.map((item, index) => (
                    <Task item={item}/>
                ))
            }

        </div>
    );
}

export default Tasks;