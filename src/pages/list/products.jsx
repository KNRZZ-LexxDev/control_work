import React from "react";
import { products } from "../../card_files/card";
import { ProductCard } from "./product_card";
import '../../pages/list/styles/productsPage.scss'
export const ProductsPage = () => {
    return (
        <div className="products__page">
            {products.map((elem, key) => {
                return <ProductCard image_url={elem.image_data} title={elem.title} description={elem.description} date={elem.date} commission={elem.commission}/>
            })}
        </div>
    );
}