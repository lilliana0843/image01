const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const thumbnails = document.querySelectorAll(".gallery img");

thumbnails.forEach(img => {
      img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
      });
    });

    // 點擊遮罩或圖片關閉
    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
 
