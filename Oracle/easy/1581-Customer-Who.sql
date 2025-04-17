SELECT V.customer_id
     , COUNT(V.customer_id) AS count_no_trans
  FROM Visits       V
     , Transactions T
 WHERE V.visit_id = T.visit_id(+)
   AND T.transaction_id IS NULL
 GROUP BY V.customer_id
;