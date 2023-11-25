export const sendNewForm = async (message: string): Promise<void> => {
    try{
        const respCreate = await fetch(`https://www.anekdotov-mnogo.ru/bots/telegram/bots/admin-notify/aicbr.php?message=${encodeURI(message)}`)
    }catch(e){}
}
