'use client';
import React, { useEffect } from 'react'

function Page({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h1>Erorr { error.message }</h1>

      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}

export default Page