// function openFourm(){
//     document.getElementById("o").style.display= "block";
// }
// function closeFourm(){
//     document.getElementById("o").style.display= "none";
// 
let text = document.getElementById("txt");
const element = document.getElementById("myBtn");
element.addEventListener("click",() =>movie(text));
const year = document.getElementById("txt1").value;


const movie = async(n) => {
    const resp = await fetch(`http://www.omdbapi.com/?s=${n.value}&apikey=d8324453`)
    const data = await resp.json();
    console.log(data);
    const title = data;
    console.log(title["Search"][0])
    console.log(title["Search"][0].Title)
    console.log(title["Search"][0].Poster)
    console.log(title["Search"][0].Type)
    console.log(title["Search"][0].Year)
    const titl = document.getElementById("title")
    let html = `<h1>${title["Search"][0].Title}</h1>`
    titl.insertAdjacentHTML("beforeend", html)
    const image = document.getElementById("img")
    let html1 = `<img src="${title["Search"][0].Poster}"width="500" height="600">`
    image.insertAdjacentHTML("beforeend", html1)

}



