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

function renderPage(data) {

    if (document.body.dataset.page === "home") {
        console.log("Home Page Detected");
        renderHome(data);
    }

    console.log("docment.body.dataset.page:", document.body.dataset.page);
    if (document.body.dataset.page === "books") {
        console.log("Books Page Detected");
        renderBooks(data);
    }

    if (document.body.dataset.page === "about") {
        console.log("About Page Detected");
        renderAbout(data);
    }

}