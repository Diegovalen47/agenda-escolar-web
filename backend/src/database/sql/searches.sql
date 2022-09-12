/* How to get all study plans from one student */
/* TODO Mejorar atributos seleccionados */
SELECT
  `studyplan`.`planId`, `studyplan`.`name`, `studyplan`.`requiredCredits`
FROM 
  `student` JOIN `studyplan` 
ON 
  `student`.`studentId` = `studyplan`.`studentId` 
WHERE 
  `student`.`id` = 1007290916;

/* materias de un estudiante */
SELECT
  `Student`.`identification`, `Student`.`name`, `Student`.`lastName`, `Course`.`name`, `Course`.`credits`
FROM 
  `Student` JOIN `Course`
ON 
  `Student`.`studentId` = `Course`.`studentId` 
WHERE 
  `student`.`identification` = 1007290916;

/* Total de creditos plan de estudio, sumando
  por todas las tipologias pertenecientes
  a ese plan de estudio */
SELECT
  SUM(`requiredCredits`) AS `totalCredits` 
FROM
  `Typology` 
WHERE
  `Typology`.`planId` = 1;

/* Obtener materias cursadas en un semestre */
SELECT
  course.name,
  course.credits,
  typology.name
FROM 
  semester JOIN inscription JOIN course JOIN typology
ON 
  inscription.semesterId = semester.semesterId 
  AND
  inscription.courseId = course.courseId 
  AND
  inscription.typologyId = typology.typologyId 
WHERE
  semester.semesterId = 1;

/* Saca nota por parcial sin tener en cuenta el porcentaje del parcial */
SELECT
  `Partial`.`partialId`,
  `Partial`.`name`,
  SUM(`Item`.`weight` * `Item`.`score`) AS `notaPonderada`,
  `Partial`.`weight`
FROM
  `Inscription` JOIN `Partial` JOIN `Item`
ON
  `Partial`.`partialId` = `Item`.`partialId`
  AND
  `Partial`.`inscriptionId` = `Inscription`.`inscriptionId`
WHERE
  `Inscription`.`inscriptionId` = 1
GROUP BY
  `Partial`.`partialId`;

/* Saca la nota final por materia */
SELECT
  `Partials`.`courseId`,
  `Partials`.`name`,
  SUM(`Partials`.`notaPonderada` * `Partials`.`weight`) AS `notaFinal`
FROM (
  SELECT
    `Course`.`courseId`,
    `Course`.`name`,
    SUM(`Item`.`weight` * `Item`.`score`) AS `notaPonderada`,
    `Partial`.`weight`
  FROM
    `Course` JOIN `Inscription` JOIN `Partial` JOIN `Item`
  ON
    `Partial`.`partialId` = `Item`.`partialId`
    AND
    `Partial`.`inscriptionId` = `Inscription`.`inscriptionId`
    AND
    `Course`.`courseId` = `Inscription`.`courseId`
  WHERE
  `Inscription`.`inscriptionId` = 1
  GROUP BY
    `Partial`.`partialId`
) AS `Partials`;