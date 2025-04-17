SELECT U.unique_id
     , E.name
  FROM Employees    E
     , EmployeeUNI  U
 WHERE E.id = U.id(+)
;