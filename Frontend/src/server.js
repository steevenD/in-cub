
//L'application requiert l'utilisation du module Express.
//La variable express nous permettra d'utiliser les fonctionnalités du module Express.
var express = require('express');

// Nous définissons ici les paramètres du serveur.
var hostname = 'localhost';
var port = 3000;

// La variable mongoose nous permettra d'utiliser les fonctionnalités du module mongoose.
var mongoose = require('mongoose');
// Ces options sont recommandées par mLab pour une connexion à la base
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

//URL de notre base
var urlmongo = "mongodb://steeven:1234steeven@ds145303.mlab.com:45303/in-cub";

// Nous connectons l'API à notre base de données
mongoose.connect(urlmongo, options);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur lors de la connexion'));
db.once('open', function (){
    console.log("Connexion à la base OK");
});

// Nous créons un objet de type Express.
var cors = require('cors');
var app = express();
app.use(cors());

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var startupSchema = mongoose.Schema({
  id: Number,
  name: String,
  businessLine: String,
  legalRepresentativeName: String,
  cofounderNumber: Number,
  description: String,
  address: String
});

var Startup = mongoose.model('Startup', startupSchema);
var myRouter = express.Router();
myRouter.route('/')
.all(function(req,res){
      res.json({message : "Bienvenue sur notre Frugal API ", methode : req.method});
});

// Je vous rappelle notre route (/piscines).
myRouter.route('/startups')
// J'implémente les méthodes GET, PUT, UPDATE et DELETE
// GET
.get(function(req,res){
  // Utilisation de notre schéma Piscine pour interrogation de la base
  Startup.find(function(err, startups){
          if (err){
              res.send(err);
          }
          console.log(res.json(startups));
          res.json(startups);

      });
})
.post(function(req,res){
  // Nous utilisons le schéma Piscine
    var startup = new Startup();
  // Nous récupérons les données reçues pour les ajouter à l'objet Piscine
    startup.nom = req.body.nom;
    startup.adresse = req.body.adresse;
    startup.tel = req.body.tel;
    startup.description = req.body.description;
  //Nous stockons l'objet en base
    startup.save(function(err){
      if(err){
        res.send(err);
      }
      res.send({message : 'Bravo, la startup est maintenant stockée en base de données'});
    })
});


myRouter.route('/startups/:startup_id')
.get(function(req,res){
            Startup.findById(req.params.startup_id, function(err, startup) {
            if (err)
                res.send(err);
            res.json(startup);
        });
})
.put(function(req,res){
            Startup.findById(req.params.startup_id, function(err, startup) {
                if (err){
                    res.send(err);
                }
                        startup.nom = req.body.nom;
                        startup.adresse = req.body.adresse;
                        startup.tel = req.body.tel;
                        startup.description = req.body.description;
                              startup.save(function(err){
                                if(err){
                                  res.send(err);
                                }
                                res.json({message : 'Bravo, mise à jour des données OK'});
                              });
                });
})
.delete(function(req,res){

  Startup.remove({_id: req.params.startup_id}, function(err, startup){
        if (err){
            res.send(err);
        }
        res.json({message:"Bravo, startup supprimée"});
    });

});


app.use(myRouter);
app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port);
});
