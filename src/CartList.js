import React from 'react';
import Carts from './Carts';


const CartList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i)=> {
                    return ( <Carts key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>)
                })
                    
            } 
            
        </div>
    )
}
export default CartList;