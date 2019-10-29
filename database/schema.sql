-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Products'
--
-- ---
USE fec;

DROP TABLE IF EXISTS `Products`;

CREATE TABLE `Products` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `status` VARCHAR(255) NULL DEFAULT NULL,
  `id_Categories` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Categories'
--
-- ---

DROP TABLE IF EXISTS `Categories`;

CREATE TABLE `Categories` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Searches'
--
-- ---

DROP TABLE IF EXISTS `Searches`;

CREATE TABLE `Searches` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `datetime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `Products` ADD FOREIGN KEY (id_Categories) REFERENCES `Categories` (`id`);
ALTER TABLE `Categories` ADD unique index(name);
ALTER TABLE `Products` ADD unique index(name);




-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Products` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Categories` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Searches` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Products` (`id`,`name`,`status`,`id_Categories`) VALUES
-- ('','','','');
-- INSERT INTO `Categories` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `Searches` (`id`,`name`,`datetime`) VALUES
-- ('','','');