const choose = [ "paper", "scissors", "rock"];

function computerChoose() {
    const randomChoose = Math.floor(Math.random() * choose.length);
    return choose[randomChoose];
}

function whoWinner(playerChoose, computerChoose) {
    if (playerChoose === computerChoose) {
        return "Beraberlik!"
    } else if(
        (playerChoose === "rock" && computerChoose === "scissors") ||
        (playerChoose === "scissors" && computerChoose === "paper") ||
        (playerChoose === "paper" && computerChoose === "rock")
    ){
        return "Oyuncu Qalib geldi!!!"
    }
    else{
        return "Komputer Qalib geldi!!!"
    }
}

const btns = document.querySelectorAll("button");
const resultElement = document.getElementById("result");

btns.forEach((button) => {
    button.addEventListener("click", (e) => {
        const playerChoose = e.target.id;
        const compChoose = computerChoose();
        const result = whoWinner(playerChoose, computerChoose);
        resultElement.innerHTML = `Siz ${playerChoose}, komputer ${compChoose}. Netice ${result}`
    })
})