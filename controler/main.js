let main =document.getElementById("main")
main.addEventListener("onload",Cards())
let h1 = document.createElement("H1")
// h1.innerText=("main content here")
// main.appendChild(h1)
// link to the local host 
 //𝕙𝕥𝕥𝕡://𝟙𝟚𝟟.𝟘.𝟘.𝟙:𝟝𝟝𝟘𝟘/𝕚𝕟𝕕𝕖𝕩.𝕙𝕥𝕞𝕝
 function Cards(){
    console.log("here")


    for (i=0;i<=2 ;i++){
        let main =document.getElementById("main")
        let div =document.createElement("Div")
        div.setAttribute("class","cards")
        div.setAttribute("id","card_"+i)
        div.setAttribute("style","transform:rotate("+i*10+"deg);")
        div.innerHTML="<h2>here</H2>"

        main.appendChild(div)
    }
 }