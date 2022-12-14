const router = require('express').Router();
const authenticate = require('../middlewares/authenticate');

const api = require('./api');
const {
	login, dashboard, dataUser, tambahUser, editUser, editProfilAdmin, tambahConfig, history, editConfig,
	detailConfig, profilStaff, ubahPassword
} = require('../controllers');


// Pages View
router.get('/', login);
router.get('/dashboard', authenticate.authPage, dashboard);
router.get('/dashboard/profil_admin', authenticate.authPage, editProfilAdmin);
router.get('/dashboard/profil_staff', authenticate.authPage, profilStaff);
router.get('/dashboard/ubah_password', authenticate.authPage, ubahPassword);
router.get('/dashboard/data_user', authenticate.authPage, dataUser);
router.get('/dashboard/tambah_user', authenticate.authPage, tambahUser);
router.get('/dashboard/edit_user/:id', authenticate.authPage, editUser);
router.get('/dashboard/input_config', authenticate.authPage, tambahConfig);
router.get('/dashboard/history', authenticate.authPage, history);
router.get('/dashboard/edit_config/:id', authenticate.authPage, editConfig);
router.get('/dashboard/detail_config/:id', authenticate.authPage, detailConfig);

// api
router.use('/api', api);


module.exports = router;
