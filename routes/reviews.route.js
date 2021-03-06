const { Router } = require("express");
const { reviewsController } = require("../controllers/reviews.controller");

const router = Router();

router.post("/", reviewsController.addReviews)
router.get("/:id/reviews", reviewsController.getReviews)

module.exports = router;