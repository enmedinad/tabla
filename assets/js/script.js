$(document).ready(function () {
  $.get(
    "https://my-json-server.typicode.com/alaravena/ldp3101/usuarios",
    function (data) {
      $.each(data, function (i, item) {
        $("#content").append(
          "<tr id=" + '"elemento' + item.id + '"' + 
            "><td>" +  item.id + "</td><td>" +
            item.nombre + "</td><td>" +
            item.email + "</td><td>" + 
            "<div class=" + '"btn-box"' + ">" +
            "<button id=" + '"change' + item.id + '"' + "class=" + '"btn btn-success"' + ">" + "<i class=" +
            '"fa-solid fa-pen-to-square fa-md"' + "></i>" + "</button>" +
            "<button id=" + '"delete' + item.id + '"' + "class=" + '"btn btn-danger"' + ">" + "<i class=" +
            '"fa-solid fa-circle-minus fa-md"' + "></i>" + "</button>" + 
            "<button id=" + '"view' + item.id + '"' + "class=" + '"btn btn-primary"' + ">" +
            "<i class=" + '"fa-solid fa-circle-info fa-md"' + "></i>" + "</button>" +
            "</div>" +
            "</td></tr>"
        );
      });
      $("#change1").click(function () {
        var name1 = prompt("Ingrese el nuevo nombre");
        $("tr#elemento1").children(0).html() = name1; 
      });
      $("#delete1").click(function () {
        var confirmation1 = confirm("Estas seguro?" + '\n' + "El elemento sera eliminado");
        if (confirmation1 == true) {
          $("tr#elemento1").remove();
        }
      });
      $("#view1").click(function(data){
          alert("Id: " + item.id + '\n' +
          "Nombre : " + item.nombre + '\n' +
          "Email : " + item.email + '\n' +
          "Edad : " + item.edad + '\n' + 
          "Avatar : " + item.avatar);      
      });
      

      $("#delete2").click(function () {
        var confirmation1 = confirm("Estas seguro?");
        if (confirmation1 == true) {
          $("tr#elemento2").remove();
        }
      });

      $("#delete3").click(function () {
        var confirmation1 = confirm("Estas seguro?");
        if (confirmation1 == true) {
          $("tr#elemento3").remove();
        }
      });

      $("#delete4").click(function () {
        var confirmation1 = confirm("Estas seguro?");
        if (confirmation1 == true) {
          $("tr#elemento4").remove();
        }
      });

      $("#delete5").click(function () {
        var confirmation1 = confirm("Estas seguro?");
        if (confirmation1 == true) {
          $("tr#elemento5").remove();
        }
      });

      $("#delete6").click(function () {
        var confirmation1 = confirm("Estas seguro?");
        if (confirmation1 == true) {
          $("tr#elemento6").remove();
        }
      });

      $("#delete7").click(function () {
        var confirmation1 = confirm("Estas seguro?");
        if (confirmation1 == true) {
          $("tr#elemento7").remove();
        }
      });

      $("#delete8").click(function () {
        var confirmation1 = confirm("Estas seguro?");
        if (confirmation1 == true) {
          $("tr#elemento8").remove();
        }
      });

      $("#delete9").click(function () {
        var confirmation1 = confirm("Estas seguro?");
        if (confirmation1 == true) {
          $("tr#elemento9").remove();
        }
      });


    }
  );
});

/*
$("#add").click(function(){

  function(data){
    $.push(data, function (i, item) {
      $("#content").append(
          "<tr><td>" + item.id +
          "</td><td>" + item.nombre +
          "</td><td>" + item.email +
          "</td><td>" + 
          "<div class="+'"btn-box"'+">"+
          "<button class="+'"btn btn-success"'+">"+ "<i class="+'"fa-solid fa-pen-to-square fa-xl"'+"></i>" +"</button>"+
          "<button class="+'"btn btn-danger"'+">"+ "<i class="+'"fa-solid fa-circle-minus fa-xl"'+"></i>" +"</button>"+
          "<button class="+'"btn btn-primary"'+">"+ "<i class="+'"fa-solid fa-circle-info fa-xl"'+"></i>" +"</button>"+
          "</div>"
          + "</td></tr>"
      )
    });
  }
});*/
