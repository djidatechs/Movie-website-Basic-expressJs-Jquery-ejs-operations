function autocompleteBuilder (arr) {
    $(".autocomplete-items").empty()
    //clean the ac holder 
    console.log(arr)
    //add the new elements to the ax holder
    arr.forEach(element => {
        console.log(element.label)
        $(".autocomplete-items").append (
            `<div>
                <a href="search/${element.id}"> 
                    <div class="calmer">
                        <img src="${element.poster}" ></img> 
                        <span>${element.label} </span>
                    </div>
                </a>
            </div>`
        )
    });
}