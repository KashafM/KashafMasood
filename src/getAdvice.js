const resDiv = document.querySelector("#adviceBox")
const resBtn = document.querySelector("#adviceButton")

window.onload = () => {
    getAdvice();
}

export default function getAdvice()
{
    fetch("https://api.adviceslip.com/advice").then(response => {
        return response.json();
    
    }).then(adviceData => {
        const Adviceobj = adviceData.slip;
        resDiv.innerHTML = `<h1>${Adviceobj.advice}</h1>`;
    }).catch(error => {
        console.log(error);
    });

}

