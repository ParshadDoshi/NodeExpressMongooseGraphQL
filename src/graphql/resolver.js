var Trainee = require("../mongoDB/model/trainee.model");
const { ObjectId } = require('mongodb')
module.exports = {
    getAllTrainees: async () => {
        try {
            const trainees = await Trainee.find()
            return trainees;
        } catch (error) {
            throw error.message
        }
    },
    createTrainee: async args => {
        try {
            const { name, degree } = args.trainee
            const trainee = new Trainee({ name, degree })
            const newTrainee = await trainee.save()
            return newTrainee
        } catch (error) {
            throw error.message
        }
    },
    deleteTrainee: async (_id) => {
        try {
            let trainee = await Trainee.deleteOne({ _id })
            return 'trainee is deleted ' + JSON.stringify(trainee);
        }
        catch (error) {
            return error.message;
        }
    },
    updateTrainee: async (args) => {
        try {
            //let _id = new ObjectId(args._id);

            let trainee = await Trainee.findById({ _id: args._id })
            if (!trainee) {
                return 'trainee does not exist';
            }
            const { name, degree } = args.trainee
            const updatedTrainee = { name, degree }
            let result = await Trainee.findOneAndUpdate({ _id: args._id }, updatedTrainee);
            return 'trainee is updated'
        }
        catch (error) {
            return 'Update Error' + error.message
        }
    }
}