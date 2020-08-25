import React from 'react';
import { ActivityItem } from './ActivityItem';
import { useSelector } from 'react-redux';

export const ActivityCard = () => {
    const { activities } = useSelector(state => state.activity)
    return (
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
                {
                    activities.map(activity => (
                        <ActivityItem 
                            key={ activity.activity}
                            { ...activity }
                        />
                    ))
                }
            </div>
        </div>
    )
}
