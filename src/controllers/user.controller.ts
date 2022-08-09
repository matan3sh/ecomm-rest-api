import { Request, Response } from "express";
import { omit } from "lodash";
import logger from "../utils/logger";

import { CreateUserInput } from "../schema/user.schema";
import { createUser } from "../services/user.service";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    return res.send(omit(user.toJSON(), ["password"]));
  } catch (error: any) {
    logger.error(error);
    return res.status(409).send(error.message);
  }
}
