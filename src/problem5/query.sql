select b.address, sum(b.amount * CASE b.denom
                    WHEN 'usdc'  THEN 0.000001
                    WHEN 'swth'  THEN 0.00000005
                    WHEN 'tmz'   THEN 0.003
                END) AS wallet
from balances b inner join trades t
on b.address = t.address
where wallet >= 500
group by b.address