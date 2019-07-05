-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 05, 2019 at 07:10 PM
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
-- Table structure for table `add_items`
--

CREATE TABLE `add_items` (
  `id` int(5) NOT NULL,
  `item_name` varchar(20) NOT NULL,
  `item_image` varchar(500) NOT NULL,
  `item_qty` varchar(255) NOT NULL,
  `available_qty` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `add_items`
--

INSERT INTO `add_items` (`id`, `item_name`, `item_image`, `item_qty`, `available_qty`) VALUES
(1, 'shovel', 'items_image/9df56335cc681818b1aa294ee06fb8e3shovel.jpg', '10', '10'),
(2, 'gloves', 'items_image/e4179471014c5b54f444b63ae2ca8d6dgloves.jpg', '15', '15'),
(3, 'broomstick', 'items_image/7893e601c9a8d5a7fc4cdbedda1dc758broomstick.jpg', '15', '15'),
(4, 'dustpan', 'items_image/4002a8a5cb55c78c6e8fdb0837c6d0d9dustpan.jpg', '15', '15'),
(5, 'rag', 'items_image/81453528d2f2e06d127f0a3e04ba28abrag.jpg', '10', '10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `add_items`
--
ALTER TABLE `add_items`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `add_items`
--
ALTER TABLE `add_items`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
