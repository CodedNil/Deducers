import { useState } from 'react';
import './assets/scss/match.scss';

function Match () {
    
    const [guess,setGuess] = useState('')

    function sendGuess () {
        setGuess('')
    }

    function handleKeyPress (key) {
        if (key === 'Enter') {
            sendGuess()
        } 
    }

    return (
        <main className="match">
            <aside className="match__side match__side--left">

            </aside>
            <aside className="match__side match__side--right">

            </aside>
            <div className='match__input-holder'>
                <input type="text" className='input-holder__input' placeholder='Enter your question' value={guess} onChange={e => setGuess(e.target.value)} onKeyDown={e => handleKeyPress(e.code)} />
                <button onClick={() => sendGuess()} className='holder__icon material-symbols-rounded'>east</button>
            </div>
        </main>
    );
}

export default Match;