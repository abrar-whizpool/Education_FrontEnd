import Item from 'antd/lib/list/Item';
import React from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { cartSlice } from "../redux/cart/cartReducer";
function Cart() {
  const { actions } = cartSlice;
  const dispatch = useDispatch();
  const { entity } = useSelector(
    (state) => ({ entity: state.cart.entity }),
    shallowEqual
  );
    console.log("entity",entity)

  return (
    <div>
      
      <section class="page-header">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="content">
					<h1 class="page-name">Cart</h1>
					<ol class="breadcrumb">
						<li><a href="index.html">Home</a></li>
						<li class="active">cart</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
</section>



<div class="page-wrapper">
  <div class="cart shopping">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <div class="block">
            <div class="product-list">
              <form method="post">
                {
                  entity.length ?(<>
                   <table class="table">
                  <thead>
                    <tr>
                      <th class="">Item Name</th>
                      <th class="">Item Price</th>
                      <th class="">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      entity.map((item)=>{
                        return(
                        <tr class="">
                        <td class="">
                          <div class="product-info">
                            <img width="80" src={item.image} alt="" />
                            <a href="#!">{item.name}</a>
                          </div>
                        </td>
                        <td class="">${item.price}.00</td>
                        <td class="">
                          <a class="product-remove" onClick={()=>{
                            dispatch(actions.removeFromCart({entity:item}))
                          }}>Remove</a>
                        </td>
                      </tr>
                      )})
                    }
                 
                  
                  </tbody>
                </table>
                  </>):(<>
                  No Item Added Yet
                  </>)
                }
               
                <Link to="/checkout">
                <a  class="btn btn-main pull-right">Checkout</a>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Cart