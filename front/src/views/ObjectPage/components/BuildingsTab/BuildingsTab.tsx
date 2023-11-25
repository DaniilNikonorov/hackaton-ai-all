import React from 'react';
import {BuildingsTable} from "./BuildingsTable";
import {BuildingObject} from "../../../../methods/getObjects";

export const BuildingsTab = ({object}: {object: BuildingObject}) => {
    return (<>
        {object.realtyDtoSet &&
            (<div>
                <BuildingsTable tableData={object.realtyDtoSet}/>
            </div>)
        }
    </>)
};
