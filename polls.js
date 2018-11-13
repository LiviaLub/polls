$(document).ready(function() {
    var $results = $('.results')

    $('.show').on('click', 'button.btn', function(){
        var $apple = $('#apple').val();





        $.ajax({
            type: 'GET',
            url: 'json-data.json',

            success: function (results) {
                $.each(results, function (i, result) {
                    $results.append("<li>" + result.question + "</li>" + result.choices)


                });
            },
            error: function(){
            alert("Error!!!")
            }
        });



});
    });










