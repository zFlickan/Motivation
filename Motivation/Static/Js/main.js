$("#myButton").click(function () {

    // Hämta inmatade värdet
    var numberFromInputBox = $("#numberFromInputBox").val()

    // Töm tidigare värden
    $("#response").html("")
    $("#error").html("")

    // Validera på klient-sidan
    if (!$.isNumeric(numberFromInputBox)) {
        $("#error").html("Skriv in ett tal")
        return
    }

    // Ta roten ur genom att anropa API'et
    $.ajax({
        url: '/api/SquareRoot',
        method: 'GET',
        data: {
            number: numberFromInputBox
        }
    })
    .done(function (result) {
        // Allt gick bra
        $("#response").html(`Svar: ${result}`);
    })
    .fail(function (xhr, status, error) {
        // Något gick fel
        console.log("Error", xhr, status, error)
        $("#error").html(`Error! ${xhr.responseJSON.Message}`);
    })

})