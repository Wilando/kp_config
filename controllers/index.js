const { User, Config } = require('../models');

const base_url = "http://localhost:8000"
const profilUser = (req, res) => {
  
  const userData = {
    id: req.user.id,
    email: req.user.email,
    nama: req.user.nama,
    divisi: req.user.divisi,
    jabatan: req.user.jabatan,
    tahun_masuk: req.user.tahun_masuk,
    
  }

  return userData;
}


module.exports = {

  login: (req, res) => res.render('pages/login'),
  dashboard: (req, res) => res.render( 'pages/dashboard', { user: profilUser(req,res), baseUrl: base_url } ),
  dataUser: (req, res) => {
    User.findAll({where: {jabatan: "Staff"} ,
      attributes: ['id', 'nama', 'email', 'divisi', 'jabatan', 'tahun_masuk'], order: [["id", "DESC"]] })
     .then((users)=>{
      return res.render('pages/data_user', {user: profilUser(req,res), baseUrl: base_url, listUsers: users })  
     }) 
  },
  tambahUser: (req, res) => res.render( 'pages/tambah_user', { user: profilUser(req,res), baseUrl: base_url } ),
  editUser: (req, res) => {
    User.retriveById(req.params.id)
     .then((user)=>{
      return res.render('pages/edit_user', {user: profilUser(req,res), baseUrl: base_url, userEdit: user })  
     }) 
  },
  editProfilAdmin: (req, res) => {
    return res.render('pages/edit_profil_admin', {user: profilUser(req,res), baseUrl: base_url })  
  },
  profilStaff: (req, res) => {
    return res.render('pages/profil_staff', {user: profilUser(req,res), baseUrl: base_url })  
  },
  ubahPassword: (req, res) => {
    return res.render('pages/ubah_password', {user: profilUser(req,res), baseUrl: base_url })  
  },
  tambahConfig: (req, res) => {
    return res.render('pages/input_config', {user: profilUser(req,res), baseUrl: base_url })  
  },
  history: (req, res) => {
    if (req.user.jabatan === "Admin") {
      Config.findAll({order: [["id", "DESC"]] })
      .then((configs)=>{
        User.findAll({ attributes: ['id', 'nama']})
        .then((users)=>{
          return res.render('pages/history', {user: profilUser(req,res), configs: configs, baseUrl: base_url,
              users: users
           })
        })
      })
    }
    if (req.user.jabatan === "Staff") {
      Config.findAll({where: { id_opearator: req.user.id  }, order: [["id", "DESC"]] })
      .then((configs)=>{
        return res.render('pages/history', {user: profilUser(req,res), configs: configs, baseUrl: base_url })
      })
    }
     
  },
  editConfig: (req, res) => {
    Config.findOne({where: { id: req.params.id  }})
     .then((config)=>{
      return res.render('pages/edit_config', {user: profilUser(req,res), baseUrl: base_url, configEdit: config })  
     }) 
  },

  detailConfig: (req, res) => {
    Config.findOne({where: { id: req.params.id  }})
     .then((config)=>{
      return res.render('pages/detail_config', {user: profilUser(req,res), baseUrl: base_url, config: config })  
     }) 
  },

  user: require('./user'),
  auth: require('./auth'),
  config: require('./config'),
};
