import React from 'react'

const CartItem = ({id, name, description, prics units, img}) => (
   <li className ='flex items-center lh-copy pa3 ph0-1bb b--black-10'>
        <div className ='pl3 flex-auto'>
            <span className='f6 db black-70'>{name}</span>
            <span className='f6 db black-70'>{description}</span>
        </div>
        <div>
            <span>Units:{units}</span>
            <button>+</button>
            <button>-</button>
        </div>
    </li>
)

export default CartItem