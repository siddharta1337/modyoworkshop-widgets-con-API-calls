(function(){
fetch("https://randomuser.me/api/?results={{ vars.results-number }}")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var selector = document.querySelector("#mi-lista");
    selector.appendChild(listaUsuarios(data.results));
    console.log(data);
  })
  .catch(function (err) {
    console.warn("oh oh, tenemos un problema.", err);
  });

function listaUsuarios(usuarios) {
  let ul = document.createElement('div'); //("ul");
	ul.classList.add('row' );

  usuarios.forEach((element) => {
    let li = document.createElement("div");
		li.classList.add('col-12' , 'col-md-4');
		
		
		li.innerHTML = `${item(element)}`;
    ul.appendChild(li);
  });

  return ul;
}

function item(valor) {
	
	
	return  ` 
		<div class="card border rounded overflow-hidden card_icon">
			<figure class="m-0 pb-0 card-body justify-content-start d-flex">
				<div >
					 <img src=" ${valor.picture.large}" class="bg-secondary rounded-circle text-white justify-content-center p-3" />
				</div>
			</figure>
			<figcaption class="card-body">
				<h3 class="h5 card-title"> ${valor.name.first}  ${valor.name.last} </h3>
				<p class="card-text">Greetings from ${valor.location.city} , ${valor.location.country} .</p>
				<a href="#" class="btn btn-primary"> Call +1 ${valor.cell}</a>
			</figcaption>
		</div>
	`;
	 
  //return `<li>  ${valor.name.first} </li>`;
}

})();
