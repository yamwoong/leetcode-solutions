SELECT W.id
  FROM Weather  W
     , (
        SELECT id
             , LAG(recordDate) OVER(ORDER BY recordDate) + 1 AS recordDate   
             , LAG(temperature) OVER (ORDER BY recordDate)   AS temperature
          FROM Weather
      )         E
 WHERE W.id = E.id
   AND W.temperature > E.temperature
   AND W.recordDate = E.recordDate
 ORDER BY W.recordDate
;

