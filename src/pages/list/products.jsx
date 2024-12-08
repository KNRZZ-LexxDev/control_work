import React, { useContext } from "react";
import { ListContext } from "../../App";
import { ProductCard } from "./product_card";
import '../../pages/list/styles/productsPage.scss'

export const ProductsPage = () => {
    const { isList, setIsList } = useContext(ListContext);
    return (
        <div className="products__page">
            {isList.map((elem, key) => {
                return <ProductCard
                    id={elem.id}
                    image_url={"https://avatars.mds.yandex.net/get-ydo/6058772/2a0000017f550178ff61e0522afb12f8092a/diploma"}
                    title={elem.title}
                    description={elem.description}
                    date={elem.date}
                    commission={elem.commission}
                    inCard={elem.inCard}
                />
            })}
        </div>
    );
}