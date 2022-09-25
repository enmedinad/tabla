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
