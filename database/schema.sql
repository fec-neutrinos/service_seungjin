-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Products'
--
-- ---
DROP DATABASE IF EXISTS `fec`;
CREATE DATABASE `fec`;
USE fec;

DROP TABLE IF EXISTS `Products`;

CREATE TABLE `Products` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
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

-- ALTER TABLE `Products` ADD FOREIGN KEY (id_Categories) REFERENCES `Categories` (`id`);
-- ALTER TABLE `Categories` ADD unique index(name);
-- ALTER TABLE `Products` ADD unique index(name);




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

INSERT INTO `Products` (`name`)
VALUES
  ('DHP Emily Linen Chaise Lounger'),
  ('BSN Micronized Creatine Monohydrate Powder'),
  ('Seiko 5 Sports Automatic Watch'),
  ('adidas Mens Originals Trefoil Plus Precurve'),
  ('Khaki Field Analog Display Swiss Automatic Silver Watch'),
  ('Sunny Pro Polarized Sunglasses Vintage'),
  ('SPRI Xertube Resistance Band Door Anchor Attachments'),
  ('Samsung Galaxy Watch Active2'),
  ('sixthreezero Around The Block Beach Cruiser Bicycle'),
  ('Defender III Small Duffel'),
  ('Bike for the Times'),
  ('Bike of the People'),
  ('Bike Smack'),
  ('Bike Kaboom'),
  ('The Bike Helper'),
  ('Organic Red Wine'),
  ('Red Wine Tape'),
  ('Red Wine Apparel'),
  ('Echo Dot'),
  ('Echo Show 5'),
  ('Alien Slime Lab Science Experiment Kit'),
  ('ebba Lil Benny Phant'),
  ('Little Tikes Easy Score Basketball Set'),
  ('Hot Wheels Track Builder Vertical Launch Kit'),
  ('Hot Wheels Colossal Crash Track Set'),
  ('LEGO Classic Medium Creative Brick Box'),
  ('Food Processor'),
  ('Makita CX200RB 18V LXT'),
  ('Brita 36413 Premium Filtered Water Bottle'),
  ('Maybelline Lash Sensational Washable Mascara'),
  ('Accent Cabinet White'),
  ('NEST Fragrances Classic Candle'),
  ('Robot Vacuum with Automatic Dirt Disposal'),
  ('Assorted Tea Gift Set'),
  ('Red Toy'),
  ('Amazing Robot Machine'),
  ('Dancing Lego'),
  ('Gray Elephant Plushie'),
  ('CosmoLiving Nolita Upholstered Daybed'),
  ('Nike Logo Hoodie'),
  ('Nike Long Sleeve Shirt'),
  ('Nike Red Zip Up Pants'),
  ('Nike Golf Shoes Black'),
  ('Supreme T-Shirt'),
  ('Spurme Stickers'),
  ('Adovo Laptop Sleeve'),
  ('Quentin Tarantino Cutout'),
  ('ECOVACS DEEBOT 661 Convertible Vacuuming'),
  ('Keurig K-Duo Coffee Maker'),
  ('Hallmark Holiday Wrapping Paper'),
  ('NIVEA Pamper Time Gift Set'),
  ('Cetaphil Body Lotion'),
  ('Cetaphil Gentle Skin Cleanser'),
  ('White Tank Top'),
  ('Abercrombie Ripped Jeans'),
  ('Bose Surround Sound Speakers'),
  ('Apple Airpods 2'),
  ('Apple Airpods Pro'),
  ('Calista Iphone Case'),
  ('Coex Washing Machine'),
  ('Dzona Air Purifer'),
  ('Panasonic Electric Razor'),
  ('Panasonic Large Screen TV'),
  ('Philips Sonic Toothbrush'),
  ('Philips Amazing Face Wash'),
  ('Acuvue Contacts Lens'),
  ('Bose Home Entertainment System'),
  ('Echo Wall Clock'),
  ('Nintendo Switch with Neon Blue'),
  ('Smart WiFi Router'),
  ('Satin Bed Sheets'),
  ('Egyptian Cloth'),
  ('Neon Green Drapery'),
  ('Canadian Bacon Maple Syrup'),
  ('Canadian Oil'),
  ('Boutiq Tea Tree Oil'),
  ('Nieva Cocoa Body Lotion'),
  ('Nikon Digital Camera'),
  ('Sony RX100M3 Video Creator Kit'),
  ('Sony Alpha a6000 Mirrorless Digital Camera'),
  ('Seagate Fast SSD 1TB External Solid State Drive'),
  ('DJI OSMO Mobile 3 Lightweight'),
  ('Polaroid Originals Everything Box'),
  ('Red Ferrari GTX6400'),
  ('Michellin Tires 50 Inch'),
  ('Hyundai Logo Sticker'),
  ('Stinger Emblem'),
  ('Pelican Ruck R40 Case'),
  ('Oral-B 7000 SmartSeries Rechargeable Power Electric Toothbrush'),
  ('Bissell ICONpet Cordless Stick Vacuum Cleaner'),
  ('La Specialista Espresso Machine'),
  ('OXO BREW Conical Burr Coffee Grinder'),
  ('NYX PROFESSIONAL MAKEUP Makeup Setting Spray'),
  ('Covergirl Lash Blast Volume Mascara'),
  ('Rachael Ray 16344 Cucina Nonstick Cookware Pots'),
  ('John Frieda Frizz Ease Extra Strength Serum'),
  ('Ninja Foodi 7-in-1 Programmable Pressure Fryer'),
  ('Hallmark Christmas Ornaments'),
  ('Gourmet Basics by Mikasa'),
  ('Yankee Candle Large Jar Candle Balsam');