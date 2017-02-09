CREATE SCHEMA `springapp` ;
CREATE TABLE `springapp`.`users` (
  `idusers` INT NOT NULL,
  `login` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusers`),
  UNIQUE INDEX `login_UNIQUE` (`login` ASC));
