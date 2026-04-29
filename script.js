document.addEventListener("DOMContentLoaded", () => {
    const galleries = {
        gallery1: [
            "debut1.JPG","debut2.JPG","debut3.JPG",
            "debut4.JPG","debut12.JPG","debut6.JPG",
            "debut11.JPG","debut8.JPG","debut9.JPG",
            "debut10.JPG","debut7.JPG","debut5.JPG"
        ],
        gallery2: [ 
            "debuts8.JPG","debuts5.JPG","debuts3.JPG",
            "debuts4.JPG","debuts12.JPG","debuts6.JPG",
            "debuts11.JPG","debuts1.JPG","debuts9.JPG",
            "debuts10.JPG","debuts7.JPG","debuts2.JPG"],
        gallery3: [ 
            "com1.jpg","com2.jpg","com3.jpg",
            "com4.jpg","com5.jpg","com6.jpg",
            "com7.jpg","com8.jpg","com9.jpg",
            "com10.jpg"],
        gallery4: [
            "meet1.jpg","meet2.jpg","meet8.jpg",
            "meet6.jpg","meet12.jpg","meet11.jpg",
            "meet7.jpg","meet3.jpg","meet9.jpg",
            "meet10.jpg","meet5.jpg","meet6.jpg"],
        gallery5: [
            "meets1.jpg","meets2.jpg","meets8.jpg",
            "meets6.jpg","meets12.jpg","meets11.jpg",
            "meets6.jpg","meets3.jpg","meets9.jpg",
            "meets10.jpg","meets5.jpg","meets7.jpg"],
        gallery6: [
            "booth1.jpg","booth6.jpg","booth3.jpg",
            "booth7.jpg","booth5.jpg","booth2.jpg",
            "booth4.jpg"]

    };

    const posters = document.querySelectorAll(".poster");
    const popup = document.getElementById("popup");
    const popupGrid = document.getElementById("popupGrid");

    posters.forEach(poster => {
        poster.addEventListener("click", () => {
            const galleryName = poster.parentElement.getAttribute("data-gallery");
            const images = galleries[galleryName];

            popupGrid.innerHTML = "";
            images.forEach(src => {
                const img = document.createElement("img");
                img.src = src;
                popupGrid.appendChild(img);
            });

            popup.style.display = "flex";
        });
    });

    popup.addEventListener("click", e => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});
