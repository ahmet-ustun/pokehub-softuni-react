import './Catch.css';

const Catch1 = () => {

    return (
        <>
            <div class="nes-container is-rounded">
                <img className='pokemon' src="/assets/catch/MissingNo.gif" alt="MissingNo" />
                <img className='trainer' src="/assets/catch/Trainer.png" alt="Trainer" />
            </div>
            <button type="button" class="nes-btn is-success">Catch</button>
        </>
    );
};

const Catch = () => {
    return (
        <div id="catch" className="nes-container is-dark">
            <Catch1 />
        </div>
    );
}

export default Catch;