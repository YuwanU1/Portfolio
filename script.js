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
            "com1.JPG","com2.JPG","com3.JPG",
            "com4.JPG","com5.JPG","com6.JPG",
            "com7.JPG","com8.JPG","com9.JPG",
            "com10.JPG"],
        gallery4: [
            "meet1.JPG","meet2.JPG","meet8.JPG",
            "meet6.JPG","meet12.JPG","meet11.JPG",
            "meet7.JPG","meet3.JPG","meet9.JPG",
            "meet10.JPG","meet5.JPG","meet6.JPG"],
        gallery5: [
            "meets1.JPG","meets2.JPG","meets8.JPG",
            "meets6.JPG","meets12.JPG","meets11.JPG",
            "meets6.JPG","meets3.JPG","meets9.JPG",
            "meets10.JPG","meets5.JPG","meets7.JPG"],
        gallery6: [
            "booth1.JPG","booth6.JPG","booth3.JPG",
            "booth7.JPG","booth5.JPG","booth2.JPG",
            "booth4.JPG"]

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
