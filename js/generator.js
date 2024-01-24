function generateTextBanner(base, text, message) {
    let results = ["", "", "", "", ""];

    message = "/" + message.split('').join('/') + "/";
    for (let index = 0; index < message.length; index++) {
        const element = message[index].toLowerCase();
        if (textConverter.hasOwnProperty(element)) {
            results = appendBanner(results, textConverter[element].split("/"))
        }
    }

    for (let i = 0; i < results.length; i++) {
        results[i] = results[i].replace(/0/g, base).replace(/1/g, text);
    }
    return results;
}

function appendBanner(banner, append) {
    for (let index = 0; index < banner.length; index++) {
        banner[index] += append[index];
    }
    return banner;
}

function refreshOutputArea() {
    let base = document.getElementById("base-emoji").value;
    let text = document.getElementById("text-emoji").value;
    let message = document.getElementById("message").value;

    let result = generateTextBanner(base, text, message)

    console.log(result[0].length);
    let fill = "";
    if (result[0].length > 25 * 2) {
        document.getElementById("lengthWarn").style.display = "block";
    } else {
        document.getElementById("lengthWarn").style.display = "none";
        fill = "　".repeat(26 - result[0].length / 2);
        console.log(26 - result[0].length / 2);
    }

    document.getElementById("output").value =
        ".　　　　　　　　　　　　　　　　　　　　　　　　　　　\n." + result.join(fill + "\n.");

}
