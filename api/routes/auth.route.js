import express from "express"; // Import express
import { signin, signup , google} from "../controllers/auth.controller.js"; // Import signup and signin functions from auth.controller.js

const router = express.Router(); // Create router

router.post("/signup", signup);
router.post("/signin", signin); 
router.post("/google", google); 

export default router;  // Export router