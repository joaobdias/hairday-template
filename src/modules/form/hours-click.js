export function hoursClick (){

    const hours = document.querySelectorAll(".hour-available")

    hours.forEach((avaiable) => { //each one will receive a event listener 

        avaiable.addEventListener("click", (selected) => { // if one of those are selected

            hours.forEach((hour) => { // remove any other selected element beforehand and select the target
                
                hour.classList.remove("hour-selected")
                selected.target.classList.add("hour-selected")
            })
        })
    })
}