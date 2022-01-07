document.querySelector("button").addEventListener("click", function () {
    document.querySelector(".loading").classList.add("d-none");
    console.log("Hello");
    document.querySelector("video").play();
    document.addEventListener("mouseover", function () {
        document.querySelector("video").play();
    });
});