/* How to get all study plans from one student */
SELECT
  `studyplan`.`planId`,
  `studyplan`.`name`,
  `studyplan`.`requiredCredits`
FROM 
  `student` JOIN `studyplan` 
ON 
  `student`.`studentId` = `studyplan`.`studentId` 
WHERE 
  `student`.`id` = 1007290916;