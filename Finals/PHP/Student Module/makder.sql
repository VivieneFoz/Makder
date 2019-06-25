-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 15, 2019 at 08:38 PM
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
-- Database: `makder`
--

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
CREATE TABLE IF NOT EXISTS `item` (
  `itemNo` int(3) NOT NULL,
  `itemName` varchar(20) NOT NULL,
  `photo` binary(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf16;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`itemNo`, `itemName`, `photo`) VALUES
(1, 'Broom', 0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
(2, 'Stick Broom', 0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
(3, 'Dustpan', 0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
(4, 'Shovel', 0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
(5, 'Garden Shovel', 0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
(6, 'Watering Can', 0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;