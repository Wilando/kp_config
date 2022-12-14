const router = require('express').Router();
const authenticate = require('../middlewares/authenticate');

const { auth, user, config }  = require('../controllers');

// Auth
router.post('/login', auth.login);
router.get('/whoami', authenticate.authApi, auth.whoami);
router.get('/logout', authenticate.authApi, auth.logout);

//user 
router.post('/tambah_user', authenticate.authApi, user.tambah);
router.put('/edit_user/:id', authenticate.authApi, user.update);
router.put('/ubah_password/:id', authenticate.authApi, user.ubahPassword);
router.delete('/delete_user/:id', authenticate.authApi, user.hapus);

//config
router.post('/tambah_config', authenticate.authApi, config.tambah);
router.put('/edit_config/:id', authenticate.authApi, config.ubah);
router.delete('/delete_config/:id', authenticate.authApi, config.hapus);
router.get('/download_config/:id', authenticate.authApi, config.download_config);

module.exports = router;
