import React from 'react';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Reducers from './reducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [ 'UserReducer' ]
};

const pReducer = persistReducer( persistConfig, Reducers );

const store = createStore(pReducer);
const persistor = persistStore( store );

export { store, persistor };