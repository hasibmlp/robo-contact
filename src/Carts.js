import React from 'react';
import 'tachyons';


const Carts = ({id, name, email}) => {
    return (
        <div className='bg-green dib br3 ma2 grow '>
            <img alt='robots' src={`https://robohash.org/.png${id} ?size=200x200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Carts;