import { Request, Response } from "express";
import { SessionData, Session } from "express-session";

export type Context = {
  req: Request & {session: Session & Partial<SessionData> & {userId?:number}}
  res: Response;
};
