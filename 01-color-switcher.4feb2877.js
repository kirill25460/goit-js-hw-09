!function(){var e=document.querySelector("body");e.style.margin="0 auto",e.style.textAlign="center",document.querySelectorAll("button").forEach((function(e){e.style.width="200px",e.style.height="100px",e.style.fontSize="20px"}));var t,o=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");n.disabled=!0,o.addEventListener("click",(function(){t=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),o.disabled=!0,n.disabled=!1,console.log("Починаю роботу")})),n.addEventListener("click",(function(){clearInterval(t),o.disabled=!1,n.disabled=!0,console.log("Зупиняю роботу")}))}();
//# sourceMappingURL=01-color-switcher.4feb2877.js.map