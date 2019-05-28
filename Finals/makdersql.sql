-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 26, 2019 at 08:14 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `makdersql`
--

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `Entry No` int(11) NOT NULL,
  `groupNo` int(11) NOT NULL,
  `idNo` int(11) NOT NULL,
  `borrowersName` varchar(40) NOT NULL,
  `item` varchar(40) NOT NULL,
  `qnty` int(11) NOT NULL,
  `borrowedOn` datetime DEFAULT NULL,
  `returnedOn` datetime DEFAULT NULL,
  `remarks` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

CREATE TABLE `login` (
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

CREATE TABLE `staff` (
  `staffid` int(11) NOT NULL,
  `staff` varchar(255) DEFAULT NULL,
  `pass` varchar(100) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`Entry No`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`staffid`),
  ADD UNIQUE KEY `username` (`staff`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `Entry No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `staffid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

--
-- Database: `iborrow`
--
CREATE DATABASE IF NOT EXISTS `iborrow` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `iborrow`;

-- --------------------------------------------------------

--
-- Table structure for table `users` Advisers
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
-- Dumping data for table `users`
--

INSERT INTO `advisers` (`id`, `teacherid`, `username`, `password`) VALUES
(1, 2168760, 'Patrick', '123');
COMMIT;
