const { Workout } = require('../models');

module.exports = {
  getLastWorkout: async (req, res) => {
    try {
      const workouts = await Workout.find();
      // console.log(workouts);
      if (!workouts) {
        return res.status(404).json({ error: 'No workouts found' });
      }
      return res.status(200).json(workouts);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  createWorkout: async (req, res) => {
    const newWorkout = await new Workout();
    if (!newWorkout) {
      return res.status(400).json({ error: 'You must provide an exercise' });
    }
    newWorkout.save();
    // console.log(newWorkout);
    try {
      return res.status(200).json(newWorkout);
    } catch (e) {
      return res.status(403).json(e);
    }
  },
  addExercise: async (req, res) => {
    // console.log(req.params);
    const { id } = req.params;
    // console.log(req.body);
    const { type, name, duration, distance, weight, reps, sets } = req.body;
    try {
      const newExercise = await Workout.findByIdAndUpdate(id, { $push: { exercises: req.body } }, { new: true });
      return res.status(200).json(newExercise);
    } catch (e) {
      return res.status(403).json(e);
    }
  },

  getWorkoutsInRange: async (req, res) => {
    try {
      const allWorkouts = await Workout.find({});
      // console.log(allWorkouts);
      if (!allWorkouts) {
        return res.status(400).json({ error: 'There are no workouts saved' });
      }
      return res.status(200).json(allWorkouts);
    } catch (e) {
      return res.status(403).json(e);
    }
  },
}