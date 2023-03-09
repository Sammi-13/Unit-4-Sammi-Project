let button = document.querySelector(".button2");
let Button = document.querySelector(".Name");
let currentUser = document.querySelector(".currentUser");

button.onclick = function() {
    let q1 = document.querySelector(".question1").value;
    let q2 = document.querySelector(".question2").value;
    let result = document.querySelector(".result");
    let a = document.querySelector(".a");
    let b = document.querySelector(".b");
    let c = document.querySelector(".c");
    let d = document.querySelector(".d");
    if (q1 <= 2 && q2 === "Latte") {
        a.style.display = "block";
        document.querySelector(".result").innerHTML = "You're a tiramisu";
    } else if (q1 <= 2 && q2 === "Iced tea") {
        b.style.display = "block";
        document.querySelector(".result").innerHTML = "You're a lemon tart";

    } else if (q1 > 2 && q2 === "Latte") {
        c.style.display = "block";
        document.querySelector(".result").innerHTML = "You're a brownies";

    } else if (q1 > 2 && q2 === "Iced tea") {
        d.style.display = "block";
        document.querySelector(".result").innerHTML = "You're a strawberry cake";
    } else {
        document.querySelector(".result").innerHTML = "Try entering something!";
    }
    console.log(q1);
    console.log(q2);
    result.style.display = "block";
};

Button.onclick = function() {
    let newUser = document.querySelector(".userName").value;
    currentUser.innerHTML = (newUser);
    console.log(newUser);
};