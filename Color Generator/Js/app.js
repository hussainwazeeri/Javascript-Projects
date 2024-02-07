const code= document.getElementById("color-code");
// const copyText=document.getElementById("btn2");
const getColor = () =>{
    const randomNumber= Math.floor(Math.random() * 16777215); 
    const randomCode= "#" + randomNumber.toString(16);
    console.log(randomNumber, randomCode);
    document.body.style.backgroundColor= randomCode;
    document.getElementById("color-code").innerText= randomCode;
    // code.style.color= randomCode;
    navigator.clipboard.writeText(randomCode);
}
document.getElementById("btn").addEventListener("click", getColor);
document.getElementById("btn2").addEventListener("click", copyCode);

getColor();
copyCode();