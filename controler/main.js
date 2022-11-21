let main =document.getElementById("main")
main.addEventListener("onload",Cards())
let h1 = document.createElement("H1")
// main.addEventListener('window', window.scroll(0, 0);, options)
// h1.innerText=("main content here")
// main.appendChild(h1)
// link to the local host 
 //𝕙𝕥𝕥𝕡://𝟙𝟚𝟟.𝟘.𝟘.𝟙:𝟝𝟝𝟘𝟘/𝕚𝕟𝕕𝕖𝕩.𝕙𝕥𝕞𝕝
 function Cards(){
    console.log("here")
    let sec= document.createElement("section");
    let main=document.getElementById("main");
    sec.setAttribute("class","contaner1");

    let imgLinks=["pillers.jpg","Carina-Nebula.webp","heic0515a.jpg","Trifid_Nebula_by_Deddy_Dayag.jpg"]
    for (i=0;i<=3 ;i++){
        let div=document.createElement("Div");
        let img=document.createElement("img");
        let captions= document.createElement("div");
        div.setAttribute("class","cards");
        div.setAttribute("id","card_"+i);
        div.setAttribute("style","z-index:"+i+";")
        
        img.setAttribute("src","/assets/images/"+imgLinks[i]+"")
        img.setAttribute("class","img")

        captions.innerHTML="<p class='captions'>"+"    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur = "+"</p>";
        div.appendChild(img)
        div.appendChild(captions)
        sec.appendChild(div)
    }
        main.appendChild(sec)
 }
function cardsInfo(){
    
}