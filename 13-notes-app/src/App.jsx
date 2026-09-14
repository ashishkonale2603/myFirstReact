import React from 'react'
import { useState } from 'react'

const App = () => {

  const [Title, setTitle] = useState('')

  const [Detail, setDetail] = useState('')

  const [Task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()

    const ref=[...Task];
    ref.push({Title,Detail})
    setTask(ref)
    setTitle('')
    setDetail('')
  }

  const deleteNote=(idx)=>{
    const temp=[...Task]

    temp.splice(idx,1)
    setTask(temp)
  }

  return (
    <div className='h-screen bg-black text-white lg:flex'>
      <form 
      className='flex flex-col items-start gap-4 p-10 lg:w-1/2'
      onSubmit={(e)=>{
        submitHandler(e)
      }}>

        <h1 className='text-4xl mb-2 font-bold'>My Notes</h1>

        <input type="text" 
        placeholder='Enter Note Title'
        className='px-5 w-full py-2 border-2 rounded font-medium outline-none'
        value={Title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }
        } />

        <textarea type="text" 
        placeholder='Enter Note Details'
        className='px-5 py-2 w-full h-32 border-2 rounded font-medium items-start flex-row outline-none'
        value={Detail}
        onChange={(e)=>{
          setDetail(e.target.value)
        }
        } />

        <button className='px-5 py-2 w-full active:scale-95 font-medium outline-none bg-white text-black rounded'>Add Note</button>
      </form>
      <div className='lg:w-1/2 lg:border-1-2 bg-amber-950 lg:flex'>
        <h1 className='text-4xl font-bold px-10'>Recent Notes</h1>
        <div className='h-screen p-10 flex flex-col gap-4'>
          {Task.map(function(elem,idx){
            return <div className='h-30 bg-red-600 w-full'>
              <div key={idx}>
                <h3 className='text-4xl'>{elem.Title}</h3>
                <p>{elem.Detail}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='bg-amber-300 h-6 w-30 '></button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App