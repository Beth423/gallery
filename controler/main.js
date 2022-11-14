let main =document.getElementById("main")
main.addEventListener("onload",Cards())
let h1 = document.createElement("H1")
// h1.innerText=("main content here")
// main.appendChild(h1)
// link to the local host 
 //𝕙𝕥𝕥𝕡://𝟙𝟚𝟟.𝟘.𝟘.𝟙:𝟝𝟝𝟘𝟘/𝕚𝕟𝕕𝕖𝕩.𝕙𝕥𝕞𝕝
 function Cards(){
    console.log("here")

    let imgLinks=["pillers.jpg","Carina-Nebula.webp","heic0515a.jpg","Trifid_Nebula_by_Deddy_Dayag.jpg"]
    for (i=0;i<=3 ;i++){
        let main=document.getElementById("main")
        let div=document.createElement("Div")
        let img=document.createElement("img")
        let captions= document.createElement("div")
        div.setAttribute("class","cards")
        div.setAttribute("id","card_"+i)
        div.setAttribute("style","transform:rotate("+i*5+"deg); left:"+10 *i/4+"rem;")
        
        img.setAttribute("src","/assets/"+imgLinks[i]+"")
        img.setAttribute("class","img")

        captions.innerHTML="<h1 class ='captions'>"+"here"+"</h1>";
        div.appendChild(img)
        div.appendChild(captions)
        main.appendChild(div)
    }
 }
