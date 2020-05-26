// Replace all elements that have a data-feather attribute with a Feather icon
feather.replace()

function loadAddModal(trailer) {
    $('#modal-add-edit-trailer').modal("show");
    let complete_url = "/insert_trailer";
    $('#modal-add-edit-trailer form').attr("action", complete_url);
    $('#modal-add-edit-trailer .modal-title').text("Add a new Trailer")
    $('#modal-add-edit-trailer input').attr("value", "")
}

function loadDeleteModal(trailer) {
    $('#modal-delete-confirmation').modal("show")
    let trailerId = trailer.getAttribute("data-trailer-id");
    let complete_url = "/delete_trailer/" + trailerId
    $('#btn-delete').attr("href", complete_url)
}

function loadEditModal(trailer) { 
    $('#modal-add-edit-trailer').modal("show");
    let trailerId = trailer.getAttribute("data-trailer-id");
    let complete_url = "/update_trailer/" + trailerId
    $('#modal-add-edit-trailer form').attr("action", complete_url);
    let trailerTitle = trailer.getAttribute("data-trailer-title");
    let trailerUrl = trailer.getAttribute("data-trailer-url");
    let trailerQuote = trailer.getAttribute("data-trailer-quote");
    $('#modal-add-edit-trailer .modal-title').text("Modify "+ trailerTitle)
    $('#title').attr("value", trailerTitle)
    $('#url').attr("value", trailerUrl)
    $('#quote').attr("value", trailerQuote)
}
