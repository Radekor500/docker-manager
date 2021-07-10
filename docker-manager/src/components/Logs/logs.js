import './logs.css'

function Logs({getLogs}) {

    return (
        <div className='logs-wrap'>
            <h2>Containers logs</h2>
            <button onClick={getLogs}>Get logs</button>
            <pre className='logs'>

            </pre>
        </div>
    )
}

export default Logs;