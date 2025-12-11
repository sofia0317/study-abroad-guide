document.querySelectorAll(".book").forEach((book) => {
  book.addEventListener("click", () => {
    const city = book.dataset.city;

    console.log("Clicked book for:", city);

    const shelf = document.querySelector(".bookshelf");
    if (shelf) {
      shelf.classList.add("fade-out");
    }

    book.classList.add("opening");

    setTimeout(() => {
      window.location.href = `${city}.html`;
    }, 600); 
  });
});
