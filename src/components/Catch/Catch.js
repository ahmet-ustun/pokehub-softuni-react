import './Catch.css';

const Catch0 = () => {

    return (
        <div id="try-tomorrow">
            <img src="https://i.imgflip.com/5ya1s3.jpg" alt="Try Tomorrow" />
        </div>
    );
}

const Catch1 = () => {

    return (
        <>
            <div class="nes-container is-rounded">
                <img className='pokemon' src="https://i.imgur.com/4wGvsX7.gif" alt="Missing Gif" />
                <img className='trainer' src="https://archives.bulbagarden.net/media/upload/4/4d/RGB_Red_Back.png" alt="Trainer" />
            </div>
            <button type="button" class="nes-btn is-success">Catch</button>
        </>
    );
};

const Catch = () => {
    return (
        <div id="catch" className="nes-container is-dark">
            <Catch0 />
        </div>
    );
}

export default Catch;