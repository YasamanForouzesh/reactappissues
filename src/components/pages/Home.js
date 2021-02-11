import { Link } from 'react-router-dom'

export default function Home() {
    return(
        <div>
            <h2>Looking to submit an issue?</h2>
            <p>Please read the posting guidelines before opening an issue.</p>
            <Link to ='/issues'>
                <button>Go to Issues</button> 
            </Link>
        </div>
    )
}