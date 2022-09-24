$(document).ready(function(){
    $.get(
        "https://my-json-server.typicode.com/alaravena/ldp3101/usuarios",
        function(data){
            $.each(data, function (i, item) {
              $("#content").append(
                  "<tr id="+'"elemento'+ item.id +'"' +"><td>" + item.id +
                  "</td><td>" + item.nombre +
                  "</td><td>" + item.email +
                  "</td><td>" + 
                  "<div class="+'"btn-box"'+">"+
                  "<button class="+'"btn btn-success"'+">"+ "<i class="+'"fa-solid fa-pen-to-square fa-xl"'+"></i>" +"</button>"+
                  "<button id="+  '"delete'+ item.id + '"' + "class="+'"btn btn-danger"'+">"+ "<i class="+'"fa-solid fa-circle-minus fa-xl"'+"></i>" +"</button>"+
                  "<button class="+'"btn btn-primary"'+">"+ "<i class="+'"fa-solid fa-circle-info fa-xl"'+"></i>" +"</button>"+
                  "</div>"
                  + "</td></tr>"
              )
            })
          }
    );
});
$("#delete1").click(function(){
  alert(confirm())
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
