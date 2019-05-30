-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 30, 2019 at 05:26 AM
-- Server version: 5.7.24
-- PHP Version: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `teammakder`
--

-- --------------------------------------------------------

--
-- Table structure for table `adviserlogin`
--

DROP TABLE IF EXISTS `adviserlogin`;
CREATE TABLE IF NOT EXISTS `adviserlogin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `teacherid` varchar(11) NOT NULL DEFAULT '0',
  `username` varchar(50) NOT NULL DEFAULT '0',
  `password` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `adviserlogin`
--

INSERT INTO `adviserlogin` (`id`, `teacherid`, `username`, `password`) VALUES
(1, '2168760', 'Patrick', '123'),
(2, '2143111', 'frendz', 'poop101'),
(3, '2100345', 'emcezz', 'whoiam'),
(4, '2154882', 'vivi', 'skateordie'),
(5, '2100002', 'vittoria123', 'sta'),
(6, 'FE739', 'mcvg', 'starbuckspamore'),
(7, 'FE001', 'kmjs', 'jessicasoho'),
(8, 'FE413', 'offonoff', 'gold'),
(9, 'FE035', 'darell', 'asesina'),
(10, 'FE116', 'fvg', 'prayforme'),
(11, 'FE666', 'dndl', 'sbV371'),
(12, '1234567', 'pwe', 'pwekamut'),
(13, '9876543', 'midnight', 'crisis'),
(14, '567', 'find', 'away'),
(15, '456', 'lou', '3lau'),
(16, '2112345', 'grinch', 'ihatechristmas'),
(17, 'FE123', 'feeling', 'maganda'),
(18, 'FE762', 'DATA', 'agsangitkan'),
(19, 'FE419', 'skl', 'siakkumalattan'),
(20, 'FE777', 'ikl', 'isunakumalattan'),
(21, 'CDO555', 'karnenorte', 'masarapyan'),
(22, 'FE365', 'IKR', 'iknowright'),
(23, 'FE456', 'ITA', 'itako'),
(24, 'CD173', 'DER', 'derdolipas'),
(25, 'CDO000', 'MIS', 'maincampus'),
(26, 'AB412', 'VENTI', 'whitemocha'),
(27, 'AB471', 'sagud', 'jeepney');

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
CREATE TABLE IF NOT EXISTS `classes` (
  `Student No` int(11) NOT NULL AUTO_INCREMENT,
  `classCode` varchar(10) NOT NULL,
  `idno` int(20) NOT NULL,
  `studName` varchar(60) NOT NULL,
  PRIMARY KEY (`Student No`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`Student No`, `classCode`, `idno`, `studName`) VALUES
(1, '9342a', 2100002, 'Malto, Sean'),
(2, '9147B', 2154882, 'Scott, Adkins'),
(3, '9188', 2100345, 'Albano, Seth Lawrence'),
(4, '9355', 2143111, 'Garcia, Mark Carlo'),
(5, '9201A', 2121234, 'Vittoria, Franz'),
(6, '9003', 2198765, 'Mora, Luis'),
(7, '9119', 2123456, 'Foz, Viviene'),
(8, '8319', 1234567, 'Sabado, Patrick'),
(9, '7025', 9876543, 'Gustavo, Felipe'),
(10, '7033', 2100000, 'Rodriguez, Paul'),
(11, '7008', 2100123, 'Renner, Jeremy'),
(12, '6027', 2156789, 'Grande, Ariana'),
(13, '5039', 2112345, 'Lu, Cindy'),
(14, '7316', 2111123, 'Aporekado, Michael'),
(15, '7025', 2165432, 'Almayda, Audry'),
(16, '9147B', 2169873, 'Cutler, Chelsea'),
(17, '5301', 0, 'Lopez, Fifz');

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
CREATE TABLE IF NOT EXISTS `items` (
  `Entry No` int(11) NOT NULL AUTO_INCREMENT,
  `groupNo` int(11) NOT NULL,
  `idNo` int(11) NOT NULL,
  `borrowersName` varchar(40) NOT NULL,
  `item` varchar(40) NOT NULL,
  `qnty` int(11) NOT NULL,
  `borrowedOn` datetime DEFAULT NULL,
  `returnedOn` datetime DEFAULT NULL,
  `remarks` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Entry No`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`Entry No`, `groupNo`, `idNo`, `borrowersName`, `item`, `qnty`, `borrowedOn`, `returnedOn`, `remarks`) VALUES
(1, 2, 2100002, 'Mora, Luis', 'Broomstick', 5, '2019-05-08 00:06:59', NULL, NULL),
(2, 2, 2154800, 'Vittoria, Franz', 'Tabo', 3, '2019-05-08 00:22:27', NULL, NULL),
(3, 1, 2143111, 'WEIRDONG MAHOGANI', 'Broom', 8, '2019-05-08 00:24:18', '2019-05-29 13:01:19', 'missing 2 brooms'),
(4, 3, 2100345, 'Woo Bin, Kim', 'Dust Pan', 7, '2019-05-08 06:51:20', '2019-05-29 13:03:32', 'broke 1 of the dustpan'),
(5, 3, 2154882, 'Spider-Man', 'Pale', 4, '2019-05-08 06:52:41', NULL, NULL),
(6, 3, 1234567, 'Yen, Donnie', 'Broom', 2, '2019-05-08 07:19:34', '2019-05-29 13:04:09', 'NONE'),
(7, 2, 9876543, 'Dwayne, Johnson', 'Dust Pan', 10, '2019-05-08 07:23:25', '2019-05-29 13:04:28', '3 dustpans were damaged'),
(8, 4, 7654321, 'Malto, Sean', 'Tabo', 6, '2019-05-08 22:01:57', NULL, NULL),
(9, 1, 2109876, 'Dolipas. Derrick', 'Broom', 9, '2019-05-29 15:02:30', '2019-05-29 20:44:18', '3 of the brooms lost all their hair'),
(10, 4, 2165432, 'Goulding, Ellie', 'Pale', 1, '2019-05-29 20:41:52', '2019-05-30 12:59:11', 'NONE'),
(11, 3, 1209866, 'Lopez, Fifz', 'Broomstick', 10, '2019-05-30 12:58:50', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
CREATE TABLE IF NOT EXISTS `staff` (
  `staffid` int(11) NOT NULL AUTO_INCREMENT,
  `staff` varchar(255) DEFAULT NULL,
  `pass` varchar(100) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`staffid`),
  UNIQUE KEY `username` (`staff`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `studentlogin`
--

DROP TABLE IF EXISTS `studentlogin`;
CREATE TABLE IF NOT EXISTS `studentlogin` (
  `idnum` int(7) NOT NULL,
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf16;

--
-- Dumping data for table `studentlogin`
--

INSERT INTO `studentlogin` (`idnum`, `fname`, `lname`) VALUES
(56, 'Cyrell', 'Madayag'),
(56, 'Maggie', 'Galamgam'),
(2167888, 'Seth', 'Albano'),
(2111111, 'Cherry', 'Lim'),
(2222222, 'Camille', 'Pert'),
(2345678, 'Juan', 'Tamad'),
(2167443, 'Cyrell', 'Mads');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
