// Que faut-il faire ?
// Rien pour l'instant je gère ahaha
console.log("➡ Index.js loaded !");


function connect () {

	db = new PouchDB("accounts")

	db.allDocs({
  	include_docs: true,
  	attachments: true
	}).then(function (result) {
  	var cache = result.rows
  	
  	
  	name = document.getElementById('accountForm').username.value
  pass = document.getElementById('accountForm').password.value

  for (var i = 0; i < cache.length; i++) {
    if (cache[i].doc.username == name && cache[i].doc.password == pass) {
      document.getElementById("accountButtons").style = "display:none;"
      alert("Connecté ! (Coming soon ...)")
    } else {
      alert("Nom d'utilisateur ou mot de passe invalide !")
    	}
  	}
  	
  	
	}).catch(function (err) {
  	console.log(err);
	});

  
}
