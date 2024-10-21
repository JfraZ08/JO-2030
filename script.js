function toggleText(id) {
    const textElement = document.getElementById(id);
    if (textElement.style.display === "none" || textElement.style.display === "") {
        textElement.style.display = "block";
    } else {
        textElement.style.display = "none";
    }
}
