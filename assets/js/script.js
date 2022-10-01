$(document).ready(function () {
  $.get(
    "https://my-json-server.typicode.com/alaravena/ldp3101/usuarios",
    function (data) {
      $.each(data, function (i, item) {
        $("#content").append(
          "<tr id=" +
            '"elemento' +
            item.id +
            '"' +
            "><td>" +
            item.id +
            "</td><td>" +
            item.nombre +
            "</td><td>" +
            item.email +
            "</td><td class=" +
            '"d-none"' +
            ">" +
            item.edad +
            "</td><td class=" +
            '"d-none"' +
            ">" +
            item.avatar +
            "</td><td>" +
            "<div class=" +
            '"btn-box"' +
            ">" +
            "<button class=" +
            '"btn btn-success change"' +
            ">" +
            "<i class=" +
            '"fa-solid fa-pen-to-square fa-md"' +
            "></i>" +
            "</button>" +
            "<button class=" +
            '"btn btn-danger delete"' +
            ">" +
            "<i class=" +
            '"fa-solid fa-circle-minus fa-md"' +
            "></i>" +
            "</button>" +
            "<button type=" +
            '"button"' +
            "class=" +
            '"view btn btn-primary"' +
            "data-bs-toggle=" +
            '"modal"' +
            "data-bs-target=" +
            '"#exampleModal"' +
            ">" +
            "<i class=" +
            '"fa-solid fa-circle-info fa-md"' +
            "></i>" +
            "</button>" +
            "</div>" +
            "</td></tr>"
        );
      });

      $("button.change").click(function () {
        var confirmname1 = confirm("Desea cambiar el Nombre?");
        if (confirmname1 == true) {
          var nameon1 = $(this).parents("tr").children().first().next().html();
          var name1 = prompt("Ingrese el nuevo Nombre");
          $(this).parents("tr").children(":nth-child(2)").html(name1);
          while (name1 == "") {
            alert("No puede dejar el espacio en blanco..");
            var name1 = prompt("Ingrese el nuevo Nombre");
            $(this).parents("tr").children(":nth-child(2)").html(name1);
          }
          if (name1 === null) {
            $(this).parents("tr").children(":nth-child(2)").html(nameon1);
          }
        }

        var confirmemail1 = confirm("Desea cambiar el Email?");
        if (confirmemail1 == true) {
          var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
          var emailon1 = $(this).parents("tr").children(":nth-child(3)").html();

          var email1 = prompt("Ingrese el nuevo Email");
          var error = 0;
          var in1 = 5;
          while (testEmail.test(email1) == false && error < 5) {
            error++;
            alert(
              "Recuerde que debe incluir @ gmail, duoc, etc y . mas el dominio" +
                "\n" +
                "Intentos Restantes : " +
                in1--
            );
            var email1 = prompt("Ingrese el nuevo Email");
            while (email1 == "" && error < 5) {
              error++;
              alert(
                "No puede dejar el espacio en blanco.." +
                  "\n" +
                  "Intentos Restantes : " +
                  in1--
              );
              var email1 = prompt("Ingrese el nuevo Email");
            }
          }
          if (error == 5) {
            alert("Demaciados Intentos fallidos. Cancelando.");
            var email1 = null;
          }
          if (email1 === null) {
            $(this).parents("tr").children(":nth-child(3)").html(emailon1);
          } else {
            $(this).parents("tr").children(":nth-child(3)").html(email1);
          }
        }

        var confirmedad1 = confirm("Desea cambiar la Edad?");
        if (confirmedad1 == true) {
          var edad1 = parseInt(prompt("Ingrese su nueva Edad"));
          $(this).parents("tr").children(":nth-child(4)").html(edad1);
        }
      });

      $("button.delete").click(function () {
        var confirmation1 = confirm(
          "Estas seguro?" + "\n" + "El elemento sera eliminado"
        );
        if (confirmation1 == true) {
          $(this).parents("tr").remove();
        }
      });

      $("button.view").click(function () {
        $("#modal-data").html(
          "Id: " +
            $(this).parents("tr").children().first().html() +
            "</br>" +
            "Nombre : " +
            $(this).parents("tr").children().first().next().html() +
            "</br>" +
            "Email : " +
            $(this).parents("tr").children(":nth-child(3)").html() +
            "</br>" +
            "Edad : " +
            $(this).parents("tr").children(":nth-child(4)").html() +
            "</br>" +
            "Avatar : " +
            $(this).parents("tr").children(":nth-child(5)").html()
        );
      });
    }
  );
});

