import React, {useEffect, useState} from 'react';
import {CapBuildingExpensesTable} from "./CapBuildingExpensesTable";
import {BuildingObject} from "../../../../methods/getObjects";
import {getCapBuildingExpenses} from "../../../../methods/getCapBuildingExtents";

export const CapBuildingExpensesTab = ({object}: {object: BuildingObject}) => {
    const [capBuildingExpensesTabData, setCapBuildingExpensesTabData] = useState<any>();
    useEffect(() => {
        getCapBuildingExpenses(object.lat, object.lng).then((res) => {
            setCapBuildingExpensesTabData(res)
        })
    }, []);
    return (<>
        {capBuildingExpensesTabData &&
            (<div>
                <CapBuildingExpensesTable tableData={capBuildingExpensesTabData}/>
            </div>)
        }
    </>)
};
