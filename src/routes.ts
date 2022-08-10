import { Express, Request, Response } from "express";
import validate from "./middlewares/validateResource";
import requireUser from "./middlewares/requireUser";

import { createUserSchema } from "./schema/user.schema";
import { createUserHandler } from "./controllers/user.controller";

import { createSessionSchema } from "./schema/session.schema";
import {
  createUserSessionHandler,
  getUserSessionsHandler,
} from "./controllers/session.controller";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.post("/api/users", validate(createUserSchema), createUserHandler);

  app.post(
    "/api/sessions",
    validate(createSessionSchema),
    createUserSessionHandler
  );

  app.get("/api/sessions", requireUser, getUserSessionsHandler);
}

export default routes;
