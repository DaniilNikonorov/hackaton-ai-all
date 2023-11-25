import {currentHost} from "../variables/hosts";

export interface BuildingObject {
    id: string
    address: string
    area: number
    count: number
    totalCost: string
    lng: number
    lat: number
    sum: number
    technicalCondition: string
    realtyDtoSet: any[]
}

const mockObjects = [
    {id: '1', address: 'г. Владивосток, Пушкина, 5 ', area: '13.56', foundedYear: '1987', givedYear: '12.03.2002'},
    {id: '2', address: 'Толстого 17 ', area: '153.6', foundedYear: '1997', givedYear: '12.03.2004'},
    {id: '3', address: 'Гагарина 45 ', area: '73.56', foundedYear: '1980', givedYear: '12.03.1998'},
    {id: '4', address: 'Ильича 1 ', area: '34.26', foundedYear: '1993', givedYear: '12.03.2012'},
    {
        "area": 0,
        "count": 0,
        "lat": 0,
        "lng": 0,
        "realtyDtoSet": [
            {
                "address": "string",
                "area": "string",
                "city": "string",
                "department": "string",
                "id": 0,
                "lastYearDto": {
                    "accruedAmountCol23": 0,
                    "address": "string",
                    "balanceAcceptDateCol4": "string",
                    "bankAreaCol7": 0,
                    "bankAreaSecondCol14": 0,
                    "builtYearCol3": 0,
                    "carryingAmountCol21": 0,
                    "department": "string",
                    "freeAreaCol8": 0,
                    "freeAreaSecondCol15": 0,
                    "id": 0,
                    "leasedByBankAreaCol10": 0,
                    "leasedByBankAreaFourthCol18": 0,
                    "leasedByBankAreaSecondCol11": 0,
                    "leasedByBankAreaThirdCol17": 0,
                    "leasedOutByBankAreaCol16": 0,
                    "leasedOutByBankAreaCol9": 0,
                    "name": "string",
                    "objInfo": "string",
                    "objectId": "string",
                    "quarter": 0,
                    "reestrCode": "string",
                    "residualSumCol24": 0,
                    "revaluationCol22": 0,
                    "strId": 0,
                    "technicalConditionCol25": "string",
                    "test": 0,
                    "totalAreaBuildingCol6": 0,
                    "totalAreaCol5": 0,
                    "transferredByBankCol12": 0,
                    "transferredByBankFourthCol20": 0,
                    "transferredByBankSecondCol13": 0,
                    "transferredByBankThirdCol19": 0,
                    "year": 0
                },
                "lat": 0,
                "lng": 0,
                "name": "string",
                "reestrCode": "string",
                "region": "string",
                "street": "string",
                "yaAddress": "string"
            }
        ],
        "sum": 0
    },
]

export const getObjects = async (): Promise<BuildingObject[]> => {
    const response = await fetch(`${currentHost}/hack/api/realty/get-all`)
    if(response.ok){
        const objects = await response.json()
        console.log(objects)
        //@ts-ignore
        return objects.map((item, index) => ({...item, id: index + 1}))
    }
}
