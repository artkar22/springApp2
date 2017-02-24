CREATE SCHEMA `Springapp` ;
CREATE TABLE `Springapp`.`User` (
  `userId` INT NOT NULL,
  `login` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `roles` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE INDEX `login_UNIQUE` (`login` ASC));
