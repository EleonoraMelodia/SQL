SELECT * FROM tested WHERE survived = 1 AND sex = 'female' AND age > 30;
//
SELECT item FROM tested WHERE survived = 1 AND age = (SELECT MAX(age) FROM tested);
//
SELECT * FROM tested WHERE embarked = 'C' AND ticket < 50 AND ticket > 20;
//
SELECT COUNT(*)  AS "Number of survivors"
FROM tested
WHERE survived = 1;
//
SELECT *
FROM tested
WHERE embarked = 'C' AND ticket > 75;


