// Load the first 12 trailers in the database
let trailersOnPage = 12;
$('.trailer:lt(' + trailersOnPage + ')').show();
hideLoadMoreButton();

// When the user clicks on the load-more button, load 12 more trailers 
function loadMoreTrailer() {
    trailersOnPage += 12;
    $('.trailer:lt(' + trailersOnPage + ')').show();
    hideLoadMoreButton();
}

// Hide the button if all trailers have been loaded
function hideLoadMoreButton() {
    let n = $('#nOfTrailers').text();
    if (trailersOnPage >= n) { $('#btn-load-more').hide(); };
}

// Replace all elements that have a data-feather attribute with a Feather icon
feather.replace();

// Add-Trailer Modal
function loadAddModal() {
    $('#modal-add-edit-trailer input').val(""); // Clear input fields
    $('#modal-add-edit-trailer').modal("show");
    $('#modal-add-edit-trailer form').attr("action", "/insert_trailer");
    $('#modal-add-edit-trailer .modal-title').text("Add a new Trailer");
}

// Edit-Trailer Modal
function loadEditModal(trailer) {
    let trailerId = trailer.getAttribute("data-trailer-id");
    let trailerTitle = trailer.getAttribute("data-trailer-title");
    let trailerUrl = trailer.getAttribute("data-trailer-url");
    let trailerQuote = trailer.getAttribute("data-trailer-quote");
    $('#modal-add-edit-trailer').modal("show");
    $('#modal-add-edit-trailer form').attr("action", "/update_trailer/" + trailerId);
    $('#modal-add-edit-trailer .modal-title').text("Modify " + trailerTitle);
    $('#title').val(trailerTitle);
    $('#url').val(trailerUrl);
    $('#quote').val(trailerQuote);
};

// Check if the user has reached the maximum number of characters in the modal input fields, if so, show an alert message
$("#title,#quote").keyup(function () {
    let nChar = $(this).val().length;
    let maxChar = $(this).attr('maxlength');
    if (nChar == maxChar) { $(this).next().show().text("Maximum number of characters reached! (" + maxChar + ")"); }
    else { $(this).next().hide(); };
});

// Delete-Trailer Modal
function loadDeleteModal(trailer) {
    let trailerId = trailer.getAttribute("data-trailer-id");
    let trailerTitle = trailer.getAttribute("data-trailer-title");
    $('#modal-delete-trailer').modal("show");
    $('#btn-delete').attr("href", "/delete_trailer/" + trailerId);
    $('#modal-delete-trailer .modal-title').text("Are you sure you want to delete " + trailerTitle + " from the database?");
};

// When the user scrolls down 20px from the top of the document, show the return-to-top button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $("#btn-to-top").show();
    } else {
        $("#btn-to-top").hide();
    }
}

//  When the user clicks on the return-to-top button, scroll to the top of the document
function returnToTop() {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
}
