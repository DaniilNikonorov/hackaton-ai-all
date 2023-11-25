import React, {useEffect, useState} from 'react';
import {CapRepairExpensesTable} from "./CapRepairExpensesTable";
import {BuildingObject} from "../../../../methods/getObjects";
import {getCapRepairExtents} from "../../../../methods/getCapRepairExtents";

export const CapRepairExpensesTab = ({object}: {object: BuildingObject}) => {
    const [capRepairExpensesTabData, setCapRepairExpensesTabData] = useState<any>();
    useEffect(() => {
        getCapRepairExtents(object.lat, object.lng).then((res) => {
            setCapRepairExpensesTabData(res)
        })
    }, []);
    return (<>
        {capRepairExpensesTabData &&
            (<div>
                <CapRepairExpensesTable tableData={capRepairExpensesTabData}/>
            </div>)
        }
    </>)
};
