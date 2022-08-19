/* Ingresar estudiantes */
INSERT INTO
  `student`(`studentId`, `password`, `name`, `lastName`, `email`)
VALUES
  (1007290916, 'unal2022', 'Valentin', 'Osorio', 'dosoriom@unal.edu.co'),
  (1007243312, 'capitanAmerica', 'Ana Maria', 'Torres Ramos', NULL);

/* Ingresar planes de estudio asociados a estudiantes */
INSERT INTO
  `Studyplan`(`name`, `requiredCredits`,`studentId`)
VALUES
  ('Ingeniria de Sistemas e Informatica', 160, 1),
  ('Estadistica', 149, 1),
  ('Filosofia', 160, 2)