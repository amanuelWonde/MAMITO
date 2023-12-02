const findUserMatches = require("../services/matching/findUserMatches");

const myAnswers = [
  {
    questionId: 1,
    choiceId: 1,
  },
  {
    questionId: 2,
    choiceId: 2,
  },
  {
    questionId: 3,
    choiceId: 3,
  },
  {
    questionId: 4,
    choiceId: 4,
  },
  {
    questionId: 5,
    choiceId: 5,
  },
];

const otherAnswer = [
  {
    user_id: 1,
    question_id: 1,
    choice_id: 1,
    window_id: 101,
    value: 6,
  },
  {
    user_id: 1,
    question_id: 2,
    choice_id: 2,
    window_id: 101,
    value: 7,
  },
  {
    user_id: 1,
    question_id: 3,
    choice_id: 4,
    window_id: 101,
    value: 4,
  },
  {
    user_id: 1,
    question_id: 4,
    choice_id: 1,
    window_id: 101,
    value: 6.5,
  },
  {
    user_id: 1,
    question_id: 5,
    choice_id: 2,
    window_id: 101,
    value: 7,
  },
  {
    user_id: 2,
    question_id: 1,
    window_id: 101,
    choice_id: 1,
    value: 7,
  },
  {
    user_id: 2,
    question_id: 2,
    window_id: 101,
    choice_id: 2,
    value: 6,
  },
  {
    user_id: 2,
    question_id: 3,
    window_id: 101,
    choice_id: 4,
    value: 5,
  },
  {
    user_id: 2,
    question_id: 4,
    window_id: 101,
    choice_id: 1,
    value: 8,
  },
  {
    user_id: 2,
    question_id: 5,
    window_id: 101,
    choice_id: 2,
    value: 9,
  },
  {
    user_id: 3,
    question_id: 1,
    window_id: 101,
    choice_id: 1,
    value: 5,
  },
  {
    user_id: 3,
    question_id: 2,
    window_id: 101,
    choice_id: 2,
    value: 6.5,
  },
  {
    user_id: 3,
    question_id: 3,
    window_id: 101,
    choice_id: 4,
    value: 7,
  },
  {
    user_id: 3,
    question_id: 4,
    window_id: 101,
    choice_id: 1,
    value: 4,
  },
  {
    user_id: 3,
    question_id: 5,
    window_id: 101,
    choice_id: 2,
    value: 8,
  },
  {
    user_id: 4,
    question_id: 1,
    window_id: 101,
    choice_id: 1,
    value: 6,
  },
  {
    user_id: 4,
    question_id: 2,
    window_id: 101,
    choice_id: 2,
    value: 7.5,
  },
  {
    user_id: 4,
    question_id: 3,
    window_id: 101,
    choice_id: 4,
    value: 6,
  },
  {
    user_id: 4,
    question_id: 4,
    window_id: 101,
    choice_id: 1,
    value: 7,
  },
  {
    user_id: 4,
    question_id: 5,
    window_id: 101,
    choice_id: 2,
    value: 8.5,
  },
  {
    user_id: 5,
    question_id: 1,
    choice_id: 1,
    window_id: 101,
    value: 8,
  },
  {
    user_id: 5,
    choice_id: 2,
    question_id: 2,
    window_id: 101,
    value: 6,
  },
  {
    user_id: 5,
    question_id: 3,
    window_id: 101,
    choice_id: 4,
    value: 7,
  },
  {
    user_id: 5,
    question_id: 4,
    window_id: 101,
    choice_id: 1,
    value: 8,
  },
  {
    user_id: 5,
    question_id: 5,
    choice_id: 2,
    window_id: 101,
    value: 9,
  },
];

const yourMatches = findUserMatches(myAnswers, otherAnswer);
console.log(yourMatches);