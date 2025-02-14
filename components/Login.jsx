'use-client'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRegistration, setIsRegistration] = useState(isReg)
    const [error, setError] = useState(null)
    const [authenticating, setAuthenticating] = useState(false)

    return (
        <div className="login">
            <h2>{isRegistration ? 'Create an Account' : 'Login'}</h2>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" />
            <button>Submit</button>
            <div className="full-line" />
            <div>
                <p>{isRegistration ? 'Already Have an Account' : 'Dont\'t Have an Account'}</p>

                <button onClick={() => {
                    setIsRegistration(!isRegistration)
                }}>{isRegistration ? 'Log in' : 'Sign Up'}</button>
            </div>
        </div>
    )
}