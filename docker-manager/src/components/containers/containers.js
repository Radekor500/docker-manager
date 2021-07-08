import {useState } from 'react'
import './containers.css'
import {Link} from 'react-router-dom'

function Containers({containers, handleOpt, onCheck, onLink}) {
    //const [containers, setContainers] = useState([]);
    const [search, setSearch] = useState('');


   

    let onSearch = (event) => {
        setSearch(event.target.value);
    }



    const filtered = containers.filter(elem => {
        return elem.Names[0].toLowerCase().includes(search.toLowerCase())
    })

    let renderContainers = () => {
        return (
            filtered.map((container, index) => {
                return (
                    <tr key={index}>
                        <td>
                        <input onChange={onCheck} className='check' value={container.Names} type='checkbox'></input>
                        <Link to='/options'>
                            <button value={container.Names} onClick={onLink} className='link'>{container.Names}</button>
                        </Link>
                        </td>
                        <td>{container.State}</td>
                        <td>{container.Stack}</td>
                        <td>{container.Image}</td>
                        <td>{new Date(container.Created * 1000).toLocaleDateString()} </td>
                        <td>{container.NetworkSettings.Networks.IPAdress}</td>
                    </tr>
                )
            })
        )
        
    }
    return (
        <div>
            <div className='grid-wrap'>
                <div className='options'>
                    <input onChange={onSearch} type='text' placeholder='search'></input>
                    <button value='start' onClick={handleOpt}>Start</button>
                    <button>Kill</button>
                    <button>Restart</button>
                    <button>Remove</button>
                    <button value='stop' onClick={handleOpt}>Stop</button>
                </div>
                <div className='alert-wrap'></div>  
                <table>
                    <tr>
                        <th>Name</th>
                        <th>State</th>
                        <th>Stack</th>
                        <th>Image</th>
                        <th>Created</th>
                        <th>IP adress</th>
                    </tr>
                    {renderContainers()}
                </table>
            </div>
            
        </div>
    )
}

export default Containers;

