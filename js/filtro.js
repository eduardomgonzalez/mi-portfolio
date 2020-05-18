$(function () {
  /* Al hacer click en los botones de los TRABAJOS
   (todos, diseño, programacion, marketing)*/

  $(".filter").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    /* obtengo el valor del atributo 'data-nombre' al hacer click
        en un boton determinado. Ej. "Diseño" */
    let valor = $(this).attr("data-nombre");
    if (valor == "todos") {
      $(".cont-work").show("1000"); /* Le agrego tiempo (en ms) con '1000' */
    } else {
      /* */
      $(".cont-work")
        .not("." + valor)
        .hide("1000");
      $(".cont-work")
        .filter("." + valor)
        .show("1000");
    }
  });

  let equipo = $("#acerca").offset().top /* Obtengo el valor de Top */,
    servicio = $("#habilidades").offset().top,
    trabajo = $("#trabajo").offset().top,
    contacto = $("#contacto").offset().top;

  /* Clicks en los enlace de la Nav */

  $("#enlace-inicio").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    ); /* 600 es la velocidad en que se desplaza*/
  });

  $("#enlace-equipo").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: equipo - 100 /* en pixeles */,
      },
      600
    );
  });

  $("#enlace-servicio").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: servicio - 100,
      },
      600
    );
  });

  $("#enlace-trabajo").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: trabajo - 100,
      },
      600
    );
  });

  $("#enlace-contacto").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: contacto - 100,
      },
      600
    );
  });
});

// SMOTH SCROLLING
/* document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
 */
