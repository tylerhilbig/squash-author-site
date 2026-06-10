export function renderShortStories(data) {
    const container = document.getElementById("short-stories-container");
    container.innerHTML = ""; // Clear existing content

    data.shortStories.forEach(story => {
        const storyElement = document.createElement("div");
        storyElement.classList.add("short-story");

        const title = document.createElement("h3");
        title.textContent = story.title;
        storyElement.appendChild(title);

        const description = document.createElement("p");
        description.textContent = story.description;
        storyElement.appendChild(description);

        const content = document.createElement("p");
        content.textContent = story.content;
        storyElement.appendChild(content);

        if (story.link) {
            const link = document.createElement("a");
            link.href = story.link;
            link.textContent = "Read More";
            link.target = "_blank";
            storyElement.appendChild(link);
        }

        container.appendChild(storyElement);
    });
}