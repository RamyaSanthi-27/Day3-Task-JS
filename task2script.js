var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload=function(){
    
    var data = JSON.parse(request.response);
    console.log(data);

    for(var i=0;i<=data.length;i++)
    {
      console.log(`Flag :${data[i].flag}`);
    }
    
    }