function toggleCards(currentElem) {
    console.log("Remove invisible toggle button");
    currentElem.style.display = "none";

    console.log("Expand card selection");
    document.querySelectorAll(".card").forEach(element => {
        element.style.marginBottom = "20px";
    });

    console.log("Effectively decrease top margin");
    document.querySelector("#center").style.top = "20%";
}