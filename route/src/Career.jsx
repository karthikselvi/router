import React from 'react'

function Career({fsd}) {
  return (
    <div>
            < div className='container row'> 
    <h1 style={{textAlign:"center"}}> CAREER </h1>
        {fsd.map((val)=>(
            <div className='card bg-success m-4 ' key={val.id}>
                <div className='card-header bg-warning'> {val.id}</div>
                <div className='card-body'> {val.topic}</div>
                <div className='card-text'>{val.content}</div>
            </div>
        ))}
    </div>


    </div>
  )
}

export default Career