import React, {useContext, useCallback} from "react";
import { ListContext } from "../../App";
import '../../pages/list/styles/productEditCard.scss'
import { useNavigate, useParams } from "react-router-dom";


export const ProductEditCard = ({ idItem, image_url, title, description, date, commission, onRemove, onEdit }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const {isList, setIsList} = useContext(ListContext);

    const removeProduct = useCallback(() => {
        onRemove(idItem);
    }, [id, onRemove]);

    const editProduct = useCallback(() => {
        onEdit(idItem)
    }, [id, onEdit, idItem]);


    return (
        <div className="product__edit-wrap" onClick={() => console.log(isList)}>
            <img className="product__edit-img" src={image_url}></img>
            <div className="product__edit__control-wrap">
                <h2 className="product__edit__control-title">{title} {idItem}</h2>
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
                    <button className="product__edit__control-button-edit" onClick={editProduct}>Редактировать</button>
                    <button className="product__edit__control-button-delete" onClick={removeProduct}>Удалить</button>
                </div>
            </div>
        </div>
    );
}