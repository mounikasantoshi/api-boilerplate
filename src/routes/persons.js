import express from "express";
import Persons from "../models/Persons";

const router = express.Router();

//read
router.get("/", async (req, res) => {
  try {
    const persons = await Persons.find();
    res.json(persons);
  } catch (err) {
    res.json({ message: err });
  }
});

//post
router.post("/", async (req, res) => {
  //   const newperson = {
  //     name: req.body.name,
  //     fathername: req.body.fathername,
  //     age: req.body.age,
  //     Gender: req.body.Gender,
  //   };

  const { firstName, lastName, age, gender } = req.body;

  try {
    const newPerson = new Persons({
      firstName,
      lastName,
      age,
      gender,
    });
    const person1 = await newPerson.save();
    res.json(person1);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