id = 10;
$("#add").click(function () {
  $("#content").append(
    "<tr id=" +
      '"elemento' +
      id +
      '"' +
      "><td>" +
      id +
      "</td><td>" +
      prompt("Ingrese el Nombre") +
      "</td><td>" +
      prompt("Ingrese el Email") +
      "</td><td class=" +
      '"d-none"' +
      ">" +
      parseInt(prompt("Ingrese la Edad")) +
      "</td><td class=" +
      '"d-none"' +
      ">" +
      prompt("Link del avatar, Puede dejarlo vacio") +
      "</td><td>" +
      "<div class=" +
      '"btn-box"' +
      ">" +
      "<button class=" +
      '"change btn btn-success"' +
      ">" +
      "<i class=" +
      '"fa-solid fa-pen-to-square fa-md"' +
      "></i>" +
      "</button>" +
      "<button class=" +
      '"btn btn-danger delete"' +
      ">" +
      "<i class=" +
      '"fa-solid fa-circle-minus fa-md"' +
      "></i>" +
      "</button>" +
      "<button type=" +
      '"button"' +
      "class=" +
      '"view btn btn-primary"' +
      "data-bs-toggle=" +
      '"modal"' +
      "data-bs-target=" +
      '"#exampleModal"' +
      ">" +
      "<i class=" +
      '"fa-solid fa-circle-info fa-md"' +
      "></i>" +
      "</button>" +
      "</div>" +
      "</td></tr>"
  );

  $("button.change").click(function () {
    var $name = $(this).parents("tr").children(":nth-child(2)").html();
    var $email = $(this).parents("tr").children(":nth-child(3)").html();
    var confirmname1 = confirm("Desea cambiar el Nombre?");
    if (confirmname1 == true) {
      var nameon1 = $name;
      var name1 = prompt("Ingrese el nuevo Nombre");
      $(this).parents("tr").children(":nth-child(2)").html(name1);
      while (name1 == "") {
        alert("No puede dejar el espacio en blanco..");
        var name1 = prompt("Ingrese el nuevo Nombre");
        $(this).parents("tr").children(":nth-child(2)").html(name1);
      }
      if (name1 === null) {
        $(this).parents("tr").children(":nth-child(2)").html(nameon1);
      }
    }

    var confirmemail1 = confirm("Desea cambiar el Email?");
    if (confirmemail1 == true) {
      var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
      var emailon1 = $email;

      var email1 = prompt("Ingrese el nuevo Email");
      var error = 0;
      var in1 = 5;
      while (testEmail.test(email1) == false && error < 5) {
        error++;
        alert(
          "Recuerde que debe incluir @ gmail, duoc, etc y . mas el dominio" +
            "\n" +
            "Intentos Restantes : " +
            in1--
        );
        var email1 = prompt("Ingrese el nuevo Email");
        while (email1 == "" && error < 5) {
          error++;
          alert(
            "No puede dejar el espacio en blanco.." +
              "\n" +
              "Intentos Restantes : " +
              in1--
          );
          var email1 = prompt("Ingrese el nuevo Email");
        }
      }
      if (error == 5) {
        alert("Demaciados Intentos fallidos. Cancelando.");
        var email1 = null;
      }
      if (email1 === null) {
        $(this).parents("tr").children(":nth-child(3)").html(emailon1);
      } else {
        $(this).parents("tr").children(":nth-child(3)").html(email1);
      }
    }

    var confirmedad1 = confirm("Desea cambiar la Edad?");
    if (confirmedad1 == true) {
      var edad1 = parseInt(prompt("Ingrese su nueva Edad"));
      $(this).parents("tr").children(":nth-child(4)").html(edad1);
    }

  });

  $(".delete").click(function () {
    var $id = $(this).parents("tr").children(":nth-child(1)").first().html();
    console.log($id)
    
    var confirmation1 = confirm(
      "Estas seguro?" + "\n" + "El elemento sera eliminado"
    );

    if (confirmation1 == true) {
      $(this).parents("tr").remove();
    }
  });

  $("button.view").click(function () {
    var $id = $(this).parents("tr").children(":nth-child(1)").first().html();
    var $name = $(this).parents("tr").children(":nth-child(2)").html();
    var $email = $(this).parents("tr").children(":nth-child(3)").html();
    var $edad = $(this).parents("tr").children(":nth-child(4)").html();
    var $avatar = $(this).parents("tr").children(":nth-child(5)").html();
    $("#modal-data").html(
      "Id: " +
        $id +
        "</br>" +
        "Nombre : " +
        $name +
        "</br>" +
        "Email : " +
        $email +
        "</br>" +
        "Edad : " +
        $edad +
        "</br>" +
        "Avatar : " +
        $avatar
    );
  });
  id++;
});
