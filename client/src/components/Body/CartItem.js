import React from 'react'
import { REMOVE_FROM_CART } from '../../utils/actions'
import { useStoreContext } from '../../utils/GlobalState'


function CartItem({ product }) {
  const [state, dispatch] = useStoreContext();

  function removeFromCart() {
    dispatch({_id: product._id, type: 'REMOVE_FROM_CART'})
  }

  return (
    <div>
      <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                        <div class="mr-1"><img class="rounded" src= { process.env.PUBLIC_URL + `/images/${product.image}` } width="70"></img>
                        </div>
                        <div class="d-flex flex-column align-items-center product-details"><span class="font-weight-bold">{product.name}</span>
                        <div class="d-flex flex-row product-desc">
                </div>
            </div>
            <div>
                <h5 class="text-grey">{product.price}</h5>
            </div>

            <div class="d-flex align-items-center"><i class="fa fa-trash mb-1 text-danger" onClick={removeFromCart}></i></div>
        </div>
    </div>
  )
}

export default CartItem
