import React, {component} from 'react';
import SearchList from './SearchList';
import Carts from './Carts';

const App = () => {
    return (
        <div>
            <h1>Robo Contact</h1>
            <SearchList/>
            
            <Carts/>

        </div>
    )
}

export default App;