// Replace all elements that have a data-feather attribute with a Feather icon
feather.replace()

function loadAddModal(trailer) {
    $('#modal-add-edit-trailer').modal("show");
    $('#modal-add-edit-trailer form').attr("action", "/insert_trailer");
    $('#modal-add-edit-trailer .modal-title').text("Add a new Trailer")
    $('#modal-add-edit-trailer input').attr("value", "")
}

function loadDeleteModal(trailer) {
    $('#modal-delete-trailer').modal("show")
    let trailerId = trailer.getAttribute("data-trailer-id");
    $('#btn-delete').attr("href", "/delete_trailer/" + trailerId)
    let trailerTitle = trailer.getAttribute("data-trailer-title");
    $('#modal-delete-trailer .modal-title').text("Are you sure you want to delete " + trailerTitle + " from the database?")
}

function loadEditModal(trailer) { 
    $('#modal-add-edit-trailer').modal("show");
    let trailerId = trailer.getAttribute("data-trailer-id");
    $('#modal-add-edit-trailer form').attr("action", "/update_trailer/" + trailerId);
    let trailerTitle = trailer.getAttribute("data-trailer-title");
    let trailerUrl = trailer.getAttribute("data-trailer-url");
    let trailerQuote = trailer.getAttribute("data-trailer-quote");
    $('#modal-add-edit-trailer .modal-title').text("Modify "+ trailerTitle)
    $('#title').attr("value", trailerTitle)
    $('#url').attr("value", trailerUrl)
    $('#quote').attr("value", trailerQuote)
}
