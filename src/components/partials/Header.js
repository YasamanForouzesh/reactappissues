import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <img style={{ width: 100 }} src="https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful-1/2048/5347_-_Github-512.png" />
            <nav>
                Pull Requests{' | '}
                <Link to='/issues'>Issues</Link>{' | '}
                Marketplace{' | '}
                Explore
            </nav>
        </header>
    )
}
