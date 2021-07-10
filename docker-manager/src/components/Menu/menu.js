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
        let option = e.target.value
        if (option === 'containers' || option === 'images') {
            setCall(option);
        } 
        
    }
    return (
        <div className='menu-wrap'>

        {renderButtons()}
            
        </div>
        
    )
}


export default Menu;