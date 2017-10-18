
db = new PouchDB("questions")

all = db.allDocs({
  include_docs: true,
  attachments: true
}).then(function (result) {
  console.log(JSON.stringify(result))
	if (result.total_rows == 0) {
		var qs = new Vue({
  		el: '#questions',
  		data: {
  			questions : result.rows,
  			seen : false
  		}
  	})
  	var empty = new Vue({
  		el: '#empty',
  		data: {
  			seen : true
  		}
  	})
	} else {
  	var qs = new Vue({
  		el: '#questions',
  		data: {
  			questions : result.rows,
  			seen : true
  		},
      methods: {
        parseDate : function (date) {
          d = new Date(date)
          days = ['lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche']
          months = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembe','Octobre','Novembre','Décembre']
          return days[d.getDay()-1]+" "+d.getDate()+" "+months[d.getMonth()]+" "+d.getFullYear()+" à "+d.getHours()+":"+d.getMinutes()
        }
      }
  	})
  	var empty = new Vue({
  		el: '#empty',
  		data: {
  			seen : false
  		}
  	})
  }
}).catch(function (err) {
  console.log(err);
});

