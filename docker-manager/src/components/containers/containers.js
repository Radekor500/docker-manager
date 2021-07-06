import { useEffect, useState } from 'react'
import './containers.css'
function Containers({containers}) {
    //const [containers, setContainers] = useState([]);
    const [search, setSearch] = useState('');
    const [ops, setOps] = useState(new Map());
    // useEffect(() => {
    //     fetch('http://192.168.0.134:5555/containers/json', {
    //         method: 'get',
    //         headers: {'content-type': 'application/json'}
    //     })
    //     .then(resp => resp.json())
    //     .then(data => {
    //         setContainers([...data])
    //     })
    //     //console.log(containers)

    // })

    let onSearch = (event) => {
        setSearch(event.target.value);
       
        console.log(containers)
        //console.log(search)
    }

    let onCheck = (event) => {
        //setOps([...event.id])
        //let checkBox = document.querySelectorAll('.check');
        setOps((prevOps) => 
            prevOps.set(event.target.value, event.target.checked)
        )
        console.log(ops)
    }

    let handleOpt = (event) => {
        console.log(event.target.value)
        let msg = document.querySelector('.grid-wrap');
       
        for (const container of ops) {
            if (container[1]) {
                let name = container[0].slice(1)
                console.log(name);
                fetch(`http://192.168.0.134:5555/containers/${name}/${event.target.value}`, {
                    method: 'post',
                    headers: {'content-type': 'application/json'}
                })
                .then(resp => {
                    if (resp.status === 204) {
                       
                        //alert.classList.add('alert')
                        // msg.style.display = 'block'
                        let alert = document.createElement('div');
                        alert.classList.add('alert')
                        if (event.target.value === 'stop') {
                            //alert.classList.add('alert', 'stop')
                            alert.style.backgroundColor = '#f44336'
                            
                        } else {
                            //alert.classList.add('alert', 'success')
                            alert.style.backgroundColor = '#04AA6D'
                        }
                        msg.appendChild(alert)
                        alert.innerHTML = name;
                        //msg.appendChild(<strong>{name}</strong>);
                    }

                })
                // .then(data => {
                //     // data ? console.log(data) : console.log('stopped');
                //     console.log(data)
                // })
            }
            
            
        }
        let checkboxes = document.querySelectorAll('.check');
        checkboxes.forEach(elem => elem.checked = false)
        // ops.forEach(elem => {
        //     console.log(elem)
        // })
    }

    const filtered = containers.filter(elem => {
        return elem.Names[0].toLowerCase().includes(search.toLowerCase())
    })

    let renderContainers = () => {
        return (
            filtered.map((container, index) => {
                return (
                    //console.log(container)
                    <tr key={index}>
                        <td><input onChange={onCheck} className='check' value={container.Names} type='checkbox'></input> {container.Names}</td>
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

