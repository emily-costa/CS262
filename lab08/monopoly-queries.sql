-- Emily Costa
-- 10-23-2020
-- CS 262 Lab 08

-- Experxie 8.1
-------------------------------------------------
-- A
SELECT *
  FROM Game
  ORDER BY time DESC
  ;

-- B
SELECT *
  FROM Game
  WHERE time >= CURDATE(DAYOFYEAR()) - 7
  ;

-- C
SELECT *
  FROM Player
  WHERE name IS NOT NULL
  ;

-- D
SELECT playerID
  FROM PlayerGame
  WHERE score > 2000
  ;

-- E
SELECT *
  FROM Player
  WHERE email LIKE '%gmail%'
  ;

-- Exercise 8.2
-------------------------------------------------
-- A
SELECT Game.score
  FROM Player, PlayerGame
  WHERE Player.name = "The King" AND Player.ID = PlayerGame.playerID
  ORDER BY Game.score DESC
  ;

-- B
SELECT Player.name
  FROM Game, Player, PlayerGame
  WHERE Game.time = "2006-06-28 13:20:00" AND Game.ID = PlayerGame.gameID
    AND PlayerGame.playerID = Player.ID
  ORDER BY Game.score DESC
  LIMIT 1
  ;

-- C
-- p1 > p2 ensures that no names are repeated

-- D
-- You may want to have a self joining table when you need to compare/access data from 
-- the same table but different rows 


