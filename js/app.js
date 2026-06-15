// Accordion

document.querySelectorAll(".accordion").forEach(btn => {

btn.addEventListener("click", () => {

const panel = btn.nextElementSibling;

if(panel.style.display === "block"){
panel.style.display = "none";
}
else{
panel.style.display = "block";
}

});

});

// Tabs

const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {

tab.addEventListener("click", () => {

document
.querySelectorAll(".tab")
.forEach(t => t.classList.remove("active"));

document
.querySelectorAll(".tab-content")
.forEach(c => c.classList.remove("active"));

tab.classList.add("active");

document
.getElementById(tab.dataset.tab)
.classList.add("active");

});

});