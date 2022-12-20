import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { cartSlice } from "../../redux/cart/cartReducer";
import { shallowEqual, useDispatch, useSelector } from "react-redux";


const ItemCard = ({ entity }) => {

  const { actions } = cartSlice;
  const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = () => {
    dispatch(actions.addToCart({entity:entity}))
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div class="col-md-4"
      >
        <div class="product-item">
          <div class="product-thumb">
            {entity.sale ? <span class="bage">Sale</span> :<></>}
            
            <img class="img-responsive" src={entity?.image} alt="product-img" />
            <div class="preview-meta">
              <ul>
                <li>
                  <span data-toggle="modal" onClick={showModal}>
                    <i class="tf-ion-ios-search-strong"></i>
                  </span>
                </li>
                {/* <li>
			                        <a href="#!" ><i class="tf-ion-ios-heart"></i></a>
								</li> */}
                <li>
                  
                  <a onClick={addToCart}>
                    <i class="tf-ion-android-cart"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="product-content">
            <h4>
              <a href="product-single.html">{entity?.name}</a>
            </h4>
            <p class="price">${entity.price}</p>
          </div>
        </div>
      </div>



      <Modal footer={''}   width={900} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <>
      <div class="" role="document">
		    	<div class="">
			      	<div class="modal-body">
			        	<div class="row">
			        		<div class="col-md-6 col-sm-6 col-xs-12">
			        			<div class="modal-image">
				        			<img class="img-responsive" src={entity?.image} alt="product-img" />
			        			</div>
			        		</div>
			        		<div class="col-md-6 col-sm-6 col-xs-12">
			        			<div class="product-short-details">
			        				<h2 class="product-title">{entity?.name}</h2>
			        				<p class="product-price">${entity.price}</p>
			        				<p class="product-short-description">
			        					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem iusto nihil cum. Illo laborum numquam rem aut officia dicta cumque.
			        				</p>
			        				<a  class="btn btn-main">Add To Cart</a>
                                    <br/>
                                    <br/>
			        				<a  class="btn btn-transparent"> View Product Details</a>
			        			</div>
			        		</div>
			        	</div>
			        </div>
		    	</div>
		  	</div>
      </>
      </Modal>
    </div>

    


  );
};

export default ItemCard;
