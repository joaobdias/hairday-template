import { hoursLoad } from "../form/hours-load.js"

const selectedDate = document.getElementById("date")

export function scheduleDay() {
    // search schedules for today (right panel)

    // hours schedule (left panel)
    const date = selectedDate.value
    hoursLoad({date})

}