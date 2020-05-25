// Replace all elements that have a data-feather attribute with a Feather icon
feather.replace()



// Take the trailer id from btn-trash-can and use it to fill the href attribute of btn-delete
function passTrailerId(trailer) {
    let trailerId = trailer.getAttribute("data-trailer-id");
    let complete_url = "/delete_trailer/" + trailerId
    $('#btn-delete').attr("href", complete_url)
}

function loadEditModal(trailer) { 
    $('#modal-edit-trailer').modal("show");

    let trailerId = trailer.getAttribute("data-trailer-id");
    let complete_url = "/update_trailer/" + trailerId
    $('#btn-update').attr("href", complete_url)

    let trailerTitle = trailer.getAttribute("data-trailer-title");
    let trailerUrl = trailer.getAttribute("data-trailer-url");
    let trailerQuote = trailer.getAttribute("data-trailer-quote");
    $('#title').attr("value", trailerTitle)
    $('#url').attr("value", trailerUrl)
    $('#quote').attr("value", trailerQuote)
}