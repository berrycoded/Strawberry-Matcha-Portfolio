const myName = "Hina Khan";
const myClass = "9th A";
const mySchool = "Seerat Educational System";
const myFavoriteSkill = "Power BI Dashboard Layout Structures";
const mySkillReason = "I love mapping out sophisticated visual datasets and presenting metric stories cleanly.";
const projectOne = "My Stylish Web Page";
const projectTwo = "FIFA World Cup Dashboard";

const welcomeBtn = document.getElementById('welcomeBtn');
const dynamicWelcome = document.getElementById('dynamicWelcome');

welcomeBtn.addEventListener('click', function() {
    const visitorName = prompt("Please enter your name:");
    
    if (visitorName !== null && visitorName.trim() !== "") {
        const message = "Hello " + visitorName.trim() + "! I am " + myName + ", a student in Class " + myClass + " at " + mySchool + ". Welcome to my portfolio webpage!";
        
        alert(message);
        
        dynamicWelcome.innerText = message;
        dynamicWelcome.style.display = "block";
    }
});

const skillBtn = document.getElementById('skillBtn');
const dynamicSkill = document.getElementById('dynamicSkill');

skillBtn.addEventListener('click', function() {
    const message = "My favourite skill is definitely " + myFavoriteSkill + " because " + mySkillReason;
    
    dynamicSkill.innerText = message;
    dynamicSkill.style.display = "block";
});


const findProjectBtn = document.getElementById('findProjectBtn');
const projectSelect = document.getElementById('projectSelect');
const dynamicProject = document.getElementById('dynamicProject');

findProjectBtn && findProjectBtn.addEventListener('click', function() {
    const selectedValue = projectSelect.value;
    let message = "";

    if (selectedValue === "Web Design") {
        message = "You should view my project: " + projectOne + ". It features custom semantic text structures built with pure HTML and CSS rules.";
    } else if (selectedValue === "Dashboard") {
        message = "You should view my project: " + projectTwo + ". It evaluates historical statistical data points cleanly within an analytical dashboard framework.";
    } else if (selectedValue === "Creative Writing") {
        message = "You should view my project: SAMIZDAT MARGINALIA. It is an original psychological thriller manuscript built with complex narrative pacing.";
    } else {
        message = "Please pick a design category option from the selection menu list first.";
    }

    dynamicProject.innerText = message;
    dynamicProject.style.display = "block";
});

const contactForm = document.getElementById('contactForm');
const submitFormBtn = document.getElementById('submitFormBtn');
const dynamicContactReply = document.getElementById('dynamicContactReply');

    if (vName === "" || vEmail === "" || vReason === "" || vMessage === "") {
        dynamicContactReply.innerText = "Kindly fill in all form fields before submitting your entry.";
        dynamicContactReply.style.color = "#cc0000";
        dynamicContactReply.style.backgroundColor = "#fff0f0";
        dynamicContactReply.style.border = "2px solid #cc0000";
        dynamicContactReply.style.display = "block";
    } else {
        const successMessage = "Thank you " + vName + " for visiting " + myName + "'s portfolio. Your message regarding '" + vReason + "' is noted successfully!";
        
        dynamicContactReply.innerText = successMessage;
        dynamicContactReply.style.color = "#8fa88b";
        dynamicContactReply.style.backgroundColor = "#ffffff";
        dynamicContactReply.style.border = "2px solid #8fa88b";
        dynamicContactReply.style.display = "block";
    }

document.getElementById('resetFormBtn').addEventListener('click', function() {
    dynamicContactReply.innerText = "";
    dynamicContactReply.style.display = "none";
});