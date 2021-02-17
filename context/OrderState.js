import React, { useReducer } from 'react';
import OrderContext from './OrderContext';
import OrderReducer from './OrderReducer'

import {
    SELECT_CLIENT,
    SELECT_PRODUCT,
    AMOUNT_PRODUCTS
} from '../types/index';

const OrderState = ({ children }) => {
    const initialState = {
        client: {},
        products: [],
        total: 0
    }

    const [state, dispatch] = useReducer(OrderReducer, initialState)

    const AddClient = (client) => {
        dispatch({
            type: SELECT_CLIENT,
            payload: client
        })

    }
    return (
        <OrderContext.Provider
            value={{
                AddClient
            }}>
            {children}

        </OrderContext.Provider>
    )
}

export default OrderState;