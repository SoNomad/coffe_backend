/* 
GET /drinks – список всех напитков
GET /drinks/in-stock – список всех напитков, которые есть в наличии
GET /drinks/:id – подробная информация о конкретном напитке
POST /drinks – добавление нового напитка
DELETE /drinks/:id – удаление конкретного напитка
PATCH /drinks/:id – изменение конкретного напитка
*/

const { Router } = require("express");
const { drinkController } = require("../controllers/drinks.controller");
const router = Router();

router.get("/drinks", drinkController.getDrinks);
router.get("/drinks/in-stock", drinkController.getAvaibleDrinks);
router.get("/drinks/:id", drinkController.getDrinksById);
router.post("/drinks", drinkController.addDrink);
router.delete("/drinks/:id", drinkController.deleteDrink);
router.patch("/drinks/:id", drinkController.editDrink);

module.exports = router;
