import {currentHost} from "../variables/hosts";

export const getKeyRates = async () => {
    const response = await fetch(`${currentHost}/hack/api/keys/get-all`)
    if(response.ok){
        return await response.json()
    }
}
