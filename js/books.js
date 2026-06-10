export const renderBooks = (data) => {
    console.log("Rendering Books page with data:", data);

    data.library.forEach((series, seriesIndex) => {
        const seriesNumber = seriesIndex + 1;

        document.getElementById(`series-title-${seriesNumber}`).textContent = series.title;
        document.getElementById(`series-description-${seriesNumber}`).textContent = series.description;

        const seriesEl = document.querySelectorAll(".series")[seriesIndex];
        const bookImages = seriesEl.querySelectorAll(".book-cover");

        series.books.forEach((book, bookIndex) => {
            const bookImg = bookImages[bookIndex];

            if (!bookImg) return;

            bookImg.src = book.cover;
            bookImg.alt = `${book.title} Cover`;

            bookImg.addEventListener("click", () => {
                openModal(book);
            });
        });
    });

    const modal = document.querySelector(".modal-close").addEventListener("click", closeModal);

    console.log("Finished rendering Books in Library");
};

function openModal(book) {
    document.getElementById("modal-title").textContent = book.title;
    document.getElementById("modal-summary").textContent = book.description;

    if (book.buyLink === "") {
        document.getElementById("modal-buy-link").textContent = "Coming Soon";
    }

    const modal = document.getElementById("book-modal");
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
}

function closeModal(book) {
    const modal = document.getElementById("book-modal");
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
}