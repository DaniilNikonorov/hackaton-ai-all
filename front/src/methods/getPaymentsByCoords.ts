import {currentHost} from "../variables/hosts";

export const getPaymentsByCoords = async (lat: number, lng: number) => {
    const response = await fetch(`${currentHost}/hack/api/expenses/get-by-coordinates?lat=${lat}&lng=${lng}`)
    if(response.ok){
        const payments = await response.json()
        console.log('Payments', payments)
        return payments
    }
}
