const UserVerification = require("../Models/UserVerification");

const addSampleVerifyImage = async (req, res) => {
  try {
    const imagePath = req.file.filename;
    const gender = req.body.gender;
    console.log(gender);

    const result = await UserVerification.addSampleVerifyImage(
      imagePath,
      gender
    );
    if (result.message) return res.status(201).send(result.message);
  } catch (err) {
    console.log(err);
    return res.status(501).send("Faild to add sample images please try again");
  }
};

const viewSampleVerifyImages = async (req, res) => {
  const gender = req.query.gender;
  try {
    console.log("end point called!");
    console.log(gender);
    const result = await UserVerification.viewSampleVerifyImages(gender);
    console.log(result);
    return res.status(200).json(result);
  } catch (error) {}
};

const addUserVerificationImage = async (req, res) => {
  try {
    const { sampleImageId, username } = req.body;
    const imagePath = req.file.filename;
    const result = await UserVerification.addUserVerificationImage(
      imagePath,
      sampleImageId,
      username
    );
    if (result.message)
      return res.status(201).json({ message: result.message });
    return res.status(400).json({ error: result.err });
  } catch (err) {
    console.log(err);
    return res
      .status(501)
      .json({ error: "Faild to add image please try again!" });
  }
};

const viewUserVerificationImages = async (req, res) => {
  try {
    const result = await UserVerification.viewUserVerificationImages();
    if (result.message)
      return res
        .status(200)
        .json({ message: "verification images", data: result.data });
    return res.status(501).send(result.errror);
  } catch (err) {
    console.log(err);
    return res.status(501).send("Faild to retrieve user verification images!");
  }
};
const validateUser = async (req, res) => {
  try {
    const { status, sampleImageId, username } = req.body;
    const result = await UserVerification.validateUser(
      status,
      username,
      sampleImageId
    );
    if (result.message)
      return res.status(200).json({ message: result.message });
    return res
      .status(501)
      .json({ error: "faild to valideate user please try again!" });
  } catch (err) {
    console.log(err);
    return res
      .status(501)
      .json({ error: "faild to valideate user please try again!" });
  }
};
module.exports = {
  addSampleVerifyImage,
  viewSampleVerifyImages,
  addUserVerificationImage,
  viewUserVerificationImages,
  validateUser,
};
