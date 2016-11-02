var button = document.getElementById('counter');

button.onclick = function() {
  
 var request = new XMLHttpRequest();
 request.onreadystatechange = function(){
     if(request.readtState === XMLHttpRequest.DONE) {
         if(request.status ===200) {
             var counter = request.responseText;
             var span = document.getElementById('count');
             span.InnerHTML = counter.toString();
         }
     }
 };
 request.open('GET','http://subhusri.imad.hasura-ap.io/counter',true);
 request.send(null);
};