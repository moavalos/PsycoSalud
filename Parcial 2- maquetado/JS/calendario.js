$(document).ready(function () {
  $("#calendar").fullCalendar({
    // defaultDate: '2020-01-01', // Muestra el calendario a partir de ese día
    defaultDate: moment().format("YYYY-MM-DD"), //Arranca a partir del día actual
    eventLimit: true, //  permitir el enlace "más" cuando hay demasiados eventos
    events: [
      {
        title: "Cita con el psicologo Cheems",
        start: "2022-07-15",
      }
    ],
    eventClick: function (event) {
      var modal = $("#seccion");
      modal.modal();
    },
    dayClick: function (date, jsEvent, view) {
      $("#schedule-add").modal("show");
    },
  });
});
