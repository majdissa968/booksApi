// Write all your JavaScript code here or use additional files

class BooksApi{
  constructor(options){
    this.options = {
      'apiUrl' : "https://www.googleapis.com/books/v1/volumes?"
      'viewer': '#viewerCanvas'
    }

    this.elements = {
      'form': $('#search-form'),
      'queryInput': $('#input'),
      'results': $('#results'),
    }

    this.registerEvents()
  }

  registerEvents() {
    this.elements.form.on('submit', (e) => {
      e.preventDefault()
      this.GetBookName(
        this.elements.queryInput.val().trim()
      )
    })
  } //  registerEvents()
  GetBookName(input){
    let url = this.options.apiUrl
    let params = {
      'q': input,
     'key':'AIzaSyCJWhP9d7LuZY1FF7Iz9H7vvZ-5Le3WtBI'
   }
   $.get(url, params)
   .done((data) => {
     this.displayData(data)
     //callback(data)
    //this.displayData(data)
     console.log(data)
   })

   .fail((response) => {
     console.error(response, response.responseJSON)
  })

 } // GetBookName
 displayData(data) {
  data.items.forEach((item) => {
    $('#results').append(
      `<div class="container">
      <div class="my-5 text-center display">
          <img class="card-img-top col-4 image img-thumbnail" src="${item.volumeInfo.imageLinks.thumbnail}"><br>
          <h2>${item.volumeInfo.title}</h2><br>
          <p class="para">${item.volumeInfo.description}</p><br>
          <h3 class"authername">${item.volumeInfo.authors}</h3><br>
          <a class="btn btn-danger btn-lg myBtn" href="${item.volumeInfo.previewLink}">Read In google</a>
         </div>
      </div>`)
  });
}
} // class BooksApi
const getBook = new BooksApi()
