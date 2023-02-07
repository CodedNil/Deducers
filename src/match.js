import './assets/scss/match.scss';

function Match () {
    return (
        <main className="match">
            <aside className="match__side match__side--left">

            </aside>
            <aside className="match__side match__side--right">

            </aside>
            <div className='match__input-holder'>
                <input type="text" className='input-holder__input' placeholder='Enter your question' />
                <i className='holder__icon material-symbols-rounded'>east</i>
            </div>
        </main>
    );
}

export default Match;