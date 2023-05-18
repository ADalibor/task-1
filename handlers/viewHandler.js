const Kurs = require ('../pkg/kurs/kursSchema');

exports.getTest = (req, res) => {
    try {
      res.status(200).render("test", {
        title: "Тест",
      });
    } catch (err) {
      res.status(500).send("Error");
    }
  };