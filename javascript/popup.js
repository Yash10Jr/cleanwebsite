document.querySelector("#open-popup").addEventListener("click", function() {
  setTimeout(function() {
      document.querySelector(".popup").classList.add("active");
  }, 2000); // 2000 milliseconds = 2 seconds
});
  document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
  });