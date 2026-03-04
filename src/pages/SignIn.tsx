import { useState } from 'react'



export default function SignIn() {

  const [email, setEmail] = useState('')


  function handleSubmit() {
    console.log('email', email)
  }

  return (
    <div>
      <h1>SignIn</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)}  />
        </div>
        <button type="submit">SignIn</button>
      </form>
    </div>
  )
}
