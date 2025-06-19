import dayjs from "dayjs";
import {scheduleNew} from "../../services/schedule-new.js"
import {scheduleDay} from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const dateSelect = document.querySelector("#date")

const actualDate = dayjs(new Date()).format("YYYY-MM-DD")

dateSelect.min = actualDate
dateSelect.value = actualDate

form.onsubmit = async (event) => {
    
    event.preventDefault();

    try {
        const name = clientName.value.trim()

        if (!name) return alert ("Infome o nome do cliente!")
        
        const hourSelected = document.querySelector(".hour-selected")
        
        if (!hourSelected) return alert ("Selecione a hora!")
        const [hour] = hourSelected.innerText.split(":")

        const when = dayjs(dateSelect.value).add(hour, "hour")

        const id = new Date().getTime().toString()

        // making a new schedule
        await scheduleNew ({
            id, name, when,
        })

        await scheduleDay();

        clientName.value = ""
   
    } catch (error) {
        alert("Erro ao enviar o fomulário, tente novamente.");
    }

}