import './NotFound.css';

const NotFoundPic = () => {
    return (
        <img src="https://i.imgflip.com/5x4le1.jpg" alt="Not found" />
    );
}


const NotFound1 = () => {
    return (
        <div id="not-found-1">
            <NotFoundPic />
        </div>
    );
}

const NotFound2 = () => {
    return (
        <div id="not-found-2" className="nes-container is-dark">
            <NotFoundPic />
        </div>
    );
}

export {
    NotFound1,
    NotFound2
};