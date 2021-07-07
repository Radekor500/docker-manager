import './options.css'

function Options({onCheck, handleOpt}) {
    return (
        <div className='options2'>
            {/* <input onChange={onSearch} type='text' placeholder='search'></input> */}
            <button value='start' onClick={handleOpt}>Start</button>
            <button>Kill</button>
            <button>Restart</button>
            <button>Remove</button>
            <button value='stop' onClick={handleOpt}>Stop</button>
        </div>
    )
}


export default Options;