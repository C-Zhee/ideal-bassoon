// Your code here

console.log("Hello")

/* First Deliverable
See the first movie's details, including its poster, title, runtime, showtime, and available tickets when the page loads. 
The number of available tickets will need to be derived by subtracting the number of tickets_sold from the theater's capacity. 
You will need to make a GET request to the following endpoint to retrieve the film data:
*/
const baseUrl = "http://localhost:3000/films"

const filmList = document.getElementById("movie-list")
const movieTitle = document.getElementById("movie-title")
const movieRuntime = document.getElementById("movie-runtime")
const movieCapacity = document.getElementById("movie-capacity")
const movieShowtime = document.getElementById("movie-showtime")
//const ticketsSold = document.getElementById("tickets-sold")
const movieDescription = document.getElementById("movie-description")
const movieTime = document.getElementById("movie-time")
const buyTicketForm = document.getElementById("ticket-form")


buyTicketForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let img = document.createElement("img")
    img.src = buyTicketForm.image.value
    filmList.append(img)
})



const request = async () => {
    let req = await fetch("http://localhost:3000/films")
    let res = await req.json()
    res.forEach((movie, i) => {
        let img = document.createElement("img")
        img.src = film.image
        img.addEventListener("click", () => {
            movieTitle.innerText = movie.title
            movieRuntime.innerText = movie.runtime
            movieCapacity.innerText = movie.capacity
            movieShowtime = movie.showtime
            ticketsSold = movie.ticketsSold
            movieDescription = movie.description
            movieTime = movie.time
        })
        filmList.append(img)
    })
}

