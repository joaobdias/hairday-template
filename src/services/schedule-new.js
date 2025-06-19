import {apiConfig} from "./api-config.js"

export async function scheduleNew({id, name, when}) {
    try {
        // creating a new schedule in back
        console.log(JSON.stringify({id,name,when}))
        await fetch(`${apiConfig.baseUrl}/schedules`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id, name, when})
        })

        alert("Agendado realizado!")
        
    } catch (error) {
        console.log(error)
        alert("Não foi possível agendar")
    }
}