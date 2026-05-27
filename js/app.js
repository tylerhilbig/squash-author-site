import { renderHome } from "./home.js";
import { renderBooks } from "./books.js";
import { renderAbout } from "./about.js";

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
        
        renderHome(data);
    }


    if (document.body.dataset.page === "books") {
        
        renderBooks(data);
    }

    if (document.body.dataset.page === "about") {
        
        renderAbout(data);
    }

    // if (document.body.dataset.page === "contact") {
        
    //     renderContact(data);
    // }

    renderFooter(data); 
}