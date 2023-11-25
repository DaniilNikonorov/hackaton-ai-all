import {currentHost} from "../variables/hosts";

export const getCapRepairExtents = async (lat: number, lng: number) => {
    const response = await fetch(`${currentHost}/hack/api/kr-sum/get-by-coordinates?lat=${lat}&lng=${lng}`)
    if(response.ok){
        return await response.json()
    }
}
