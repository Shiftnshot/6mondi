console.log("Register Script loaded !")

function createUser () {

	db = new PouchDB("accounts")

	db.allDocs({
  	include_docs: true,
  	attachments: true
	}).then(function (result) {
  	var cache = result.rows
  	
  	
  // ### USER NAME ###

  userName = document.getElementById("Accounts").username.value
  if (userName == "") {
    alert("Nom d'utilisateur vide !")
    return
  }
  for (var i = 0; i < cache.length; i++) {
    console.log(cache[i].doc.username)
    if (cache[i].doc.username == userName) {
      alert("Ce nom d'utilisateur est déjà pris !")
      return
    }
  }

  // ### PASSWORD ###

  pass1 = document.getElementById("Accounts").password.value
  pass2 = document.getElementById("Accounts").pPassword.value
  if ( pass1 != pass2) {
    alert("Les mots de passes de correspondent pas !")
    return
  } else {
    if (pass1 == "") {
      alert("Mot de passe vide !")
      return
    } else {
      userPass = pass1
    }
  }


  var userDict = {
    "username" : userName,
    "password" : userPass,
  }
  

  db.post(userDict).then(function (q) {
    console.log("Success")
  }).catch(function (err) {
    console.log(err);
  });

  alert("Compte créé !")

  window.location = '../index.html'
  
	}).catch(function (err) {
  	console.log(err);
	});

}
