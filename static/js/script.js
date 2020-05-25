// Replace all elements that have a data-feather attribute with a Feather icon
feather.replace()

// Take the trailer id from btn-trash-can and use it to fill the href attribute of btn-delete
function passTrailerId(trailer) {
    let trailerId = trailer.getAttribute("data-trailer-id");
    let complete_url = "/delete_trailer/" + trailerId
    $('#btn-delete').attr("href", complete_url)
}