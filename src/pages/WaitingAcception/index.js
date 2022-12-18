import React from 'react'

const WaitingAcception = () => {
  return (
    <div className='text-center flex flex-col gap-5'>
         <h1 className='text-3xl tablet:text-4xl  font-semibold text-mainPurple'>Register successfully!</h1>
         <p className='font-bold'>Admin will check your registeration soon! The result will be sent to your email!</p>
         <p className='text-yellow-700'>Please be patient and come back later. Have a great day!</p>
    </div>
  )
}

export default WaitingAcception