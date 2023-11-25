import {useEffect, useState} from "react";
import {getKeyRates} from "../methods/getKeyRates";
import {lineChartDataTotalSpent, lineChartOptionsTotalSpent} from "../variables/charts";

export const useLineChart = () => {
    const [options, setOptions] = useState(null);
    const [data, setData] = useState(null);
    useEffect(() => {
        getKeyRates().then((res) => {
            const rates: any[] = [], dates: any[] = []
            res.forEach((obj: any) => {
                rates.push(obj.rate)
                dates.push(obj.date)
            })
            lineChartDataTotalSpent[0].data = rates.reverse()
            lineChartOptionsTotalSpent.xaxis.categories = dates.reverse()
            setData([...lineChartDataTotalSpent])
            setOptions({...lineChartOptionsTotalSpent})
        })
    }, []);
    return {
        options,
        data}
}
