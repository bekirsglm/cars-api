const express = require("express");
const {
  getAllCars,
  updateCar,
  deleteCar,
  createCar,
  getCar,
} = require("./controllers");
const { logger } = require("./middleware");
const idControl = require("./middleware/idControl");

//* kurulum

const app = express();
const PORT = 3000;

//* middleware (arayazılım)
app.use(logger);

//* isteklerin header body param bölmlerini işleyen middleware
app.use(express.json());

//* . yöntem route/endpointleri  tanımlama
// app.get("/api/v1/cars", getAllCars)
// app.post("/api/v1/cars",createCar)

// app.get("/api/v1/cars/:id", getCar)
// app.patch("/api/v1/cars/:id", updateCar)
// app.delete("/api/v1/cars/:id", deleteCar)

//* 2. yöntem endpointleri tanımlama
app.route("/api/v1/cars").get(getAllCars).post(createCar);

//*  istedğin parametresi ile gelen id geçerli mi kontrol eden middleware


app.route("/api/v1/cars/:id").get(idControl, getCar).patch(idControl,updateCar).delete(idControl,deleteCar);

//* dinlenecek portu belirleme
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunu dinlemeye başladı`);
});
