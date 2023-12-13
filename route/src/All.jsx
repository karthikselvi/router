import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function All({list}) {
  return (
    <div className='container row'>
        
        <div style={{display:"flex",justifyContent:"center",gap:"10"}}>
        <h3>All</h3>
        <Link to='/full'><h3 style={{color:"red",margin:"20"}}>fullstack developement</h3></Link>
        <Link to='/data'><h3 style={{color:"GrayText",margin:"20"}}>datascience</h3></Link>
        <Link to='/cyber'><h3>cyber security</h3></Link>
        <Link to='/career'><h3 style={{color:"black"}}> career</h3></Link>        
        </div>
        {list.map((item)=>(
            <div className='card bg-success  m-5' key={item.id}>
                <div className='card-heaer'>{item.id}</div>
                <div className='card-text bg-warning'> {item.topic}</div>
                <div className='card-body'>{item.content}</div>

            </div>
        ))}

    </div>
  )
}

export default All