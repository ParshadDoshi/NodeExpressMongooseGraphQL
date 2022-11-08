
var Trainee = require('../model/trainee.model')
module.exports.getTrainees = async (req, res) => {
    try {
        let trainees = await Trainee.find();
        res.send({ status: true, data: trainees })
    }
    catch (error) {
        res.send({ status: false, data: error })
    }
}
module.exports.addTrainee = async (req, res) => {
    try {
        let { name, degree } = req.body;
        let trainee = new Trainee({ name, degree });
        let result = await trainee.save();
        res.send({ status: true, data: 'record is added' })
    }
    catch (error) {
        res.send({ status: false, data: error })
    }

}
module.exports.getTrainee = async (req, res) => {
    try {
        let { id } = req.params;
        let trainee = await Trainee.find({ _id: id })
        res.send({ status: true, data: trainee })
    }
    catch (error) {
        res.send({ status: false, data: error })
    }
}
module.exports.deleteTrainee = async (req, res) => {
    try {
        let { id } = req.params;
        let trainee = await Trainee.deleteOne({ _id: id })
        res.send({ status: true, data: 'record is deleted' })
    }
    catch (error) {
        res.send({ status: false, data: error })
    }
}
module.exports.updateTrainee = async (req, res) => {
    try {
        let { id } = req.params;
        let trainee = await Trainee.findById({ _id: id })
        if (!trainee) {
            res.send({ status: false, data: 'trainee does not exist' })
        }
        let { name, degree } = req.body;
        let newTrainee = { name, degree };
        let result = await Trainee.findOneAndUpdate({ _id: id }, newTrainee);
        res.send({ status: true, data: 'trainee is updated' })
    }
    catch (error) {
        res.send({ status: false, data: error })
    }
}
