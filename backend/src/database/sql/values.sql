/* Ingresar estudiantes */
INSERT INTO
  `student`(`studentId`, `password`, `name`, `lastName`, `email`)
VALUES
  (1007290916, 'unal2022', 'Valentin', 'Osorio', 'dosoriom@unal.edu.co'),
  (1007243312, 'capitanAmerica', 'Ana Maria', 'Torres Ramos', NULL);

/* Ingresar planes de estudio asociados a estudiantes */
INSERT INTO
  `Studyplan`(`planId`, `name`,`approvalScore`, `minimunScore`, `maximumScore`, `studentId`)
VALUES
  (1, 'Ingeniria de Sistemas e Informatica', 3.0, 0.0, 5.0, 1007290916),
  (2, 'Estadistica', 3.0, 0.0, 5.0, 1007290916),
  (3, 'Filosofia', 3.5, 0.0, 5.0, 1007243312);

/* Ingresar materias asociadas a estudiantes */
INSERT INTO
  `Course`(`courseId`, `name`, `credits`, `studentId`)
VALUES
  (1, 'REDES Y TELECOMUNICACIONES I', 3, 1007290916),
  (2, 'Estructuración y evaluación de proyectos de ingeniería', 3, 1007290916),
  (3, 'BASE DE DATOS II', 3, 1007290916),
  (4, 'Desarrollo web', 3, 1007290916),
  (5, 'DINAMICA DE SISTEMAS', 3, 1007290916),
  (6, 'Fundamentos de sistemas de información e inteligencia de negocios', 3, 1007290916),
  (7, 'Fundamentos de proyectos en ingeniería', 3, 1007290916),
  (8, 'INGENIERÍA DE REQUISITOS', 3, 1007290916),
  (9, 'Introducción a la inteligencia artificial', 3, 1007290916),
  (10, 'SISTEMAS OPERATIVOS', 3, 1007290916),
  (11, 'Logica Simbolica', 3, 1007243312),
  (12, 'Teoria del conocimiento', 3, 1007243312);

/* Insertar typologias asociadas a plan de estudios */
INSERT INTO
  `Typology`(`typologyId`, `name`, `requiredCredits`, `planId`)
VALUES
  (1, 'FUNDAMENTACION OBLIGATORIA', 27, 1),
  (2, 'FUNDAMENTACION OPTATIVA', 16 , 1),
  (3, 'DISCIPLINAR OBLIGATORIA', 57, 1),
  (4, 'DISCIPLINAR OPTATIVA', 22, 1),
  (5, 'TRABAJO DE GRADO', 6, 1),
  (6, 'LIBRE ELECCION', 32, 1),
  (7, 'NIVELACION', 20, 2);

/* Isertar semestres asociado a plan de estudio */
INSERT INTO
  `Semester`(`semesterId`, `number`, `year`, `period`, `planId`)
VALUES
  (1, 7, 2022, 1, 1),
  (2, 8, 2022, 2, 1),
  (3, 1, 2022, 1, 3);

/* Insertar inscripciones ascociadas a typologia, materia y semestre */
INSERT INTO
  `Inscription`(`typologyId`, `courseId`,`inscriptionId`, `targetScore`, `semesterId`)
VALUES
  (3, 7, 1, 3.0, 1),
  (3, 8, 2, 4.2, 1),
  (3, 9, 3, 4.3, 1),
  (3, 10, 4, 4.5, 1),
  (4, 3, 5, 4.4, 2),
  (4, 4, 6, 5.0, 2);

INSERT INTO
  `Partial`(`partialId`, `name`, `weight`, `inscriptionId`)
VALUES
  (1, 'FORO 1', 0.18, 1),
  (2, 'ENTREGABE 1', 0.12, 1),
  (3, 'FORO 2', 0.18, 1),
  (4, 'ENTREGABLE 2', 0.12, 1),
  (5, 'ENTREGABLE 3', 0.20, 1),
  (6, 'ENTREGABLE 4', 0.20, 1),
  (7, 'TRABAJO 1 - PL/SQL', 0.25, 5),
  (8, 'TRABAJO 2 - SOLIDITY', 0.25, 5),
  (9, 'TRABAJO 3 - OBJ', 0.25, 5),
  (10, 'TRABAJO 4 - EFICIENCIA', 0.25, 5);

INSERT INTO
  `Item`(`itemId`, `name`, `weight`, `score`, `partialId`)
VALUES
  (1, 'Nota Entregable 3', 0.6, 4.7, 5),
  (2, 'Nota Prototipo Alfa', 0.4, 5.0, 5),
  (3, 'Nota Entregable ', 0.6, 5.0, 6),
  (4, 'Nota Prototipo Beta', 0.4, 5.0, 6),
  (5, 'Nota Foro 1', 1, 5.0, 1),
  (6, 'Nota Entregable 1', 1, 5.0, 2),
  (7, 'Nota Foro 2', 1, 5.0, 3),
  (8, 'Nota Entregable 2', 1, 4.8, 4),
  (9, 'Nota Parte 1', 0.5, NULL, 8),
  (10, 'Nota Parte 2', 0.5, NULL, 8);