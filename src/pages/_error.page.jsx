import React from 'react'

export default function ErrorPage({ error }) {
  return (
    <div>
      <h1>Error</h1>
      <p>Something went wrong.</p>
      <pre>{error.stack}</pre>
    </div>
  )
}
