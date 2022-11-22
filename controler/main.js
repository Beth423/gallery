let main =document.getElementById("main")
main.addEventListener("onload",Cards())
let h1 = document.createElement("H1")
// h1.innerText=("main content here")
// main.appendChild(h1)
// link to the local host 
 //𝕙𝕥𝕥𝕡://𝟙𝟚𝟟.𝟘.𝟘.𝟙:𝟝𝟝𝟘𝟘/𝕚𝕟𝕕𝕖𝕩.𝕙𝕥𝕞𝕝
 function Cards(){
    console.log("here")
    let numberOfCards=3
    let main=document.getElementById("main")
    let section = document.createElement("section")
    main.appendChild(section)
    let imgLinks=["pillers.jpg","Carina-Nebula.webp","heic0515a.jpg","Trifid_Nebula_by_Deddy_Dayag.jpg"]
    for (i=0;i<=numberOfCards ;i++){
        let div=document.createElement("Div")
        let img=document.createElement("img")
        let captions= document.createElement("div")
        div.setAttribute("class","cards")
        div.setAttribute("id","card_"+i)
        div.innerHTML="<h2>here</H2>"

        main.appendChild(div)
    }
 }
