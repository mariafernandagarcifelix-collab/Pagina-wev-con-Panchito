import { TOKE_SECRET } from "../config.js";
import jwt from "jsonwebtoken";
function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKE_SECRET,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}
export { createAccessToken };
