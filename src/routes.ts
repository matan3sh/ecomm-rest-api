import { Express, Request, Response } from "express";
import validate from "./middlewares/validateResource";

import { createUserSchema } from "./schema/user.schema";
import { createUserHandler } from "./controllers/user.controller";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.post("/api/users", validate(createUserSchema), createUserHandler);
}

export default routes;
