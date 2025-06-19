import { apiConfig } from "./api-config"
import dayjs from "dayjs"

export async function scheduleFetchByDay ({ date }) {
    try {
        // requesting schedules from server
        const response = await fetch (`${apiConfig.baseUrl}/schedules`)

        const data = await response.json() // converting to JSON
        const dailySchedules = data.filter((schedule) => // filtering JSON by day
            dayjs(date).isSame(schedule.when, "day")
    )

        return dailySchedules

    } catch (error) {
        console.log(error)
        alert("Não foi possivel buscar agendamentos para este dia.")
    }
}