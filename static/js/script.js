// Replace all elements that have a data-feather attribute with a Feather icon
feather.replace()

function loadDeleteModal(trailer) {
    $('#modal-delete-confirmation').modal("show")
    let trailerId = trailer.getAttribute("data-trailer-id");
    let complete_url = "/delete_trailer/" + trailerId
    $('#btn-delete').attr("href", complete_url)
}

function loadEditModal(trailer) { 
    $('#modal-edit-trailer').modal("show");
    let trailerId = trailer.getAttribute("data-trailer-id");
    let complete_url = "/update_trailer/" + trailerId
    // let complete_url = "{{ url_for('update_trailer', trailer_id=trailerId) }}"
    $('#modal-edit-trailer form').attr("action", complete_url)
    let trailerTitle = trailer.getAttribute("data-trailer-title");
    let trailerUrl = trailer.getAttribute("data-trailer-url");
    let trailerQuote = trailer.getAttribute("data-trailer-quote");
    $('#title').attr("value", trailerTitle)
    $('#url').attr("value", trailerUrl)
    $('#quote').attr("value", trailerQuote)
}
