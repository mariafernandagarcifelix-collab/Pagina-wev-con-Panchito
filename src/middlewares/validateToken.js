import jwt from "jsonwebtoken";
import { TOKE_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
  //console.log("Validar token...");
  const {token} = req.cookies;
  if(!token) return res.status(401).json({ message: "Acceso denegado" });
  jwt.verify(token, TOKE_SECRET, (err, user) => {
    if(err) return res.status(403).json({ message: "Token inválido" });
    console.log("Usuario verificado:", user);
    req.user = user;
  });
  next();
};
