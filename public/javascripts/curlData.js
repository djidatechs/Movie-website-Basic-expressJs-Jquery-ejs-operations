function curl(val) {
  req = val ;
  console.log("hi")
  $.ajax ({
    url : '/autocomplete',
    dataType : 'json',
    type : 'GET',
    data : { request : req } ,
    success : (data) => { autocompleteBuilder (data.slice(0, 7))},
    error : (err) => console.log(err.status),
  })
}
