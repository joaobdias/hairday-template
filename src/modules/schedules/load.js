import { hoursLoad } from "../form/hours-load.js"
import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
import {scheduleShow} from "../schedules/show.js"

const selectedDate = document.getElementById("date")

export async function scheduleDay() {
    // search schedules for today (right panel)

    // hours schedule (left panel)
    const date = selectedDate.value

    const dailySchedules = await scheduleFetchByDay({ date })

    scheduleShow({dailySchedules})

    hoursLoad({date, dailySchedules})

}