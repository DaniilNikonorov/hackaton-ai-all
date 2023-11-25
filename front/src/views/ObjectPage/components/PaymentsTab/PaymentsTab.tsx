import React, {useEffect, useState} from 'react';
import {PaymentsTable} from "./PaymentsTable";
import {getPaymentsByCoords} from "../../../../methods/getPaymentsByCoords";
import {BuildingObject} from "../../../../methods/getObjects";

export const PaymentsTab = ({object}: {object: BuildingObject}) => {
    const [paymentsData, setPaymentsData] = useState();
    useEffect(() => {
        getPaymentsByCoords(object.lat, object.lng).then((res) => {
            setPaymentsData(res)
        })
    }, []);
    return (<>
        {paymentsData &&
            (<div>
                <PaymentsTable tableData={paymentsData}/>
            </div>)
        }
    </>)
};
