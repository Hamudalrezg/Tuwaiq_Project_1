//Use local storage to put logins. for user signin
//Then check if the email and password match, show him message that you are signed in

//For SignUp: Save in local storage   localStorage.set('users',{email, password})
// let log = [{email, password}, {email, password}]

$('document').ready(() => {
    const history = JSON.parse(window.localStorage.getItem("chat"))
    if (history !== null) {
        history.forEach(function (tex, index) {
            if (index % 2 === 0) {
                $('.chat').append(`<li class=${"txt" + 1}>${tex}</li>`)
            } else {
                $('.chat').append(`<li class=${"txt" + 2}>${tex}</li>`)
            }
        });
    }
})



function goToPage3() {

    window.location.href = "../html/ht03.html";
}

function goToPage03() {

    window.location.href = "../html/ht03.html";
}

function goToPage003() {

    window.location.href = "../html/ht03.html";
}
$('#addComment').click(() => {
    const comment = $('#floatingTextarea2').val();

    const chatHistory = JSON.parse(window.localStorage.getItem("chat"));
    if (chatHistory != null) {
        chatHistory.push(comment)
        window.localStorage.setItem("chat", JSON.stringify(chatHistory));
    } else {
        window.localStorage.setItem("chat", JSON.stringify([comment]))
    }
    chatHistory.push(comment)
    if (chatHistory.length % 2 === 0) {
        $('.chat').append(`<li class=${"txt" + 1}>${chatHistory[chatHistory.length-1]}</li>`)
    } else {
        $('.chat').append(`<li class=${"txt" + 2}>${chatHistory[chatHistory.length-1]}</li>`)
    }
    $('#floatingTextarea2').val('');
})