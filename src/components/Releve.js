import React from 'react'

export default function Releve() {
  return (
    <div className=' '>
      <h4><center>Demande de relever</center></h4>
      <form>
        <div>
          Groupe : <br />
          <input placeholder='enter your groupe' className='form-control w-50 mb-3' />
        </div>
        <div>
          Name : <br />
          <input placeholder='enter your name' className='form-control w-50 mb-3' />
        </div>
        <button className='btn btn-success'>demander</button>
      </form>
    </div>
  )
}
