function validateLogin() {

    const name = document.getElementsByClassName('input1')[0].value.trim();
    const password = document.getElementsByClassName('input2')[0].value.trim();


    if (name === "nive" && password === "1234") {

        window.location.href = "nextpage.html";
        return false;
    } else {
        alert("Invalid name or password!");
        return false;
    }
}
