import './menu.css'
import {Link} from 'react-router-dom'

function Menu({setCall, call}) {
    let onOption = (e) => {
        setCall(e.target.value);
    }
    return (
        <div className='menu-wrap'>
        <Link to='/images'>
            <button value='images' onClick={onOption}>Images</button>
        </Link>
        <Link to='/containers'>
            <button value='containers' onClick={onOption}>Containers</button>
        </Link>
            
        </div>
        
    )
}


export default Menu;