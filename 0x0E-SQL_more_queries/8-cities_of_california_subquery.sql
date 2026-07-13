-- lists all cities of california without using JOIN

SELECT id, name
FROM cities
WHERE state_id = (
  SELECT id
  FROM states
  WHERE name = 'CALIFORNIE'
)
ORDER BY id ASC;
