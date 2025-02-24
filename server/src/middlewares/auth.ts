import type { RequestHandler } from "express";

declare global {
  namespace Express {
    interface Request {
      auth?: {
        name: string;
        isAdmin: boolean;
      };
    }
  }
}

const checkIfAdmin: RequestHandler = async (req, res, next) => {
  try {
    req.auth = {
      name: "admin",
      isAdmin: true,
    };

    if (req.auth?.isAdmin === true) {
      next();
    } else {
      res.status(401).send("Pas autorisé");
    }
  } catch (error) {
    next(error);
  }
};

export default { checkIfAdmin };
