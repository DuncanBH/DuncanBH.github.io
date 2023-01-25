const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");

            setTimeout(() => {
                entry.target.classList.add("cardHover");
            }, 1000)
        }
        // else {
        //     entry.target.classList.remove("show");
        // }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(ele => observer.observe(ele));

// const hiddenCards = document.querySelectorAll('.card.hidden');