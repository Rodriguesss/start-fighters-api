import { Request, Response } from "express";
import * as battleService from "../services/battleService.js";

interface BattleBody {
  firstUser: string;
  secondUser: string;
}

export async function battle(req: Request, res: Response) {
  const { firstUser, secondUser } = req.body as BattleBody;

  if (!firstUser || !secondUser) {
    return res.sendStatus(422);
  }

  const battleResult = await battleService.battle(firstUser, secondUser);
  res.send(battleResult);
}

export async function getRanking(req: Request, res: Response) {
  const ranking = await battleService.find();
  res.send(ranking);
}
