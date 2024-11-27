import React, {useContext} from "react";
import { ListContext } from "../../App";
import '../../pages/list/styles/productEditCard.scss'

export const ProductEditCard = ({ image_url, title, description, date, commission }) => {
    const {isList, setIsList} = useContext(ListContext);
    return (
        <div className="product__edit-wrap">
            <img className="product__edit-img" src={image_url}></img>
            <div className="product__edit__control-wrap">
                <h2 className="product__edit__control-title">{title}</h2>
                <p className="product__edit__control-desc">{description}</p>
                <div className="product__edit__control-side-inf">
                    <p className="product__edit__control-side-inf-delivery">Срок доставки:
                        <b><span className="product__edit__control-side-inf-delivery-part"> {date}</span></b>
                    </p>

                    <p className="product__edit__control-side-inf-commission">Комиссия на доставку:
                        <b><span className="product__edit__control-side-inf-commission-part"> {commission}</span></b>
                    </p>
                </div>

                <div className="product__edit__control-buttons-wrap">
                    <button className="product__edit__control-button-edit">Редактировать</button>
                    <button className="product__edit__control-button-delete">Удалить</button>
                </div>
            </div>
        </div>
    );
}