import {Link} from 'react-router-dom'
import SearchInput from './SearchInput'

export default function Header(){

    return (
        <div>
            <Link to='/'> HomePage</Link>
            <SearchInput/>
        </div>
    )
}