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
  const id = req.params.id;

  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).send({
      message: "Data to update cannot be empty!"
    });
  }

  try {
    // Se a senha estiver vazia (''), remover para não sobrescrever
    if ('password' in req.body && !req.body.password) {
      delete req.body.password;
    }

    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true
    });

    if (!updatedUser) {
      return res.status(404).send({
        message: `User with id=${id} not found.`
      });
    }

    res.send({
      message: "User updated successfully.",
      user: updatedUser
    });
  } catch (err) {
    res.status(500).send({
      message: "Error updating User with id=" + id
    });
  }
};


exports.delete = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await User.findByIdAndRemove(id);
    if (!data) {
      return res.status(404).send({
        message: `Cannot delete User with id=${id}. Maybe User was not found!`
      });
    }

    res.send({ message: "User deleted successfully!" });
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
