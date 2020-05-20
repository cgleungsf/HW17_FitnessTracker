const router = require('express').Router();

const { getLastWorkout, createWorkout, addExercise, getWorkoutsInRange } = require('./../../controllers/workoutController')

// // /api/workouts/
router.route('/workouts')
  .get(getLastWorkout)
  .post(createWorkout);

// // /api/workouts/:id
router.route('/workouts/:id')
  .put(addExercise);

// // /api/workouts/range
router.route('/workouts/range')
  .get(getWorkoutsInRange);

module.exports = router;
