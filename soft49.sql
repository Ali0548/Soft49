-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 08, 2022 at 11:57 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `soft49`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `admin_name` varchar(200) NOT NULL,
  `admin_email` varchar(30) NOT NULL,
  `admin_contact` varchar(100) NOT NULL,
  `admin_password` varchar(100) NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_name`, `admin_email`, `admin_contact`, `admin_password`, `date_time`) VALUES
(1, 'admin_soft49', 'soft49@gmail.com', '03095306547', 'admin@123', '2022-11-08 18:52:34');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(30) NOT NULL,
  `last_name` varchar(200) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_contact` varchar(11) NOT NULL,
  `user_password` varchar(100) DEFAULT NULL,
  `date_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `last_name`, `user_email`, `user_contact`, `user_password`, `date_time`) VALUES
(1, 'Hafiz Ali', '', 'abhai0548@gmail.com', '03095306547', NULL, '2022-11-08 19:27:09'),
(3, 'Hafiz Ali', '', 'Hafizali.mansoor@gmail.com', '03095306547', NULL, '2022-11-08 19:35:02'),
(4, 'Hafiz Ali', '', 'Hafizali.maansoor@gmail.com', '02309530654', NULL, '2022-11-08 19:36:31'),
(5, 'Hafiz Ali', '', 'hafiz.ali.mansoor@gmail.com', '123123', NULL, '2022-11-08 21:37:54'),
(6, 'Hafiz Ali', '', 'hafiz.alai.mansoor@gmail.com', '03106356806', '123123', '2022-11-08 21:39:23'),
(7, 'Ali ', '', 'ali222@gmail.com', '03106568061', 'Gettherefast1212', '2022-11-08 21:56:46'),
(8, 'Neam ', '', 'neam22@gmail.com', '334569853', 'Gettherefast1212', '2022-11-08 21:57:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
