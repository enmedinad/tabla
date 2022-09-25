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
            "<button id=" +
            '"change' +
            item.id +
            '"' +
            "class=" +
            '"btn btn-success"' +
            ">" +
            "<i class=" +
            '"fa-solid fa-pen-to-square fa-md"' +
            "></i>" +
            "</button>" +
            "<button id=" +
            '"delete' +
            item.id +
            '"' +
            "class=" +
            '"btn btn-danger"' +
            ">" +
            "<i class=" +
            '"fa-solid fa-circle-minus fa-md"' +
            "></i>" +
            "</button>" +
            "<button id=" +
            '"view' +
            item.id +
            '"' +
            "class=" +
            '"btn btn-primary"' +
            ">" +
            "<i class=" +
            '"fa-solid fa-circle-info fa-md"' +
            "></i>" +
            "</button>" +
            "</div>" +
            "</td></tr>"
        );
      });

      $("#change1").click(function () {
        var confirmname1 = confirm("Desea cambiar el Nombre?");
        if (confirmname1 == true) {
          var nameon1 = $("tr#elemento1").children().first().next().html();
          var name1 = prompt("Ingrese el nuevo Nombre");
          $("tr#elemento1").children().first().next().html(name1);
          while (name1 == "") {
            alert("No puede dejar el espacio en blanco..");
            var name1 = prompt("Ingrese el nuevo Nombre");
            $("tr#elemento1").children().first().next().html(name1);
          }
          if (name1 === null) {
            $("tr#elemento1").children().first().next().html(nameon1);
          }
        }

        var confirmemail1 = confirm("Desea cambiar el Email?");
        if (confirmemail1 == true) {
          var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
          var emailon1 = $("tr#elemento1").children(":nth-child(3)").html();

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
            $("tr#elemento1").children(":nth-child(3)").html(emailon1);
          } else {
            $("tr#elemento1").children(":nth-child(3)").html(email1);
          }
        }

        var confirmedad1 = confirm("Desea cambiar la Edad?");
        if (confirmedad1 == true) {
          var edad1 = parseInt(prompt("Ingrese su nueva Edad"));
          $("tr#elemento1").children(":nth-child(4)").html(edad1);
        }
      });
      $("#delete1").click(function () {
        var confirmation1 = confirm(
          "Estas seguro?" + "\n" + "El elemento sera eliminado"
        );
        if (confirmation1 == true) {
          $("tr#elemento1").remove();
        }
      });
      $("#view1").click(function () {
        alert(
          "Id: " +
            $("tr#elemento1").children().first().html() +
            "\n" +
            "Nombre : " +
            $("tr#elemento1").children().first().next().html() +
            "\n" +
            "Email : " +
            $("tr#elemento1").children(":nth-child(3)").html() +
            "\n" +
            "Edad : " +
            $("tr#elemento1").children(":nth-child(4)").html() +
            "\n" +
            "Avatar : " +
            $("tr#elemento1").children(":nth-child(5)").html()
        );
      });

      $("#change2").click(function () {
        var confirmname1 = confirm("Desea cambiar el Nombre?");
        if (confirmname1 == true) {
          var nameon1 = $("tr#elemento2").children().first().next().html();
          var name1 = prompt("Ingrese el nuevo Nombre");
          $("tr#elemento2").children().first().next().html(name1);
          while (name1 == "") {
            alert("No puede dejar el espacio en blanco..");
            var name1 = prompt("Ingrese el nuevo Nombre");
            $("tr#elemento2").children().first().next().html(name1);
          }
          if (name1 === null) {
            $("tr#elemento2").children().first().next().html(nameon1);
          }
        }

        var confirmemail1 = confirm("Desea cambiar el Email?");
        if (confirmemail1 == true) {
          var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
          var emailon1 = $("tr#elemento2").children(":nth-child(3)").html();

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
            $("tr#elemento2").children(":nth-child(3)").html(emailon1);
          } else {
            $("tr#elemento2").children(":nth-child(3)").html(email1);
          }
        }

        var confirmedad1 = confirm("Desea cambiar la Edad?");
        if (confirmedad1 == true) {
          var edad1 = parseInt(prompt("Ingrese su nueva Edad"));
          $("tr#elemento2").children(":nth-child(4)").html(edad1);
        }
      });

      $("#delete2").click(function () {
        var confirmation1 = confirm("Estas seguro?");
        if (confirmation1 == true) {
          $("tr#elemento2").remove();
        }
      });

      $("#view2").click(function () {
        alert(
          "Id: " +
            $("tr#elemento2").children().first().html() +
            "\n" +
            "Nombre : " +
            $("tr#elemento2").children().first().next().html() +
            "\n" +
            "Email : " +
            $("tr#elemento2").children(":nth-child(3)").html() +
            "\n" +
            "Edad : " +
            $("tr#elemento2").children(":nth-child(4)").html() +
            "\n" +
            "Avatar : " +
            $("tr#elemento2").children(":nth-child(5)").html()
        );
      });
      $("#change3").click(function () {
        var confirmname1 = confirm("Desea cambiar el Nombre?");
        if (confirmname1 == true) {
          var nameon1 = $("tr#elemento3").children().first().next().html();
          var name1 = prompt("Ingrese el nuevo Nombre");
          $("tr#elemento3").children().first().next().html(name1);
          while (name1 == "") {
            alert("No puede dejar el espacio en blanco..");
            var name1 = prompt("Ingrese el nuevo Nombre");
            $("tr#elemento3").children().first().next().html(name1);
          }
          if (name1 === null) {
            $("tr#elemento3").children().first().next().html(nameon1);
          }
        }

        var confirmemail1 = confirm("Desea cambiar el Email?");
        if (confirmemail1 == true) {
          var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
          var emailon1 = $("tr#elemento3").children(":nth-child(3)").html();

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
            $("tr#elemento3").children(":nth-child(3)").html(emailon1);
          } else {
            $("tr#elemento3").children(":nth-child(3)").html(email1);
          }
        }

        var confirmedad1 = confirm("Desea cambiar la Edad?");
        if (confirmedad1 == true) {
          var edad1 = parseInt(prompt("Ingrese su nueva Edad"));
          $("tr#elemento3").children(":nth-child(4)").html(edad1);
        }
      });

      $("#delete3").click(function () {
        var confirmation1 = confirm("Estas seguro?");
        if (confirmation1 == true) {
          $("tr#elemento3").remove();
        }
      });
      $("#view3").click(function () {
        alert(
          "Id: " +
            $("tr#elemento3").children().first().html() +
            "\n" +
            "Nombre : " +
            $("tr#elemento3").children().first().next().html() +
            "\n" +
            "Email : " +
            $("tr#elemento3").children(":nth-child(3)").html() +
            "\n" +
            "Edad : " +
            $("tr#elemento3").children(":nth-child(4)").html() +
            "\n" +
            "Avatar : " +
            $("tr#elemento3").children(":nth-child(5)").html()
        );
      });

      $("#change4").click(function () {
        var confirmname1 = confirm("Desea cambiar el Nombre?");
        if (confirmname1 == true) {
          var nameon1 = $("tr#elemento4").children().first().next().html();
          var name1 = prompt("Ingrese el nuevo Nombre");
          $("tr#elemento4").children().first().next().html(name1);
          while (name1 == "") {
            alert("No puede dejar el espacio en blanco..");
            var name1 = prompt("Ingrese el nuevo Nombre");
            $("tr#elemento4").children().first().next().html(name1);
          }
          if (name1 === null) {
            $("tr#elemento4").children().first().next().html(nameon1);
          }
        }

        var confirmemail1 = confirm("Desea cambiar el Email?");
        if (confirmemail1 == true) {
          var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
          var emailon1 = $("tr#elemento4").children(":nth-child(3)").html();

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
            $("tr#elemento4").children(":nth-child(3)").html(emailon1);
          } else {
            $("tr#elemento4").children(":nth-child(3)").html(email1);
          }
        }

        var confirmedad1 = confirm("Desea cambiar la Edad?");
        if (confirmedad1 == true) {
          var edad1 = parseInt(prompt("Ingrese su nueva Edad"));
          $("tr#elemento4").children(":nth-child(4)").html(edad1);
        }
      });

      $("#delete4").click(function () {
        var confirmation1 = confirm("Estas seguro?");
        if (confirmation1 == true) {
          $("tr#elemento4").remove();
        }
      });
      $("#view4").click(function () {
        alert(
          "Id: " +
            $("tr#elemento4").children().first().html() +
            "\n" +
            "Nombre : " +
            $("tr#elemento4").children().first().next().html() +
            "\n" +
            "Email : " +
            $("tr#elemento4").children(":nth-child(3)").html() +
            "\n" +
            "Edad : " +
            $("tr#elemento4").children(":nth-child(4)").html() +
            "\n" +
            "Avatar : " +
            $("tr#elemento4").children(":nth-child(5)").html()
        );
      });

      $("#change5").click(function () {
        var confirmname1 = confirm("Desea cambiar el Nombre?");
        if (confirmname1 == true) {
          var nameon1 = $("tr#elemento5").children().first().next().html();
          var name1 = prompt("Ingrese el nuevo Nombre");
          $("tr#elemento5").children().first().next().html(name1);
          while (name1 == "") {
            alert("No puede dejar el espacio en blanco..");
            var name1 = prompt("Ingrese el nuevo Nombre");
            $("tr#elemento5").children().first().next().html(name1);
          }
          if (name1 === null) {
            $("tr#elemento5").children().first().next().html(nameon1);
          }
        }

        var confirmemail1 = confirm("Desea cambiar el Email?");
        if (confirmemail1 == true) {
          var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
          var emailon1 = $("tr#elemento5").children(":nth-child(3)").html();

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
            $("tr#elemento5").children(":nth-child(3)").html(emailon1);
          } else {
            $("tr#elemento5").children(":nth-child(3)").html(email1);
          }
        }

        var confirmedad1 = confirm("Desea cambiar la Edad?");
        if (confirmedad1 == true) {
          var edad1 = parseInt(prompt("Ingrese su nueva Edad"));
          $("tr#elemento5").children(":nth-child(4)").html(edad1);
        }
      });

      $("#delete5").click(function () {
        var confirmation1 = confirm("Estas seguro?");
        if (confirmation1 == true) {
          $("tr#elemento5").remove();
        }
      });
      $("#view5").click(function () {
        alert(
          "Id: " +
            $("tr#elemento5").children().first().html() +
            "\n" +
            "Nombre : " +
            $("tr#elemento5").children().first().next().html() +
            "\n" +
            "Email : " +
            $("tr#elemento5").children(":nth-child(3)").html() +
            "\n" +
            "Edad : " +
            $("tr#elemento5").children(":nth-child(4)").html() +
            "\n" +
            "Avatar : " +
            $("tr#elemento5").children(":nth-child(5)").html()
        );
      });
      $("#change6").click(function () {
        var confirmname1 = confirm("Desea cambiar el Nombre?");
        if (confirmname1 == true) {
          var nameon1 = $("tr#elemento6").children().first().next().html();
          var name1 = prompt("Ingrese el nuevo Nombre");
          $("tr#elemento6").children().first().next().html(name1);
          while (name1 == "") {
            alert("No puede dejar el espacio en blanco..");
            var name1 = prompt("Ingrese el nuevo Nombre");
            $("tr#elemento6").children().first().next().html(name1);
          }
          if (name1 === null) {
            $("tr#elemento6").children().first().next().html(nameon1);
          }
        }

        var confirmemail1 = confirm("Desea cambiar el Email?");
        if (confirmemail1 == true) {
          var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
          var emailon1 = $("tr#elemento6").children(":nth-child(3)").html();

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
            $("tr#elemento6").children(":nth-child(3)").html(emailon1);
          } else {
            $("tr#elemento6").children(":nth-child(3)").html(email1);
          }
        }

        var confirmedad1 = confirm("Desea cambiar la Edad?");
        if (confirmedad1 == true) {
          var edad1 = parseInt(prompt("Ingrese su nueva Edad"));
          $("tr#elemento6").children(":nth-child(4)").html(edad1);
        }
      });
      $("#delete6").click(function () {
        var confirmation1 = confirm("Estas seguro?");
        if (confirmation1 == true) {
          $("tr#elemento6").remove();
        }
      });
      $("#view6").click(function () {
        alert(
          "Id: " +
            $("tr#elemento6").children().first().html() +
            "\n" +
            "Nombre : " +
            $("tr#elemento6").children().first().next().html() +
            "\n" +
            "Email : " +
            $("tr#elemento6").children(":nth-child(3)").html() +
            "\n" +
            "Edad : " +
            $("tr#elemento6").children(":nth-child(4)").html() +
            "\n" +
            "Avatar : " +
            $("tr#elemento6").children(":nth-child(5)").html()
        );
      });
      $("#change7").click(function () {
        var confirmname1 = confirm("Desea cambiar el Nombre?");
        if (confirmname1 == true) {
          var nameon1 = $("tr#elemento7").children().first().next().html();
          var name1 = prompt("Ingrese el nuevo Nombre");
          $("tr#elemento7").children().first().next().html(name1);
          while (name1 == "") {
            alert("No puede dejar el espacio en blanco..");
            var name1 = prompt("Ingrese el nuevo Nombre");
            $("tr#elemento7").children().first().next().html(name1);
          }
          if (name1 === null) {
            $("tr#elemento7").children().first().next().html(nameon1);
          }
        }

        var confirmemail1 = confirm("Desea cambiar el Email?");
        if (confirmemail1 == true) {
          var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
          var emailon1 = $("tr#elemento7").children(":nth-child(3)").html();

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
            $("tr#elemento7").children(":nth-child(3)").html(emailon1);
          } else {
            $("tr#elemento7").children(":nth-child(3)").html(email1);
          }
        }

        var confirmedad1 = confirm("Desea cambiar la Edad?");
        if (confirmedad1 == true) {
          var edad1 = parseInt(prompt("Ingrese su nueva Edad"));
          $("tr#elemento7").children(":nth-child(4)").html(edad1);
        }
      });
      $("#delete7").click(function () {
        var confirmation1 = confirm("Estas seguro?");
        if (confirmation1 == true) {
          $("tr#elemento7").remove();
        }
      });
      $("#view7").click(function () {
        alert(
          "Id: " +
            $("tr#elemento7").children().first().html() +
            "\n" +
            "Nombre : " +
            $("tr#elemento7").children().first().next().html() +
            "\n" +
            "Email : " +
            $("tr#elemento7").children(":nth-child(3)").html() +
            "\n" +
            "Edad : " +
            $("tr#elemento7").children(":nth-child(4)").html() +
            "\n" +
            "Avatar : " +
            $("tr#elemento7").children(":nth-child(5)").html()
        );
      });
      $("#change8").click(function () {
        var confirmname1 = confirm("Desea cambiar el Nombre?");
        if (confirmname1 == true) {
          var nameon1 = $("tr#elemento8").children().first().next().html();
          var name1 = prompt("Ingrese el nuevo Nombre");
          $("tr#elemento8").children().first().next().html(name1);
          while (name1 == "") {
            alert("No puede dejar el espacio en blanco..");
            var name1 = prompt("Ingrese el nuevo Nombre");
            $("tr#elemento8").children().first().next().html(name1);
          }
          if (name1 === null) {
            $("tr#elemento8").children().first().next().html(nameon1);
          }
        }

        var confirmemail1 = confirm("Desea cambiar el Email?");
        if (confirmemail1 == true) {
          var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
          var emailon1 = $("tr#elemento8").children(":nth-child(3)").html();

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
            $("tr#elemento8").children(":nth-child(3)").html(emailon1);
          } else {
            $("tr#elemento8").children(":nth-child(3)").html(email1);
          }
        }

        var confirmedad1 = confirm("Desea cambiar la Edad?");
        if (confirmedad1 == true) {
          var edad1 = parseInt(prompt("Ingrese su nueva Edad"));
          $("tr#elemento8").children(":nth-child(4)").html(edad1);
        }
      });
      $("#delete8").click(function () {
        var confirmation1 = confirm("Estas seguro?");
        if (confirmation1 == true) {
          $("tr#elemento8").remove();
        }
      });
      $("#view8").click(function () {
        alert(
          "Id: " +
            $("tr#elemento8").children().first().html() +
            "\n" +
            "Nombre : " +
            $("tr#elemento8").children().first().next().html() +
            "\n" +
            "Email : " +
            $("tr#elemento8").children(":nth-child(3)").html() +
            "\n" +
            "Edad : " +
            $("tr#elemento8").children(":nth-child(4)").html() +
            "\n" +
            "Avatar : " +
            $("tr#elemento8").children(":nth-child(5)").html()
        );
      });

      $("#change9").click(function () {
        var confirmname1 = confirm("Desea cambiar el Nombre?");
        if (confirmname1 == true) {
          var nameon1 = $("tr#elemento9").children().first().next().html();
          var name1 = prompt("Ingrese el nuevo Nombre");
          $("tr#elemento9").children().first().next().html(name1);
          while (name1 == "") {
            alert("No puede dejar el espacio en blanco..");
            var name1 = prompt("Ingrese el nuevo Nombre");
            $("tr#elemento9").children().first().next().html(name1);
          }
          if (name1 === null) {
            $("tr#elemento9").children().first().next().html(nameon1);
          }
        }

        var confirmemail1 = confirm("Desea cambiar el Email?");
        if (confirmemail1 == true) {
          var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
          var emailon1 = $("tr#elemento9").children(":nth-child(3)").html();

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
            $("tr#elemento9").children(":nth-child(3)").html(emailon1);
          } else {
            $("tr#elemento9").children(":nth-child(3)").html(email1);
          }
        }

        var confirmedad1 = confirm("Desea cambiar la Edad?");
        if (confirmedad1 == true) {
          var edad1 = parseInt(prompt("Ingrese su nueva Edad"));
          $("tr#elemento9").children(":nth-child(4)").html(edad1);
        }
      });

      $("#delete9").click(function () {
        var confirmation1 = confirm("Estas seguro?");
        if (confirmation1 == true) {
          $("tr#elemento9").remove();
        }
      });
      $("#view9").click(function () {
        alert(
          "Id: " +
            $("tr#elemento9").children().first().html() +
            "\n" +
            "Nombre : " +
            $("tr#elemento9").children().first().next().html() +
            "\n" +
            "Email : " +
            $("tr#elemento9").children(":nth-child(3)").html() +
            "\n" +
            "Edad : " +
            $("tr#elemento9").children(":nth-child(4)").html() +
            "\n" +
            "Avatar : " +
            $("tr#elemento9").children(":nth-child(5)").html()
        );
      });
    }
  );
});
id=10;

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
      "<button id=" +
      '"change' +
      id +
      '"' +
      "class=" +
      '"btn btn-success"' +
      ">" +
      "<i class=" +
      '"fa-solid fa-pen-to-square fa-md"' +
      "></i>" +
      "</button>" +
      "<button id=" +
      '"delete' +
      id +
      '"' +
      "class=" +
      '"btn btn-danger"' +
      ">" +
      "<i class=" +
      '"fa-solid fa-circle-minus fa-md"' +
      "></i>" +
      "</button>" +
      "<button id=" +
      '"view' +
      id +
      '"' +
      "class=" +
      '"btn btn-primary"' +
      ">" +
      "<i class=" +
      '"fa-solid fa-circle-info fa-md"' +
      "></i>" +
      "</button>" +
      "</div>" +
      "</td></tr>"
  );
  id++;
});
