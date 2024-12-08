import React from "react";
import { useContext, useState } from "react";
import { ListContext } from "../../App";
import { CardContext } from "../../App";
import '../../pages/list/styles/productCard.scss'
import { useParams } from "react-router-dom";

export const ProductCard = ({ id, image_url, title, description, date, commission, inCard=false }) => {
    const { id: idProduct } = useParams();
    const {isList, setIsList} = useContext(ListContext);
    const {isCard, setIsCard} = useContext(CardContext);
    const [added, setAdded] = useState(inCard);

    const addedHandler = (id) => {
        setAdded(true);
        isList.map((elem) => {
            if(elem.id  === id){
                // localStorage.setItem('count', JSON.parse(localStorage.getItem('count')) + 1);
                setIsCard((isCard) => [...isCard, id])
                console.log(isCard)
                return elem.inCard  = true;
            }
        })
    }

    return (
        <div className="product__card">
            <div className="product__card-wrap">

                <img className="product__card-image" src={image_url}></img>
                <h2 className="product__card-title">{title} {id}</h2>

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

                    <div className="product__card-side-ing-arrow" style={{ display: (added ? 'none' : 'block')}} onClick={() => addedHandler(id)}>

                    </div>

                </div>
            </div>
        </div>
    );
}