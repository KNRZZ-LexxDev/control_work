import React, {useContext, useState} from "react";
import { ListContext } from "../../App";
import { ProductEditCard } from "./product_edit_card";
import '../../pages/list/styles/adminPage.scss';
import { products } from "../../card_files/card";
import { useNavigate } from "react-router-dom";

export const AdminPage = () => {

    const navigate = useNavigate();
    const {isList, setIsList} = useContext(ListContext);

    const editProduct = (id) => {
        let edit_product = isList.filter((isList) => isList.id === id)
        localStorage.setItem('product', JSON.stringify(edit_product));
    }

    const removeProduct = (id) => {
        setIsList((isList) =>
            isList.filter((isList) => isList.id !== id)
    )
};


    return (
        <div className="products__edit-wrap">
            <div className="product__control-wrap">
                <div className="product__control-button-wrap">
                    <button className="product__control-button-add" onClick={() => navigate('/add')}>Добавить</button>
                </div>

                <div className="product__control-card-wrap">
                    {isList.map((elem, key) => {
                        return <ProductEditCard id={elem.id} image_url={"https://avatars.mds.yandex.net/get-ydo/6058772/2a0000017f550178ff61e0522afb12f8092a/diploma"} title={elem.title} description={elem.description} date={elem.date} commission={elem.commission} onEdit={editProduct} onRemove={removeProduct} />
                    })}
                </div>
            </div>
        </div>
    );
}