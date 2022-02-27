import React from 'react';
import SearchList from './SearchList';
import CartList from './CartList'
import {robots} from './robots';


const App = () => {
        return (
            <div>
                <h1>Robo Contact</h1>
                <SearchList/>
                
                <CartList robots={robots}/>
               
                
    
            </div>
        )
}


export default App;