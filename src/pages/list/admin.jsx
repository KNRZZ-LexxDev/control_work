import React, { useContext } from "react";
import { ListContext } from "../../App";
import { ProductEditCard } from "./product_edit_card";
import '../../pages/list/styles/adminPage.scss';
import { useNavigate } from "react-router-dom";

export const AdminPage = () => {
    const navigate = useNavigate();
    const { isList, setIsList } = useContext(ListContext);

    const editProduct = (idCard) => {
        // Перенаправление на страницу редактирования с передачей idCard в URL
        navigate(`edit/${idCard}`);
    };

    const removeProduct = (idCard) => {
        setIsList((prevList) =>
            prevList.filter((item) => item.id !== idCard)
        );
    };

    return (
        <div className="products__edit-wrap">
            <div className="product__control-wrap">
                <div className="product__control-button-wrap">
                    <button className="product__control-button-add" onClick={() => navigate('/add')}>Добавить</button>
                </div>

                <div className="product__control-card-wrap">
                    {isList.map((elem) => (
                        <ProductEditCard 
                            key={elem.id} // Добавляем ключ для каждого элемента
                            idItem={elem.id} 
                            image_url={"https://avatars.mds.yandex.net/get-ydo/6058772/2a0000017f550178ff61e0522afb12f8092a/diploma"} 
                            title={elem.title} 
                            description={elem.description} 
                            date={elem.date} 
                            commission={elem.commission} 
                            onEdit={editProduct} 
                            onRemove={removeProduct} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
