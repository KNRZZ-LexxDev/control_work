import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect, useContext } from "react";
import { ListContext } from "../../App";
import '../list/styles/productEditPage.scss'
import { FormInput } from "../../components/formInput/formInput";
import { useNavigate } from "react-router-dom";

export const ProductEditPage = (props) => {

    const navigate = useNavigate();

    const {isList, setIsList} = useContext(ListContext);

    const [errorForm, setErrorForm] = useState(false);

    const {
        handleSubmit,
        formState: { errors },
        register,
        setValue,
    } = useForm({
        defaultValues: JSON.parse(localStorage.getItem('product')),
    });

    useEffect( () => {
        setValue('title', JSON.parse(localStorage.getItem('product'))[0].title)
        setValue('commission', JSON.parse(localStorage.getItem('product'))[0].commission)
        setValue('date', JSON.parse(localStorage.getItem('product'))[0].date)
        setValue('description', JSON.parse(localStorage.getItem('product'))[0].description)
    }, [])

    const onSubmit = (data) => {
        isList.map((elem) => {
            if(elem.id == JSON.parse(localStorage.getItem('product'))[0].id){
                elem.title = data.title
                elem.commission = data.commission
                elem.date = data.date
                elem.description = data.description
            }
        })
        navigate('/products')
    };


    return (
        <div className="productEditPage__wrap">
            <div className="productEditPage__create-wrap">
                {errorForm ? (
                    <div className="productEditPage__wrap-error"> Произошла ошибка добавления</div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="productEditPage__wrap-form">
                        <FormInput
                            type={'text'}
                            register={register}
                            name={"title"}
                            placeholder="Наименование"
                            validate={{ required: true }}
                            errors={errors}
                            classNameInteract='productEditPage__wrap-form-input-title'
                            classNameWrap='productEditPage__wrap-form-input-title-wrap'
                        />
                        <div className="productEditPage__wrap-form-input-wrap">
                            <FormInput
                                type={'text'}
                                register={register}
                                name={"commission"}
                                placeholder="Коммисия на доставку"
                                validate={{ required: true }}
                                errors={errors}
                                classNameInteract='productEditPage__wrap-form-input-commision'
                                classNameWrap='productEditPage__wrap-form-input-commision-wrap'
                            />
                            <FormInput
                                type={'text'}
                                register={register}
                                name={"date"}
                                placeholder="Срок доставки"
                                validate={{ required: true }}
                                errors={errors}
                                classNameInteract='productEditPage__wrap-form-input-date'
                                classNameWrap='productEditPage__wrap-form-input-date-wrap'
                            />
                        </div>
                        <FormInput
                            type={'text'}
                            register={register}
                            name={"description"}
                            placeholder="Описание"
                            validate={{ required: true }}
                            errors={errors}
                            classNameInteract='productEditPage__wrap-form-input-desc'
                            classNameWrap='productEditPage__wrap-form-input-desc-wrap'
                        />

                        <div className="productEditPage__buttons-wrap">
                            <button className="productEditPage__buttons-add">Изменить</button>
                            <button className="productEditPage__buttons-cancel">Отмена</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}