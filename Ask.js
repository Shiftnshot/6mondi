console.log("➡ Ask.js loaded !");

db = new PouchDB("questions")


var app = new Vue({
  el: '#selectBranche',
  data: {
    selected: 'Aucune',
    options: [
      { text: '* Langues', disabled: true },
      { text: 'Allemand', disabled: false },
      { text: 'Anglais', disabled: false },
      { text: 'Espagnol', disabled: false },
      { text: 'Français', disabled: false },
      { text: 'Italien', disabled: false },
      { text: '* Sciences', disabled: true },
      { text: 'Informatique (Le meilleur cours du monde)', disabled: false },
      { text: 'Biologie', disabled: false },
      { text: 'Chimie', disabled: false },
      { text: 'IDS', disabled: false },
      { text: 'Mathématiques', disabled: false },
      { text: 'Physique', disabled: false },
      { text: '* Sciences Humaines', disabled: true },
      { text: 'Droit', disabled: false },
      { text: 'Economie', disabled: false },
      { text: 'Géographie', disabled: false },
      { text: 'Histoire', disabled: false },
      { text: 'Philosophie', disabled: false },
      { text: 'Autres Sciences Humaines (OC)', disabled: false },
      { text: '* Arts', disabled: true },
      { text: 'Arts visuels', disabled: false },
      { text: "Histoire de l'art", disabled: false },
      { text: 'Musique', disabled: false },

    ]
  }
})


function submit () {

  f = document.getElementById("questionForm")

  title = f.title.value
  content = f.content.value
  option = f.option.value
  spécialisation = f.spec.value
  year = f.year.value
  date = new Date()
  
  if (title == "" || content == "") {
    alert("Vous ne pouvez paaaaaaaas poser de question vide")
    return false
  }

  var question = {
  "title" : title,
  "content" : content,
  "option" : option,
  "spec" : spécialisation,
  "year" : year,
  "date" : date,
  }

  db.post(question).then(function (q) {
    console.log("Success")
  }).catch(function (err) {
    console.log(err);
  });

  alert("Question posée !")
  window.location = "../index.html"

}
