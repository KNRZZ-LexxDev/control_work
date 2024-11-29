import React from "react";
import { TextInput } from "../../components/textInput";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useContext } from "react";
import { ListContext } from "../../App";
import '../list/styles/productAddPage.scss'
import { FormInput } from "../../components/formInput/formInput";
import { useNavigate } from "react-router-dom";
export const ProductAddPage = (props) => {

    const navigate = useNavigate();
    const [errorForm, setErrorForm] = useState(false);
    const {isList, setIsList} = useContext(ListContext);

    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm();

    const onSubmit = (data) => {
        setIsList( (isList) => [...isList, { ...data, id: parseInt(isList.length + 1), title: data.title, commission: data.commission, date: data.date, description: data.description, inCard: false } ])
        console.log(isList);
        navigate('/products');
    };


    return (
        <div className="productAddPage__wrap">
            <div className="productAddPage__create-wrap">
                {errorForm ? (
                    <div className="productAddPage__wrap-error"> Произошла ошибка добавления</div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="productAddPage__wrap-form">
                        <FormInput
                            type={'text'}
                            register={register}
                            name={"title"}
                            placeholder="Наименование"
                            validate={{ required: true }}
                            errors={errors}
                            classNameInteract='productAddPage__wrap-form-input-title'
                            classNameWrap='productAddPage__wrap-form-input-title-wrap'
                        />
                        <div className="productAddPage__wrap-form-input-wrap">
                            <FormInput
                                type={'text'}
                                register={register}
                                name={"commission"}
                                placeholder="Коммисия на доставку"
                                validate={{ required: true }}
                                errors={errors}
                                classNameInteract='productAddPage__wrap-form-input-commision'
                                classNameWrap='productAddPage__wrap-form-input-commision-wrap'
                            />
                            <FormInput
                                type={'text'}
                                register={register}
                                name={"date"}
                                placeholder="Срок доставки"
                                validate={{ required: true }}
                                errors={errors}
                                classNameInteract='productAddPage__wrap-form-input-date'
                                classNameWrap='productAddPage__wrap-form-input-date-wrap'
                            />
                        </div>
                        <FormInput
                            type={'text'}
                            register={register}
                            name={"description"}
                            placeholder="Описание"
                            validate={{ required: true }}
                            errors={errors}
                            classNameInteract='productAddPage__wrap-form-input-desc'
                            classNameWrap='productAddPage__wrap-form-input-desc-wrap'
                        />

                        <div className="productAddPage__buttons-wrap">
                            <button className="productAddPage__buttons-add">Добавить</button>
                            <button className="productAddPage__buttons-cancel">Отмена</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}