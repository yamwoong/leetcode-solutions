SELECT E.name  
     , B.bonus
  FROM EMPLOYEE     E
     , BONUS        B
 WHERE E.empId = B.empId(+)
   AND (B.bonus < 1000 OR B.bonus IS NULL)
;