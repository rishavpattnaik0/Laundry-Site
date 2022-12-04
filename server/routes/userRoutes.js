import express from "express"
const router = express.Router()

// import controllers
import {createUser, login,deleteUser,addReviews} from "../controllers/userController.js"

router.route("/createUser").post(createUser);
router.route("/login").post(login);
router.route("/delete").delete(deleteUser);
router.route("/add").post(addReviews);
export default router;