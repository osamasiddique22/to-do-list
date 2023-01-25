import React, { useState } from "react";
import './Task.css'
const Task = () => {
    const [enterTask, setEnteredTask] = useState('');
    const [showTask, setShowTask] = useState([]);
    const enterTaskHandler = (e) => {
        setEnteredTask(e.target.value);
    }
    const submitHandler = (e) => {
        if (enterTask === '') { return alert('Field must not be empty') }
        setShowTask([...showTask, enterTask]);
        setEnteredTask('');
    }
    const deleteHandler = (index) => {
        const filerOnShowTask = showTask.filter((val, i) => i !== index);
        console.log('filtervalue', filerOnShowTask)
        setShowTask(filerOnShowTask);
    }
    return (
        <div className="center-div">
            <div><h2 className="h2">To Do List</h2></div>
            <div>
                <div className="in">
                    <label htmlFor="new-task">Enter Task Name</label>
                    <input className="input" type="text" value={enterTask}
                        onChange={enterTaskHandler}
                    />
                    <div><button className="submit-button" onClick={submitHandler}>Add</button></div>
                </div>
                <div >
                    {
                        showTask.map((val, index) => {
                            return (
                                <div className="list">
                                    <div className="task">
                                        <li key={val.id}>{val}</li>
                                    </div>
                                    <div>
                                        <button className="button" onClick={() => deleteHandler(index)}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
}

export default Task;