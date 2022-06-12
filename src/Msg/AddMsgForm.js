import React, { useState } from "react";

export default function AddTaskForm({onNewTask = f => f}) {
    const [addedTask, setAddedTask] = useState("");

    const submit = e => {
        e.preventDefault();
        onNewTask(addedTask);
        setAddedTask("");
    };

    return(
        <form onSubmit={submit} style={{display:"flex", justifyContent:"space-between",marginBottom:"10px"}}>
            <input value={addedTask} 
                   type="text" 
                   placeholder="輸入留言..."
                onChange={event => setAddedTask(event.target.value)}
                style={{width:"60%"}}
                   required />
            <button className="form-btn">送出</button>
        </form>
    );
}