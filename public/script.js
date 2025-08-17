console.log("JS Working");
function createservice(pic,title,p,p1){
    let html1=` <div class="sbox">
    <img height="70px" width="70px" src="images/${pic}" alt="">
    <h3>${title}</h3>
    <p>${p}</p>
 <p class="p2">${p1} </p>
    <button class="btnn">Read More</button>
    </div>`
    document.querySelector(".service-box").innerHTML+=html1
    }
    createservice("css.svg","Frontend Development","Building clean, interactive UI/UX Designs", "using HTML, CSS, JavaScript, React")
    createservice("html.svg","Backend Development","Secure server-side logic and database integration","using Node.js, Express.js, MongoDB")
    createservice("html.svg","Full Stack Development","	End-to-end development: both frontend and backend","including APIs and database management.")
  



function createproject(img,title,p,link){
let html2=`
        <div class="p">
 <img height="200px" width="330px" src="images/${img}.png" alt="">
            <div class="protext">
                <h2>${title}</h2>
                <p>${p} </p>
                <a href="${link}" target="_blank">
<img src="images/link.svg" alt="GitHub" style="width:40px; height:40px; cursor:pointer;">
</a>
           </div>`
document.querySelector(".pro").innerHTML+=html2
}
createproject("Netflix","Netflix Clone","Html , CSS","https://github.com/FaizanAhmed5/Netflix-Clone")
createproject("Spotify", "Spotify Clone","Html , CSS , JavaScript", "https://github.com/FaizanAhmed5/Spotify-Clone")


document.querySelector(".btn").addEventListener("click", () => {
  const p1 = document.querySelector(".aboutme .p1");
  const btn = document.querySelector(".btn");

  if (!p1.style.maxHeight || p1.style.maxHeight === "0px") {
    // EXPAND
    p1.style.maxHeight = p1.scrollHeight + "px";
    btn.textContent = "Show Less";
  } else {
    // COLLAPSE
    p1.style.maxHeight = "0";
    btn.textContent = "Read More";
  }
});




document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btnn")) {
    const sbox = e.target.closest(".sbox");
    const p2 = sbox.querySelector(".p2");
    const btnn = e.target;

    if (!p2.style.maxHeight || p2.style.maxHeight === "0px") {
      // EXPAND
      p2.style.maxHeight = p2.scrollHeight + "px";
      btnn.textContent = "Show Less";
    } else {
      // COLLAPSE with smooth animation
      p2.style.maxHeight = "0";
      btnn.textContent = "Read More";
    }
  }
});


document.querySelector(".hamburger").addEventListener("click", () => {
   let leftMenu = document.querySelector(".nav > ul");

   if (leftMenu.style.left === "-100%") {
      leftMenu.style.left = "0%";
   } else if (leftMenu.style.left === "0%" || leftMenu.style.left === "0") {
      leftMenu.style.left = "-100%";
   } else {
      // This handles the first time when style.left is empty
      leftMenu.style.left = "0%";
   }
});

// Hide menu when any <li> in the navbar is clicked
document.querySelectorAll(".nav > ul > li").forEach((item) => {
   item.addEventListener("click", () => {
      document.querySelector(".nav > ul").style.left = "-100%";
   });
});

document.getElementById("year").textContent = new Date().getFullYear();

