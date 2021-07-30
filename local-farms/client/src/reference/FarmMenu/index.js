import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
    UPDATE_FARMS,
    UPDATE_CURRENT_FARM,
} from '../../utils/actions';
import { QUERY_FARMS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function FarmMenu() {
    const [state, dispatch] = useStoreContext();

    const { farms } = state;

    const { loading, data: farmData } = useQuery(QUERY_FARMS);

    useEffect(() => {
        if (farmData) {
            dispatch({
                type: UPDATE_FARMS,
                farms: farmData.farms,
            });
            farmData.farms.forEach((farm) => {
                idbPromise('farms', 'put', farm);
            });
        } else if (!loading) {
            idbPromise('farms', 'get').then((farms) => {
                dispatch({
                    type: UPDATE_FARMS,
                    farms: farms,
                });
            });
        }
    }, [farmData, loading, dispatch]);

    const handleClick = (id) => {
        dispatch({
            type: UPDATE_CURRENT_FARM,
            currentfarm: id,
        });
    };

    return (
        <div>
            <h2>Choose a farm:</h2>
            {farms.map((item) => (
                <button
                    key={item._id}
                    onClick={() => {
                        handleClick(item._id);
                    }}
                >
                    {item.name}
                </button>
            ))}
        </div>
    );
}

export default FarmMenu;