import React from 'react';
import { Provider } from 'react-redux';

import { AppRouter } from './routers/AppRouter';
import { store } from './redux/store/store';
import './aws/configAWS';

export const Stem4You = () => {
    return (
        <Provider store={ store} >
            <AppRouter />
        </Provider>
    )
}
