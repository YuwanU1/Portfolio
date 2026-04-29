document.addEventListener("DOMContentLoaded", () => {
    const galleries = {
        gallery1: [
            "../img&vid/debut1.JPG","../img&vid/debut2.JPG","../img&vid/debut3.JPG",
            "../img&vid/debut4.JPG","../img&vid/debut12.JPG","../img&vid/debut6.JPG",
            "../img&vid/debut11.JPG","../img&vid/debut8.JPG","../img&vid/debut9.JPG",
            "../img&vid/debut10.JPG","../img&vid/debut7.JPG","../img&vid/debut5.JPG"
        ],
        gallery2: [ 
            "../img&vid/debuts8.JPG","../img&vid/debuts5.JPG","../img&vid/debuts3.JPG",
            "../img&vid/debuts4.JPG","../img&vid/debuts12.JPG","../img&vid/debuts6.JPG",
            "../img&vid/debuts11.JPG","../img&vid/debuts1.JPG","../img&vid/debuts9.JPG",
            "../img&vid/debuts10.JPG","../img&vid/debuts7.JPG","../img&vid/debuts2.JPG"],
        gallery3: [ 
            "../img&vid/com1.JPG","../img&vid/com2.JPG","../img&vid/com3.JPG",
            "../img&vid/com4.JPG","../img&vid/com5.JPG","../img&vid/com6.JPG",
            "../img&vid/com7.JPG","../img&vid/com8.JPG","../img&vid/com9.JPG",
            "../img&vid/com10.JPG"],
        gallery4: [
            "../img&vid/meet1.JPG","../img&vid/meet2.JPG","../img&vid/meet8.JPG",
            "../img&vid/meet6.JPG","../img&vid/meet12.JPG","../img&vid/meet11.JPG",
            "../img&vid/meet7.JPG","../img&vid/meet3.JPG","../img&vid/meet9.JPG",
            "../img&vid/meet10.JPG","../img&vid/meet5.JPG","../img&vid/meet6.JPG"],
        gallery5: [
            "../img&vid/meets1.JPG","../img&vid/meets2.JPG","../img&vid/meets8.JPG",
            "../img&vid/meets6.JPG","../img&vid/meets12.JPG","../img&vid/meets11.JPG",
            "../img&vid/meets6.JPG","../img&vid/meets3.JPG","../img&vid/meets9.JPG",
            "../img&vid/meets10.JPG","../img&vid/meets5.JPG","../img&vid/meets7.JPG"],
        gallery6: [
            "../img&vid/booth1.JPG","../img&vid/booth6.JPG","../img&vid/booth3.JPG",
            "../img&vid/booth7.JPG","../img&vid/booth5.JPG","../img&vid/booth2.JPG",
            "../img&vid/booth4.JPG"]

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