import React, { useEffect, useState } from 'react';

import icon from '../../assets/activities/icon-activity-1.png';
import { useDispatch, useSelector } from 'react-redux';
import { endAWSLogin } from '../../redux/actions/auth';
import { endUI } from '../../redux/actions/ui';
import { postApi, getApi } from '../../helpers/apiHelper';
import { getInfo } from '../../redux/actions/api';

export const ActivitiesScreen = () => {
    const { id, user } = useSelector(state => state.auth);
    const { user:userApi } = useSelector(state => state.api);
    const { created } = useSelector(state => state.ui);
    const dispatch = useDispatch();
    const [post, setPost] = useState(false);

    useEffect(() => {
        async function api(){
            await postApi('users', { id, ...user });
            setPost(true);
        }
        if (created){
            api();
        }
    }, [dispatch, created, id, user]);

    useEffect(() => {
        async function api(){
            const user = await getApi(`users/${ id }`);
            dispatch(getInfo(user.Item));
        }
        api();
    }, [dispatch, id, post])

    const logout = () => {
        dispatch(endUI());
        dispatch(endAWSLogin());
    }

    const { name } = userApi;

    return (
        <div className="activities__main">
            <div className="activities__bottom-logout">
                <div className="activities__image-top"></div>
                <div className="pointer">
                    <span 
                        className="activities__logout"
                        onClick={ logout }
                    >
                        Cerrar Sesión
                    </span>
                </div>
            </div>
            <div className="activities__profile-info">
                <p className="activities__profile-name">
                    { name }
                </p>
                <p className="activities__profile-message">
                    Bienvenido a tu espacio de apoyo tecnológico.
                </p>
            </div>
            <div className="activities__container">
                <div className="activities__title-info">
                    Mensaje Actividades
                </div>
                <div className="activities__subtitle-info">
                    Mensaje Actividades
                </div>
                <div className="activities__body-info">
                    Lo que se quiera poner
                </div>
                <div className="activities__card-activities">
                    <div className="activities__card-activities-item pointer">
                        <div className="activities__card-activities-icon">
                            <img src={icon} alt="icon" />
                        </div>
                        <div className="activities__card_activities-title">
                            Viaje a Marte
                        </div>
                    </div>
                </div>
            </div>
            <div className="activities__middle">
                <div className="activities__middle-title">
                    STEM4you
                </div>
                <div className="activities__middle-body">
                    Proyecto realizado para apoyar la educación mediante la tecnología.
                </div>
            </div>
            <div className="activities__container">
                <div className="activities__title-info">
                    Mensaje Actividades
                </div>
                <div className="activities__subtitle-info">
                    Mensaje Actividades
                </div>
                <div className="activities__body-info">
                    <i>Lo que se quiera poner</i>
                </div>
            </div>
            <div className="activities__card-images">
                <div className="activities_image-item">
                    <div className="footer__image-uptc"></div>
                    <div className="footer__image-vig"></div>
                </div>
                <div className="activities_image-item">
                    <div className="footer__image-gira"></div>
                </div>
            </div>
            <div className="activities__image-bottom"></div>
        </div>
    )
}
