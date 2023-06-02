import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [columns, setColumns] = useState([]);
  const [post, setPost] = useState([]);

  useEffect(() =>{
    axios.get('/details')
    .then(response =>{
      setColumns(Object.keys(response.data[0]))
      setPost(response.data)
    })
  }, [])
  return (
<div className='container mx-auto px-8'>
      <div className='container mt-10 bg-slate-300 justify-center p-8 rounded-lg '>
      <p className='font-bold text-lg'>Transaction History</p>
      {
        post.map((transaction) =>{
          return (
            <div key={transaction.id} className='flex bg-slate-50 my-6 p-2 rounded-lg'>
              <img src="./src/images/face-pic.jpg" alt={transaction.account} className='w-12 h-12 rounded-full'/>
              <div className='ml-4'>
                <p>{transaction.account}</p>
                <p>{transaction.date}</p>
              </div>
              <div className='ml-auto'>
                <p>{transaction.amount}</p>
                <p>{transaction.transaction}</p>
              </div>
          </div>
          )
        })
      }
    </div>
</div>
  )
}

export default App
