import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentActivity } from '../../redux/actions/activity';

export const ActivityItem = ({ icon, title, activity }) => {
    const { activities } = useSelector(state => state.activity)
    const dispacth = useDispatch();
    const url = `/activity/${ activity }`;
    
    const current = activity => {
        const current = activities[activity-1];
        dispacth(currentActivity(current));
    }

    return (
        <Link 
            className="activities__card-activities-item pointer"
            to={ url }
            onClick={() => {current(activity)}}
        >
            <div className="activities__card-activities-icon">
                <img src={icon} alt="icon" />
            </div>
            <div className="activities__card_activities-title">
                { title }
            </div>
        </Link>
    )
}
