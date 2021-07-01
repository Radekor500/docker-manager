import './containers.css'
function Containers() {
    return (
        <div className='grid-wrap'>
            <div className='options'>
                <input type='text' placeholder='search'></input>
                <button>Start</button>
                <button>Kill</button>
                <button>Restart</button>
                <button>Remove</button>
                <button>Stop</button>
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
                <tr>
                    <td>Pihole</td>
                    <td>Running</td>
                    <td>Serwerek</td>
                    <td>pihole:latest</td>
                    <td>2021-06-30 17:03:10 </td>
                    <td>192.168.0.134</td>
                </tr>
                <tr>
                    <td>Pihole</td>
                    <td>Running</td>
                    <td>Serwerek</td>
                    <td>pihole:latest</td>
                    <td>2021-06-30 17:03:10 </td>
                    <td>192.168.0.134</td>
                </tr>
            </table>
        </div>
    )
}

export default Containers;

