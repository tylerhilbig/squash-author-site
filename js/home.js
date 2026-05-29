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