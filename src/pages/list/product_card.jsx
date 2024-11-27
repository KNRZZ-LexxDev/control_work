import React from "react";
import '../../pages/list/styles/productCard.scss'
export const ProductCard = ({ image_url, title, description, date, commission }) => {
    return (
        <div className="product__card">
            <div className="product__card-wrap">

                <img className="product__card-image" src={image_url}></img>
                <h2 className="product__card-title">{title}</h2>

                <div className="product__card-desc-wrap">
                    <p className="product__card-desc-text">{description}</p>
                </div>

                <div className="product__card-side-inf-wrap">
                    <div className="product__card-side-inf-text">

                        <p className="product__card-side-inf-delivery">Срок доставки:
                            <b><span className="product__card-side-inf-delivery-part"> {date}</span></b>
                        </p>

                        <p className="product__card-side-inf-commission">Комиссия на доставку:
                            <b><span className="product__card-side-inf-commission-part"> {commission}</span></b>
                        </p>

                    </div>

                    <div className="product__card-side-ing-arrow">

                    </div>

                </div>
            </div>
        </div>
    );
}