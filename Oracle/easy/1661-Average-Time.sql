SELECT S.machine_id
     , ROUND(SUM(E.TIMESTAMP - S.TIMESTAMP) / COUNT(S.machine_id), 3) AS processing_time
  FROM (
        SELECT machine_id 
             , process_id
             , activity_type
             , timestamp
          FROM Activity
         WHERE activity_type = 'start'
     )   S
     , (
        SELECT machine_id 
             , process_id
             , activity_type
             , timestamp
          FROM Activity
         WHERE activity_type = 'end'
     )  E
 WHERE S.machine_id  = E.machine_id
   AND S.process_id = E.process_id
 GROUP BY S.machine_id
 ORDER BY S.machine_id