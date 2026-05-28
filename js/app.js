import { renderHome } from "./home.js";
import { renderBooks } from "./books.js";
import { renderAbout } from "./about.js";
import { renderContact } from "./contact.js";

console.dir(document);

    document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("data/content.json");
        console.log("Fetch response:", response);

        if (!response.ok) {
        throw new Error(`Could not load JSON: ${response.status}`);
        }

        const data = await response.json();
        renderPage(data);

    } catch (error) {
        console.error("Error loading content:", error);
    }
    });

function generatePieCharts(data) {
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

function renderFooter(data) {
    console.log("Rendering footer with data:", data);
    console.log("Social media links:", data.socialMedia.instagram);
    document.getElementById("instagram-link").href = data.socialMedia.instagram;
    document.getElementById("youtube-link").href = data.socialMedia.youtube;
    document.getElementById("tiktok-link").href = data.socialMedia.tiktok;
    document.getElementById("linkedin-link").href = data.socialMedia.linkedin;
}

function renderPage(data) {

    if (document.body.dataset.page === "home") {
        generatePieCharts(data);
        renderHome(data);
    }

    if (document.body.dataset.page === "books") {
        renderBooks(data);
    }

    if (document.body.dataset.page === "about") {
        renderAbout(data);
    }

    if (document.body.dataset.page === "contact") {
        console.log("Contact page detected, rendering contact content");
        renderContact(data);
    }

    // if (document.body.dataset.page === "contact") {
        
    //     renderContact(data);
    // }

    renderFooter(data); 
}