const navbarCollapse = document.getElementById("navbarNav")

const stackedClass = "showStackedVersion";

const toggleCollapse = (id) => navbarCollapse.classList.toggle(id)

document.getElementById("collapseButton").addEventListener("click", () => toggleCollapse(stackedClass))