window.onload = function() {
  fetch ('https://jsonplaceholder.typicode.com/posts/users'). then( function (response){
    console.log(response);
    document.getElementById('container-1')[0].innerHTML= user.id;
    document.getElementById('container-2')[1].innerHTML= user.name;
    document.getElementById('container-3')[2].innerHTML= user.email;
   
    //console.log( response.json(user));
}).then (function (userID){
            document.getElementById('app').innerHTML = userID.map(user => 
                `<div>
                  <div>Id: ${user.id}</div>
                  <div>Title: ${user.name}</div>
                  <div>Body: ${user.email}</div>
                </div>`
            ).join('') 
});
}
