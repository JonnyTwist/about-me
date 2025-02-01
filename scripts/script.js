function onLoad() {
    // fetch("./text/resume.html")
    // .then(response => response.text())
    // .then(data => document.getElementById("text").innerHTML = data)
    // .catch(error => console.error("Error loading page:", error));
    console.log($('#text').load('./text/resume.html'));
}

onLoad();

function toggleText() {
    let text = document.getElementById("text");
    if (text.style.maxHeight === "0px" || !text.style.maxHeight) {
        text.style.maxHeight = text.scrollHeight + "px";
    } else {
        text.style.maxHeight = "0px";
    }

}