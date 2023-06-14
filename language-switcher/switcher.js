function switchLanguage() {
    var selectedLanguage = document.getElementById("language-select").value;
    if (selectedLanguage === "kazakhstan") {
        window.location.href = "index-kz.html"; // Replace with your Kazakhstan page URL
    } else if (selectedLanguage === "russian") {
        window.location.href = "index.html"; // Replace with your Russian page URL
    }
}