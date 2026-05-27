export const renderAbout = (data) => {
     // Author
    document.getElementById("author-photo").src = data.author.photo;
    document.getElementById("author-bio").textContent = data.author.bio;

    // Q&A
    document.getElementById("qa-question-1").textContent = data.qa[0].question;
    document.getElementById("qa-answer-1").textContent = data.qa[0].answer;

    document.getElementById("qa-question-2").textContent = data.qa[1].question;
    document.getElementById("qa-answer-2").textContent = data.qa[1].answer;

    document.getElementById("qa-question-3").textContent = data.qa[2].question;
    document.getElementById("qa-answer-3").textContent = data.qa[2].answer;
    
    console.log("Finished rendering About page content");
}