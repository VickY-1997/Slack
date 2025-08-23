import { generateStreamToken } from "../config/stream.js";

export const getStreamToken = async (req, res) => {
  try {
    const token = generateStreamToken(req.auth().userId);
    res.status(200).json({ token });
  } catch (error) {
    console.log(`error in generating stream token : ${error.message}`);
    res.status(500).json({ Message: "Failed to generate stream token" });
  }
};
