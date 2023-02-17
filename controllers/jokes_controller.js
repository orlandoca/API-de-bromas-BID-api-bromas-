const Jokes = require("../models/jokes_model");

module.exports.findAllJokes = (req, res) => {
  Jokes.find()
    .then((allJokers) => res.json({ jokers: allJokers }))
    .catch((err) =>
      res.json({ message: "no se trajo los chistes", error: err })
    );
};
//trae el id
module.exports.findOneSingleJoker = (req, res) => {
  Jokes.findOne({ _id: req.params.id })
    .then((OneSingleJoker) => res.json({ jokes: OneSingleJoker }))
    .catch((err) => res.json({ message: "no se trajo el id", error: err }));
};

//jokes random
module.exports.findRandomSingleJoker = (req, res) => {
  Jokes.find()
    .then((allJokers) => {
      if (allJokers.length === 0) {
        return res.json({ message: "no hay chistes creados" });
      }
      const max = allJokers.length - 1;
      const min = 0;

      const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
      return res.json(allJokers[randomNumber]);
    })
    .catch((err) =>
      res.json({ message: "no se trajo chistes random,", error: err })
    );
};

//crea un nuevo jokes
module.exports.createNewJoker = (req, res) => {
  Jokes.create(req.body)
    .then((newlyCreateJoker) => res.json({ jokes: newlyCreateJoker }))
    .catch((err) => res.json({ message: "joker no se ha creado", error: err }));
};

//actuliza un jokes
module.exports.updateExistingJokes = (req, res) => {
  Jokes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedJokes) => res.json({ jokes: updatedJokes }))
    .catch((err) => res.json({ message: "no se ha actualizado el chiste" }));
};

//elimina un jokes
module.exports.deleteExistingJokes = (req, res) => {
  Jokes.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) =>
      res.json({ message: "se ha eliminado el chiste", error: err })
    );
};
