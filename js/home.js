export const renderHome = (data) => {
    console.log("Rendering Home page with data:", data);

    // New Release
    document.getElementById("new-release-description").textContent = data.newRelease.description;

    // Books in Progress
    document.getElementById("pie-chart-1").textContent = `${data.booksInProgress[0].progress}%`;
    document.getElementById("in-progress-1").textContent = data.booksInProgress[0].title;

    document.getElementById("pie-chart-2").textContent = `${data.booksInProgress[1].progress}%`;
    document.getElementById("in-progress-2").textContent = data.booksInProgress[1].title;

    document.getElementById("pie-chart-3").textContent = `${data.booksInProgress[2].progress}%`;
    document.getElementById("in-progress-3").textContent = data.booksInProgress[2].title;

    console.log("Finished rendering Home page content");
}