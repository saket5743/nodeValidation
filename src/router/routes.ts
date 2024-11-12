import { Router } from 'express';
const { handleGetAllUser, handleCreateUser, handleSingleUserById, handleUpdateUserById, handleDeleteUserById } = require('../controller/user.controller')
const router = Router();

router.route('/').get(handleGetAllUser).post(handleCreateUser)

router.route('/:id').get(handleSingleUserById).put(handleUpdateUserById).delete(handleDeleteUserById)

export default router;