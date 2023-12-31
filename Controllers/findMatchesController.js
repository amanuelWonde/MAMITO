const FindMatches = require("../Models/FindMatches");
const findUserMatches = require("../services/matching/findUserMatches");
const Answers = require("../Models/Answers");

const findMatches = async (req, res) => {
  try {
    const { windowId, userName, myAnswers } = req.body;
    const allUserAnswers = await FindMatches.allUserAnswers(windowId);

    const yourMatches = findUserMatches(myAnswers, allUserAnswers);
    await Answers.addAnswers(windowId, userName, myAnswers);

    return res
      .status(200)
      .json({ message: "your matches", matches: yourMatches });
  } catch (err) {
    console.log(err);
    return res.status(501).json({
      error: "Error while matching user please try again",
    });
  }
};
module.exports = { findMatches };
// if a user fails to get a matche in a window why do we save his answers
// {"windowId": 5, "userName":amanuel, "myAnswers":  {
//     questionId: 1,
//     choiceId: 1,
//   },
//   {
//     questionId: 2,
//     choiceId: 2,
//   },
//   {
//     questionId: 3,
//     choiceId: 3,
//   },}