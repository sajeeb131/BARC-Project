const Quiz = require('../models/quiz-model')

exports.getQuizItems = async(req, res) =>{
    console.log('inside quiz controller')
    try{
        const quiz = await Quiz.find({});

        if (quiz.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No Quiz found",
                count: 0,
                data: []
            });
        }
        return res.status(200).json({
            success: true,
            message: "Quiz fetch successful.",
            count: quiz.length,
            data: quiz

        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Internal server error while fetching quiz items."
        })
    }
}