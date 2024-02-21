$(document).ready(function () {
    var envelope = $("#envelope");
    var openButton = $("#open");
    var resetButton = $("#reset");

    openButton.click(function () {
        envelope.removeClass("close").addClass("open");
        // Agregar el mensaje "Feliz Día de San Valentín" al abrir la carta
        $(".line1").text("20/02");
        $(".line2").text("Feliz Cumpleaños Rubí");
        $(".line3").text("____Se te aprecia");
        $(".line4").text("");
    });

    resetButton.click(function () {
        envelope.removeClass("open").addClass("close");
        $(".line1, .line2, .line3, .line4").text("");
    });
});
