type Fighter = {
  id: number;
  username: string;
  wins: number;
  losses: number;
  draws: number;
}

type IdFighter = {
  id: number;
}

type ColumnFighter =
  | "wins"
  | "losses"
  | "draws";

type BattleResult = {
  winner: string;
  loser: string;
  draw: boolean;
}

export { Fighter, IdFighter, ColumnFighter, BattleResult };