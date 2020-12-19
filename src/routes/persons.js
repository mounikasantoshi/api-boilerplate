import express, { response } from "express";
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

//DELETE

// router.delete("/:personsId", async (req, res) => {
//   try {
//     const removedPerson = await Persons.remove({ _id: req.params.personsId });
//     res.json(removedPerson);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

//Delete by id

router.delete("/:personsid", (req, res) => {
  Persons.findByIdAndDelete(req.params.personsid)
    .then(() => res.json("user was deleted"))
    .catch((err) => res.status(400).json("error" + err));
});

//update

// router.patch("/:id", (req,res)=>{
//     try{
//         const updatePerson=await Persons.updateOne({_id:req.params.id},{ $set: {firstName:req.body.firstName,lastName:req.body.lastName,age:req.body.age,gender:req.body.gender
//         }}
//         );
//     res.json(updatePerson);
// }catch(err){
//         res.json({message:err});
//     }
// });

router.patch("/:personId", async (req, res) => {
  try {
    const updatePerson = await Persons.updateOne(
      { _id: req.params.personId },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          age: req.body.age,
          gender: req.body.gender,
        },
      }
    );
    res.json(updatePerson);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
