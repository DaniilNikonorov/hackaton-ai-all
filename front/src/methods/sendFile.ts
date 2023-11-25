import { currentHost } from "variables/hosts"

export const sendFiles = async (files: any[]): Promise<void> => {
    let formData = new FormData()
    formData.append('file', files[0])

    try{
        const respCreate = await fetch(`${currentHost}/hack/api/files/new`, {
            method: 'post',
            body: formData
        })
    }catch(e){}
}
