import './menu.css'
import {Link} from 'react-router-dom'

function Menu({setCall, buttons}) {

    let renderButtons = () => {
        return buttons.map(button => {
            return (
                <Link to={button}>
                    <button className='opt' value={button} onClick={onOption}>{button}</button>
                </Link>
            )
        })
    }

    let onOption = (e) => {
        setCall(e.target.value);
    }
    return (
        <div className='menu-wrap'>
        {/* <Link to='/images'>
            <button value='images' onClick={onOption}>Images</button>
        </Link>
        <Link to='/containers'>
            <button value='containers' onClick={onOption}>Containers</button>
        </Link> */}
        {renderButtons()}
            
        </div>
        
    )
}


export default Menu;