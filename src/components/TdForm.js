import React ,{useState} from 'react'

export const TdForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(value)

        setValue("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='TodoForm'>
        <input type='text' value={value} onChange={(e) => setValue(e.target.value)} className='todo-input' placeholder='Type your tasks'/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
    </div>
  )
}
