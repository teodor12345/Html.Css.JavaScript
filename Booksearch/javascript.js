
let bookTitle = document.getElementById("title");
let bookYear = document.getElementById("year");
let bookAuthor = document.getElementById("author");
let bookID = document.getElementById("bookId");
let saveBtn = document.getElementById("save-btn");
let booklist = document.getElementById("books");
let checkbtn = document.getElementById("changeAvailability");
let deletebtn = document.getElementById("delete-btn");

let books= [];


function Book(bookTitle,bookYear,bookAuthor){
  this.title =bookTitle;
  this.year = bookYear;
  this.author = bookAuthor;
  this.id = Math.random() * 900000 + 100000;
  this.isAvaiableforlend = true;
  this.changeAvaiability = () =>this.isAvaiableforlend = !this.isAvaiableforlend;
}


saveBtn.addEventListener("click", function(e){
  e.preventDefault()
  let titleValue =bookTitle.value;
  let authorValue = bookAuthor.value;
  let yearValue = bookYear.value;
  let book = new Book(titleValue,yearValue,authorValue);
  books.push(book);
  renderBooks(books)
});

function renderBooks(books,el){
  el.innerHTML='';
  for(let i=0;i<books.length;i++){
      let li=document.createElement("li");
      li.setAttribute("id", books[i].id);
      li.innerHTML =`${books[i].title} ${books[i].author} ${books[i].year}`;
      el.appendChild(li);
      li.classList.add("avaiable");
    }
  }

  
checkbtn.addEventListener("click", function(){
  for(let i=0;i<books.length;i++){
    if(parseInt(bookID.value)===books[i].id){
      let li = document.getElementById(books[i].id)
      if(books[i].isAvaiableforlend){
        li.classList.remove("avaiable");
        li.classList.add("notavaiable");
        books[i].isAvaiableforlend=false;
      }
      else{
        li.classList.add("avaiable");
        li.classList.remove("notavaiable");
        books[i].isAvaiableforlend=true;
      }
    }
  }
});





