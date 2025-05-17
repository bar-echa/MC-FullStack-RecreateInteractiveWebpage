$(document).ready(function() {
    $('#addButton').click(function() {
        const movie = $('#movieInput').val().trim();
        if (movie) {
            $('#movieList').append(`<li>${movie}</li>`);
            $('#movieInput').val(''); 
        }
    });
});
