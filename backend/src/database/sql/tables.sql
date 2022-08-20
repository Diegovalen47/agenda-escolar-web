/* Para ejecutar desde consola */

/* mysql -u user_name -p */

USE AgendaEscolar;

CREATE TABLE `Student`(

  `studentId` INTEGER PRIMARY KEY,
  `password` VARCHAR(300) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `lastName` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) UNIQUE

) ENGINE = InnoDB;

CREATE TABLE `StudyPlan`(

  `planId` INTEGER PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `approvalScore` DECIMAL(2,1) NOT NULL,
  `minimunScore` DECIMAL(2,1) NOT NULL,
  `maximumScore` DECIMAL(2,1) NOT NULL,

  `studentId` INTEGER NOT NULL,

  CONSTRAINT
    FOREIGN KEY (`studentId`)
    REFERENCES `Student`(`studentId`)
    ON DELETE CASCADE
    ON UPDATE CASCADE

) ENGINE = InnoDB;

CREATE TABLE `Course`(

  `courseId` INTEGER PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `credits` INTEGER NOT NULL,

  `studentId` INTEGER NOT NULL,

  CONSTRAINT
    FOREIGN KEY (`studentId`)
    REFERENCES `Student`(`studentId`)
    ON DELETE CASCADE
    ON UPDATE CASCADE

) ENGINE = InnoDB;

CREATE TABLE `Typology`(

  `typologyId` INTEGER PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL,
  `requiredCredits` INTEGER NOT NULL,

  `planId` INTEGER NOT NULL,

  CONSTRAINT
    FOREIGN KEY (`planId`)
    REFERENCES `StudyPlan`(`planId`)
    ON DELETE CASCADE
    ON UPDATE CASCADE

) ENGINE = InnoDB;

CREATE TABLE `Semester`(

  `semesterId` INTEGER PRIMARY KEY,
  `number` INTEGER NOT NULL,
  `year` INTEGER NOT NULL,
  `period` INTEGER NOT NULL,

  `planId` INTEGER NOT NULL,

  CONSTRAINT
    FOREIGN KEY (`planId`)
    REFERENCES `StudyPlan`(`planId`)
    ON DELETE CASCADE
    ON UPDATE CASCADE

) ENGINE = InnoDB;

CREATE TABLE `Inscription`(

  `typologyId` INTEGER NOT NULL,
  `courseId` INTEGER NOT NULL,
  `inscriptionId` INTEGER UNIQUE NOT NULL,
  `targetScore` DECIMAL(2,1),

  `semesterId` INTEGER NOT NULL,

  PRIMARY KEY (`typologyId`, `courseId`),

  CONSTRAINT
    FOREIGN KEY (`semesterId`)
    REFERENCES `Semester`(`semesterId`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT
    FOREIGN KEY (`typologyId`)
    REFERENCES `Typology`(`typologyId`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT
    FOREIGN KEY (`courseId`)
    REFERENCES `Course`(`courseId`)
    ON DELETE CASCADE
    ON UPDATE CASCADE

) ENGINE = InnoDB;

CREATE TABLE `Partial`(

  `partialId` INTEGER PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `weight` DECIMAL(4, 3) NOT NULL,

  `inscriptionId` INTEGER NOT NULL,

  CONSTRAINT zeroToOne 
    CHECK(`weight` >= 0 AND `weight` <= 1),

  CONSTRAINT
    FOREIGN KEY (`inscriptionId`)
    REFERENCES `Inscription`(`inscriptionId`)
    ON DELETE CASCADE
    ON UPDATE CASCADE

) ENGINE = InnoDB;

CREATE TABLE `Item`(

  `itemId` INTEGER PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `weight` DECIMAL(4, 3) NOT NULL,
  `score` DECIMAL(2, 1),

  `partialId` INTEGER NOT NULL,

  CONSTRAINT zeroToOne 
    CHECK(`weight` >= 0 AND `weight` <= 1),

  CONSTRAINT
    FOREIGN KEY (`partialId`)
    REFERENCES `Partial`(`partialId`)
    ON DELETE CASCADE
    ON UPDATE CASCADE

) ENGINE = InnoDB;