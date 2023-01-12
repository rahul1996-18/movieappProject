import React from 'react'

const NavBar = () => {
  return (
    <div className='flex mt-3 justify-between items-center'>
        <div>
            <ol className='flex p-4 '>
                <li className='text-white cursor-pointer text-3xl hover:underline '>Home |</li>
                
                <li className='text-white ml-4 cursor-pointer text-3xl hover:underline'> Favorites</li>
            </ol>
        </div>
        
      
    </div>
  )
}

export default NavBar
