import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { endAWSLogin } from '../../redux/actions/auth';
import { loadActivities } from '../../redux/actions/activity'
import { endUI } from '../../redux/actions/ui';
import { postApi, getApi } from '../../helpers/apiHelper';
import { userData } from '../../redux/actions/user';
import { ActivityCard } from './ActivityCard';

export const ActivitiesScreen = () => {
    const { id, user, token } = useSelector(state => state.auth);
    const { created } = useSelector(state => state.ui);
    const { user:Data } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [post, setPost] = useState(false);

    useEffect(() => {
        async function api(){
            await postApi('users', { id, ...user }, token);
            setPost(true);
        }
        if (created){
            api();
        }
    }, [dispatch, created, id, user, token]);

    useEffect(() => {
        async function api(){
            const user = await getApi(`users/${ id }`, token);
            dispatch(userData(user.Item));
            const activitiesData = await getApi('activities', token);
            dispatch(loadActivities(activitiesData.Items));
        }
        api();
    }, [dispatch, id, post, token])

    const logout = () => {
        dispatch(endUI());
        dispatch(endAWSLogin());
    }

    const { name } = Data;

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
            <ActivityCard />
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
