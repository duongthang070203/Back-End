const { premiumModel } = require("../models/");

const premiumController = {
  getPosts: async (req, res) => {
    try {
      const dataPremium = await premiumModel.find();
      res.status(200).json(dataPremium);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getPost: async (req, res) => {
    try {
      const premium = await premiumModel.findById(req.params.id);
      res.status(200).json(premium);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  postPremium: async (req, res) => {
    try {
      const newPostPremium = new premiumModel(req.body);
      const premium = await newPostPremium.save();
      res.status(200).json(premium);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deletePost: async (req, res) => {
    try {
      const findPost = await premiumModel.findByIdAndDelete({
        _id: req.params.id,
      });
      if (findPost) {
        res.status(200).json("Remove Success !");
      } else {
        res.status(404).json("Invalid ID !");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  repairPost: async (req, res) => {
    try {
      const newData = {
        package: req.body.package,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
      };
      const findPost = await premiumModel.findByIdAndUpdate(
        { _id: req.params.id },
        newData
      );
      if (findPost) {
        res.status(200).json("Repair Success !");
      } else {
        res.status(404).json("Invalid ID !");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = premiumController;
