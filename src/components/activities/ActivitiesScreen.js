import React from 'react';

import icon from '../../assets/activities/icon-activity-1.png'
import { Link } from 'react-router-dom';

export const ActivitiesScreen = () => {
    return (
        <div className="activities__main">
            <div className="activities__bottom-logout">
                <div className="activities__image-top"></div>
                <div className="pointer">
                    <Link 
                        className="activities__logout"
                        to='/auth/login'
                    >
                        Cerrar Sesión
                    </Link>
                </div>
            </div>
            <div className="activities__profile-info">
                <p className="activities__profile-name">
                    Robert Alexander Limas Sierra
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
