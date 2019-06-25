-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 25, 2019 at 08:21 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.1.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `iborrow`
--

-- --------------------------------------------------------

--
-- Table structure for table `student_login`
--

CREATE TABLE `student_login` (
  `id_number` int(7) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `class_code` varchar(4) NOT NULL,
  `group_number` int(2) NOT NULL,
  `contact` varchar(12) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student_login`
--

INSERT INTO `student_login` (`id_number`, `first_name`, `last_name`, `password`, `class_code`, `group_number`, `contact`, `email`) VALUES
(2140000, 'Barry', 'Allen', '12345678', '9320', 1, '09395045732', 'barryallen@gmail.com'),
(2150000, 'Ned', 'Leeds', '12345678', '9320', 2, '09395045730', 'nedleeds@gmail.com'),
(2153000, 'Peter ', 'Parker', '12345678', '9320', 3, '09395045720', 'peterparker@yahoo.com'),
(2153001, 'Mary', 'Watson', '12345678', '9320', 4, '09395045721', 'marywatson@gmail.com'),
(2153002, 'Gwen ', 'Stacy', '12345678', '9320', 5, '09395045722', 'gwenstacy@gmail.com'),
(2160000, 'Bruce', 'Wayne', '12345678', '9320', 6, '09395045731', 'brucewayne@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `student_login`
--
ALTER TABLE `student_login`
  ADD PRIMARY KEY (`id_number`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
