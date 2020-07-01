import React from 'react';

function Nav(props) {
    return (
        <nav>
            <button className="nav-button" onClick={() => props.prevFn()}>{`< Previous`}</button>
            <div className="action-buttons">
                <button>{`Edit`}</button>
                <button>{`Delete`}</button>
                <button>{`New`}</button>
            </div>
            <button className="nav-button" onClick={() => props.nextFn()}>{`Next >`}</button>
        </nav>
    );
}

export default Nav;
