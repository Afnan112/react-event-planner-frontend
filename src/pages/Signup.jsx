import { useState } from 'react'
import axios from 'axios'

function Signup() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    async function handleSubmit(){

    }

    return (
        <div>
            <h1>Sign Up To The Blog!</h1>
            <form>
                <div>
                    <input
                        type='text'
                        placeholder='Username'
                        name='username'
                        onChange={event => setUsername(event.target.value)}
                        value={username}
                    />
                </div>
                <div>
                    <input
                        type='password'
                        placeholder='password'
                        name='password'
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='email'
                        name='email'
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                    />
                </div>
                <button type='submit'>Sign Up!</button>
            </form>
        </div>
    )
}

export default Signup