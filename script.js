2// Some starter code
const container = document.querySelector("#addressList")

document.querySelector("#saveEntry").addEventListener("click", event => {
    if (document.querySelector("#item").value === "" ||
    document.querySelector("#location").value === ""){console.log("fill in the other field")}else{    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const thing = document.querySelector("#item").value
    const location = document.querySelector("#location").value

    // Once you have collected all the values, update the DOM
    // with some HTML
    container.innerHTML += `
        <section>
            <p>i can purchase ${thing} at ${location}</p>
        </section>
    `
    document.querySelector("#item").value = "";
    document.querySelector("#location").value = "";
}})