let smallCups = document.querySelectorAll(".cup-small")
let liters = document.getElementById("liters")
let percentage = document.getElementById("percentage")
let remained = document.getElementById("remained")

liters.textContent = "2L"

smallCups.forEach(function (cup, idx) {
  cup.addEventListener("click", function () {
    let index = idx

    if (smallCups[idx].classList.contains("full")) {
      index--
    }

    smallCups.forEach(function (cup, idx2) {
      if (idx2 <= index) {
        cup.classList.add("full")
      } else {
        cup.classList.remove("full")
      }
    })

    let fullCups = document.querySelectorAll(".full").length
    let cups = smallCups.length

    if (fullCups === 0) {
      percentage.style.height = 0
      percentage.textContent = 0 + "%"
      percentage.style.visibility = "hidden"
    } else {
      percentage.style.visibility = "visible"
      let percentageHeight = `${(fullCups / cups) * 100}%`
      percentage.style.height = percentageHeight
      percentage.textContent = percentageHeight
    }

    if (fullCups === cups) {
      remained.style.visibility = "hidden"
      remained.style.height = 0
    } else {
      remained.style.visibility = "visible"
      liters.textContent = `${2 - (250 * fullCups) / 1000}`
    }
  })
})
