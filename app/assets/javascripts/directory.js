console.log('test')

$(document).ready(function() {
  attachListeners();
});

var attachListeners = () => {
  $('a').on('click', function(e) {
     e.preventDefault();
     var id = $(this).data(id);
     // console.log(id.officeid, "boo");
     $.get('/offices/' + id.officeid, function(data){
       // console.log(data);
       fillResults(data);
     })
  })
}


var fillResults = (data) => {
  $('#results').empty()
  $('#results').append("<h3 id='name'>" + data.name + "</h3><h4 id='company'>" + data.company +"</h4>")
}
