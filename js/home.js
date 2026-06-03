export const renderHome = (data) => {
    console.log("Rendering Home page with data:", data);

    // New Release
    document.getElementById("new-release-description").textContent = data.newRelease.description;

    renderFeaturedRelease(data.newRelease);

    const modal = document.querySelector(".modal-close").addEventListener("click", closeModal);

    // Books in Progress
    document.getElementById("pie-chart-1").textContent = `${data.booksInProgress[0].progress}%`;
    document.getElementById("in-progress-1").textContent = data.booksInProgress[0].title;

    document.getElementById("pie-chart-2").textContent = `${data.booksInProgress[1].progress}%`;
    document.getElementById("in-progress-2").textContent = data.booksInProgress[1].title;

    document.getElementById("pie-chart-3").textContent = `${data.booksInProgress[2].progress}%`;
    document.getElementById("in-progress-3").textContent = data.booksInProgress[2].title;

    console.log("Finished rendering Home page content");
}

export function renderFeaturedRelease(book) {
    const featured = document.getElementById("featured-release");

    featured.querySelector("img").src = book.cover;
    featured.querySelector("img").alt = `${book.title} Cover`
    featured.querySelector("h2").textContent = book.title;
    featured.querySelector("p").textContent = book.description;

    featured.addEventListener("click", () => {
        openModal(book);
    });
}

function openModal(book) {
    document.getElementById("modal-title").textContent = book.title;
    document.getElementById("modal-summary").textContent = book.description;


    const modal = document.getElementById("book-modal");
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
}

function closeModal(book) {
    const modal = document.getElementById("book-modal");
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
}

export function generatePieCharts(data) {
    const ctx = document.getElementById("myPieChart1");
    const ctx2 = document.getElementById("myPieChart2");
    const ctx3 = document.getElementById("myPieChart3");

    new Chart(ctx, {
    type: "doughnut",
    data: {
        datasets: [{
        data: [data.booksInProgress[0].progress, 100 - data.booksInProgress[0].progress],
        backgroundColor: ["#F59E0B", "#757881"],
        borderWidth: 0,
        cutout: "60%"
        }]
    }
    });
    
    new Chart(ctx2, {
        type: "doughnut",
        data: {
            datasets: [{
            data: [data.booksInProgress[1].progress, 100 - data.booksInProgress[1].progress],
            backgroundColor: ["#F59E0B", "#757881"],
            borderWidth: 0,
            cutout: "60%"
            }]
        }
    });

    new Chart(ctx3, {
        type: "doughnut",
        data: {
            datasets: [{
            data: [data.booksInProgress[2].progress, 100 - data.booksInProgress[2].progress],
            backgroundColor: ["#F59E0B", "#757881"],
            borderWidth: 0,
            cutout: "60%"
            }]
        }
    });
}