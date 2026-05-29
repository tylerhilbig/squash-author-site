export function renderContact(data) {
    console.log("Rendering Contact page with data:", data);

    document.getElementById("contact-description").textContent = data.contact.description;
};

const form = document.getElementById("contact-form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch("https://formspree.io/f/xykvvedw", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert("Thank you for your message!");
            form.reset();
        } else {
            alert("There was an error submitting the form. Please try again later.");
        }

    } catch (error) {
        console.error("Error submitting form:", error);
    }

    console.log("Form data:", { name, email, message });

    console.log("Form submitted!");
})