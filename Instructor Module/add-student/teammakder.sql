-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 26, 2019 at 09:23 PM
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
-- Table structure for table `advisers`
--

DROP TABLE IF EXISTS `advisers`;
CREATE TABLE IF NOT EXISTS `advisers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `teacherid` int(11) NOT NULL DEFAULT '0',
  `username` varchar(50) NOT NULL DEFAULT '0',
  `password` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `advisers`
--

INSERT INTO `advisers` (`id`, `teacherid`, `username`, `password`) VALUES
(1, 2168760, 'Patrick', '123');

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
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

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
(11, '7008', 2100123, 'Renner, Jeremy');

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
CREATE TABLE IF NOT EXISTS `item` (
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`Entry No`, `groupNo`, `idNo`, `borrowersName`, `item`, `qnty`, `borrowedOn`, `returnedOn`, `remarks`) VALUES
(1, 2, 2100002, 'Mora, Luis', 'Broomstick', 5, '2019-05-08 00:06:59', NULL, 'none'),
(2, 2, 2154800, 'Vittoria, Franz', 'Tabo', 3, '2019-05-08 00:22:27', NULL, 'none'),
(3, 1, 2143111, 'WEIRDONG MAHOGANI', 'Broom', 8, '2019-05-08 00:24:18', NULL, 'missing 2 brooms'),
(4, 3, 2100345, 'Woo Bin, Kim', 'Dust Pan', 7, '2019-05-08 06:51:20', NULL, 'broke 1 of the dustpan'),
(5, 3, 2154882, 'Spider-Man', 'Pale', 4, '2019-05-08 06:52:41', NULL, 'none'),
(6, 3, 1234567, 'Yen, Donnie', 'Broom', 2, '2019-05-08 07:19:34', NULL, '1 broom lost all its hair'),
(7, 2, 9876543, 'Dwayne, Johnson', 'Dust Pan', 10, '2019-05-08 07:23:25', NULL, '3 dustpans were damaged'),
(8, 4, 7654321, 'Malto, Sean', 'Tabo', 6, '2019-05-08 22:01:57', NULL, 'none');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
CREATE TABLE IF NOT EXISTS `login` (
  `idnum` int(7) NOT NULL,
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf16;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`idnum`, `fname`, `lname`) VALUES
(56, 'Cyrell', 'Madayag'),
(56, 'Maggie', 'Galamgam'),
(2167888, 'Seth', 'Albano'),
(2111111, 'Cherry', 'Lim'),
(2222222, 'Camille', 'Pert'),
(2345678, 'Juan', 'Tamad'),
(2167443, 'Cyrell', 'Mads');

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
