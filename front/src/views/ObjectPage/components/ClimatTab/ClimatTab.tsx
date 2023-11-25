import React, {useEffect, useState} from 'react';
import {ClimatTable} from "./ClimatTable";
import {BuildingObject} from "../../../../methods/getObjects";
import {getClimatById} from "../../../../methods/getClimatById";

export const ClimatTab = ({object}: {object: BuildingObject}) => {
    const [climatData, setClimatData] = useState<any>();
    useEffect(() => {
        //@ts-ignore
        getClimatById(object.climatId).then((res) => {
            setClimatData(res)
        })
    }, []);
    return (<>
        {climatData &&
            (<div>
                <ClimatTable tableData={climatData}/>
            </div>)
        }
    </>)
};
