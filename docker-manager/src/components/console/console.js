import { Terminal } from 'xterm';
import './console.css';

function Console() {
    const term = new Terminal();

    term.open(document.getElementById('xterm-wrap'));
    return (
        <div>
            <div id='xterm-wrap'></div>
        </div>
        
    )
}

export default Console;