const { User } = require('../models');

module.exports = {
  //-------------------------------------------Admin---------------------------

  tambah: (req, res) => {
    User.tambah(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.json(err));
  },

  update: (req, res) => {
    User.edit(req.body , req.params.id)
      .then(()=> res.json({ msg: 'Update berhasil' }) )
      .catch((err) => res.json(err) )
  },

  retriveById: (req, res) => {
    User.retriveById(req.params.id)
      .then((admin) => res.json(admin))
      .catch((err) => res.json(err));
  },

  hapus: (req, res) => {
    User.destroy({ where: { id: req.params.id } })
      .then(() => res.json({ msg: 'Berhasil hapus' }))
      .catch((err) => res.json(err));
  },

  ubahPassword: (req, res) => {
    User.ubahPass(req.body , req.params.id)
      .then(()=> res.json({ msg: 'Update password berhasil' }) )
      .catch((err) => res.json(err) )
  },

};
