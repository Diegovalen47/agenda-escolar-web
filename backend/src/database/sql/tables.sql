/* Para ejecutar desde consola */

/* mysql -u user_name -p */

USE AgendaEscolar;

CREATE TABLE `Student`(
  `studentId` INTEGER AUTO_INCREMENT PRIMARY KEY,
  `id` INTEGER UNIQUE NOT NULL,
  `password` VARCHAR(300) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `lastName` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) UNIQUE
) ENGINE = InnoDB;

CREATE TABLE `StudyPlan`(
  `planId` INTEGER AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL,
  `requiredCredits` INTEGER NOT NULL,
  `studentId` INTEGER NOT NULL,

  CONSTRAINT
    FOREIGN KEY(`studentId`)
    REFERENCES `Student`(`studentId`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;

CREATE TABLE `Course`(
  `courseId` INTEGER AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL,
  `credits` INTEGER NOT NULL,
  `studentId` INTEGER NOT NULL,

  CONSTRAINT
    FOREIGN KEY (`studentId`)
    REFERENCES `Student`(`studentId`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;