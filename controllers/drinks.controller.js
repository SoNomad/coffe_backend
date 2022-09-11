const Drink = require("../models/Drinks.model");

/*
GET /drinks – список всех напитков
GET /drinks/in-stock – список всех напитков, которые есть в наличии
GET /drinks/:id – подробная информация о конкретном напитке
POST /drinks – добавление нового напитка
DELETE /drinks/:id – удаление конкретного напитка
PATCH /drinks/:id – изменение конкретного напитка */

module.exports.drinkController = {
  getDrinks: async (req, res) => {
    try {
      const drinks = await Drink.find({}, { name: 1, price: 1 });
      res.json(drinks);
    } catch (e) {
      res.json(e);
    }
  },

  getAvaibleDrinks: async (req, res) => {
    try {
      const drink = await Drink.find({ availability: true });
      res.json(drink);
    } catch (e) {
      res.json(e);
    }
  },

  getDrinksById: async (req, res) => {
    try {
      const drinks = await Drink.findById(req.params.id);
      res.json(drinks);
    } catch (e) {
      res.json(e);
    }
  },

  addDrink: async (req, res) => {
    const { name, price, availability, isCofein, size, description } = req.body;
    try {
      const drink = await Drink.create({
        name,
        price,
        availability,
        isCofein,
        size,
        description,
      });
      res.json("Напиток добавлен.");
    } catch (e) {
      res.json(e);
    }
  },

  deleteDrink: async (req, res) => {
    try {
      const delDrink = await Drink.findByIdAndRemove(
        req.params.id,
        (err, delDrink) => {
          if (!err) {
            res.json(delDrink.name + " удален из списка.");
          }
        }
      );
    } catch (e) {
      res.json(e);
    }
  },

  editDrink: async (req, res) => {
    try {
      await Drink.findByIdAndUpdate(req.params.id, req.body);
      res.json(req.body + " > изменения сохранены.");
    } catch (e) {
      res.json(e);
    }
  },
};
