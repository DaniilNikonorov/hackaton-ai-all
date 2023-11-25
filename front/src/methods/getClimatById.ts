import {currentHost} from "../variables/hosts";

export const getClimatById = async (id: number) => {
    const response = await fetch(`${currentHost}/hack/api/climat/get-by-climat-id/${id}`)
    if(response.ok){
        const climat = await response.json()
        return [climat]
    }
}
