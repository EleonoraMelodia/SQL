SELECT *
FROM tested
WHERE survived = 1 AND sex = 'female' AND age > 30;

//
SELECT item
FROM tested
WHERE survived = 1 AND age = (SELECT MAX(age) FROM tested WHERE survived = 1);

//
SELECT *
FROM tested
WHERE embarked = 'C' AND fare < 50 AND fare > 20;

//
SELECT COUNT(*) AS "Number of survivors"
FROM tested
WHERE survived = 1;

//
SELECT *
FROM tested
WHERE embarked = 'C' AND fare > 75;



