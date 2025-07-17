const db = require("../models");
const User = db.user;

exports.create = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).send({ message: "All fields are required!" });
  }

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  try {
    const data = await user.save();
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the User."
    });
  }
};

exports.findAll = async (req, res) => {
  console.log("AAAAAAAAAAAAAAAAA")
  try {
    const data = await User.find();
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving users."
    });
  }
};

exports.findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await User.findById(id);
    if (!data) {
      res.status(404).send({ message: "Not found User with id " + id });
    } else {
      res.send(data);
    }
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving User with id=" + id
    });
  }
};

exports.update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update cannot be empty!"
    });
  }

  const id = req.params.id;

  try {
    const data = await User.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
      new: true
    });

    if (!data) {
      res.status(404).send({
        message: `Cannot update User with id=${id}. Maybe User was not found!`
      });
    } else {
      res.send({ message: "User was updated successfully." });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating User with id=" + id
    });
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await User.findByIdAndRemove(id, { useFindAndModify: false });
    if (!data) {
      res.status(404).send({
        message: `Cannot delete User with id=${id}. Maybe User was not found!`
      });
    } else {
      res.send({
        message: "User was deleted successfully!"
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Could not delete User with id=" + id
    });
  }
};

exports.deleteAll = async (req, res) => {
  try {
    const data = await User.deleteMany({});
    res.send({
      message: `${data.deletedCount} Users were deleted successfully!`
    });
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while removing all users."
    });
  }
};
