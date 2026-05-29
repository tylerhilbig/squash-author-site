export const renderBooks = (data) => {
    console.log("Rendering Books page with data:", data);

    // Books in Library
    document.getElementById("series-title-1").textContent = data.library[0].title;
    document.getElementById("series-description-1").textContent = data.library[0].description;

    document.getElementById("series-title-2").textContent = data.library[1].title;
    document.getElementById("series-description-2").textContent = data.library[1].description;

    document.getElementById("series-title-3").textContent = data.library[2].title;
    document.getElementById("series-description-3").textContent = data.library[2].description;

    console.log("Finished rendering Books in Library");
}