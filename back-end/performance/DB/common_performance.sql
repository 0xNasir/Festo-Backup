-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 21, 2019 at 06:41 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `common_performance`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity`
--

CREATE TABLE `activity` (
  `activityId` int(11) NOT NULL,
  `activityUserId` varchar(200) NOT NULL,
  `activityType` varchar(100) DEFAULT NULL,
  `activityContent` text,
  `activityCompany` varchar(200) DEFAULT NULL,
  `activityDate` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `partners`
--

CREATE TABLE `partners` (
  `partnerId` int(11) NOT NULL,
  `partnerName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `partners`
--

INSERT INTO `partners` (`partnerId`, `partnerName`) VALUES
(1, 'Festo'),
(2, 'Siemens'),
(3, 'Festo Didactic'),
(4, 'Cognex'),
(5, 'Markem Imaje'),
(6, 'Universal Robots'),
(7, 'Sullair'),
(8, 'National Instruments'),
(9, 'Eureka'),
(10, 'Ventury');

-- --------------------------------------------------------

--
-- Table structure for table `visit`
--

CREATE TABLE `visit` (
  `visitId` int(11) NOT NULL,
  `visitActivity` int(11) NOT NULL,
  `visitPurpose` varchar(200) NOT NULL,
  `visitCompanyId` int(11) NOT NULL,
  `visitCompany` varchar(200) NOT NULL,
  `visitCompanyBranch` text NOT NULL,
  `visitCompanyPerson` text NOT NULL,
  `visitCategory` varchar(200) NOT NULL,
  `visitOutCome` text NOT NULL,
  `visitOpportunity` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity`
--
ALTER TABLE `activity`
  ADD PRIMARY KEY (`activityId`);

--
-- Indexes for table `partners`
--
ALTER TABLE `partners`
  ADD PRIMARY KEY (`partnerName`),
  ADD KEY `partnerId` (`partnerId`);

--
-- Indexes for table `visit`
--
ALTER TABLE `visit`
  ADD PRIMARY KEY (`visitId`),
  ADD KEY `visitId` (`visitId`),
  ADD KEY `visitId_2` (`visitId`),
  ADD KEY `visitActivity` (`visitActivity`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity`
--
ALTER TABLE `activity`
  MODIFY `activityId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `partners`
--
ALTER TABLE `partners`
  MODIFY `partnerId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `visit`
--
ALTER TABLE `visit`
  MODIFY `visitId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `visit`
--
ALTER TABLE `visit`
  ADD CONSTRAINT `visit_ibfk_1` FOREIGN KEY (`visitActivity`) REFERENCES `activity` (`activityId`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
