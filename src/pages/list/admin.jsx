import React, {useContext} from "react";
import { ListContext } from "../../App";
import { ProductEditCard } from "./product_edit_card";
import '../../pages/list/styles/adminPage.scss';
import { products } from "../../card_files/card";

export const AdminPage = () => {

    const {isList, setIsList} = useContext(ListContext);

    const handlerAdd = (isList) => {
        // let product_obj = { id: 7, image: 'https://i.ytimg.com/vi/AnTSqOFB6r4/maxresdefault.jpg', title: 'test', description: 'hui', date: 'от 666 дней', commission: '99.99%' }
        setIsList( (prev) => [...prev, { id: 7, image: 'https://i.ytimg.com/vi/AnTSqOFB6r4/maxresdefault.jpg', title: 'test', description: 'hui', date: 'от 666 дней', commission: '99.99%' } ])
    }


    return (
        <div className="products__edit-wrap" onClick={() => console.log(isList)}>
            <div className="product__control-wrap">
                <div className="product__control-button-wrap">
                    <button className="product__control-button-add" onClick={() => handlerAdd(isList)}>Добавить</button>
                </div>

                <div className="product__control-card-wrap">
                    {isList.map((elem, key) => {
                        return <ProductEditCard key={elem.id} image_url={elem.image_data} title={elem.title} description={elem.description} date={elem.date} commission={elem.commission} />
                    })}
                </div>
            </div>
        </div>
    );
}