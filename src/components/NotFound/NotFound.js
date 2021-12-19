import './NotFound.css';

const NotFoundPic = () => {
    return (
        <img src="/assets/error/NotFound.jpg" alt="Not Found" />
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