import React from 'react';

function Nav(props) {
    // handlePrevious = () => {
    //     props.prevFn(currentCard);
    // }

    // handleNext = () => {
    //     props.nextFn(currentCard);
    // }

    return (
        <nav>
            <button onClick={() => props.prevFn()}>{`< Previous`}</button>
            <div>
                <button>{`Edit`}</button>
                <button>{`Delete`}</button>
                <button>{`New`}</button>
            </div>
            <button onClick={() => props.nextFn()}>{`Next >`}</button>
        </nav>
    );
}

export default Nav;
