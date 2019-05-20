import React from 'react';
import {Link} from 'react-router-dom'

const header = () => {
    return (
        <div>
            <header>
                <Link to={'/'}>
                    <img src="/img/logo.png" alt="logo imagen"/>
                </Link>
            </header>
        </div>
    );
};

export default header;