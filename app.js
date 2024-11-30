// Sample Data
let books = [
    { id: 1, title: "Book A", isRented: false },
    { id: 2, title: "Book B", isRented: true },
  ];
  
  // Function to Display Books
  function displayBooks() {
    const booksList = document.getElementById("books");
    booksList.innerHTML = "";
    books.forEach((book) => {
      const bookItem = document.createElement("li");
      bookItem.textContent = `${book.title} - ${
        book.isRented ? "Rented" : "Available"
      }`;
      booksList.appendChild(bookItem);
  
      // Add Rent/Return Button
      const actionBtn = document.createElement("button");
      actionBtn.textContent = book.isRented ? "Return" : "Rent";
      actionBtn.onclick = () => toggleRentStatus(book.id);
      bookItem.appendChild(actionBtn);
    });
    updateCounts();
  }
  
  // Function to Update Book Counts
  function updateCounts() {
    const totalBooks = books.length;
    const rentedBooks = books.filter((book) => book.isRented).length;
    document.getElementById("totalBooks").textContent = totalBooks;
    document.getElementById("rentedBooks").textContent = rentedBooks;
  }
  
  // Function to Toggle Rent Status
  function toggleRentStatus(bookId) {
    const book = books.find((b) => b.id === bookId);
    if (book) {
      book.isRented = !book.isRented;
      displayBooks();
    }
  }
  
  // Modal Management
  const modal = document.getElementById("bookModal");
  const addBookBtn = document.getElementById("addBookBtn");
  const closeModal = document.getElementById("closeModal");
  const addBookForm = document.getElementById("addBookForm");
  
  addBookBtn.onclick = () => (modal.style.display = "flex");
  closeModal.onclick = () => (modal.style.display = "none");
  
  // Add New Book
  addBookForm.onsubmit = (e) => {
    e.preventDefault();
    const bookTitle = document.getElementById("bookTitle").value.trim();
    if (bookTitle) {
      books.push({ id: books.length + 1, title: bookTitle, isRented: false });
      displayBooks();
      modal.style.display = "none";
      addBookForm.reset();
    }
  };
  
  // Initial Render
  displayBooks();
  