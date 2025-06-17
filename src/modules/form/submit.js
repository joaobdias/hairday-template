import dayjs from "dayjs";

const form = document.querySelector("form")
const dateSelect = document.querySelector("#date")

const actualDate = dayjs(new Date()).format("YYYY-MM-DD")

dateSelect.min = actualDate
dateSelect.value = actualDate

form.onsubmit = (event) => {
    
    event.preventDefault();

    try {
        alert("ENVIADO!")
        form.reset();
    } catch (error) {
        alert("Erro ao enviar o fomulário, tente novamente.");
    }

}