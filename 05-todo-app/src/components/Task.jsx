import React from 'react';
import TaskAction from "./TaskAction.jsx";

function Task({item}) {
    return (
        <>
            <div className="flex gap-2 justify-between items-center">
                <div className="flex gap-2">
                    <input type="checkbox"/>
                    <h3 className="text-[20px]">{item.title}</h3>
                </div>
                <TaskAction/>
            </div>
        </>
    );
}

export default Task;