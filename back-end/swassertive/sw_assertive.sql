-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 06, 2019 at 11:17 AM
-- Server version: 10.1.10-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sw_assertive`
--

-- --------------------------------------------------------

--
-- Table structure for table `access`
--

CREATE TABLE `access` (
  `accessId` int(11) NOT NULL,
  `accessAppId` int(11) DEFAULT NULL,
  `keyword` varchar(30) DEFAULT NULL,
  `definition` varchar(80) DEFAULT NULL,
  `val` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `access`
--

INSERT INTO `access` (`accessId`, `accessAppId`, `keyword`, `definition`, `val`) VALUES
(1, 2, 'pin', 'Product Insertion', 0),
(2, 2, 'pmod', 'Product Modify', 1),
(5, 1, 'pprm3', 'bbb', 0),
(6, 1, 'nnn', 'parameter four', 1),
(7, 3, 'gbt1', 'parameter one', 0),
(8, 3, 'gbt2', 'parameter two', 0),
(9, 3, 'gbt3', 'parameter three', 1),
(10, 3, 'gbt4', 'parameter four', 1),
(11, 4, 'prm1rr', 'parameter one', 0),
(12, 4, 'prm2rr', 'parameter two', 0),
(13, 4, 'prm3rr', 'parameter three', 1),
(14, 4, 'prm4rr', 'parameter four', 1),
(15, 5, 'key1', 'def_1', 0),
(16, 5, 'key2', 'def_2', 1),
(17, 5, 'key3', 'def_3', 0),
(18, 1, 'mmm', 'TTT', 1),
(19, 1, 'uuu', 'uuu', 1),
(20, 6, 'cvbnff', 'cvbn', 1),
(21, 7, 'uuu', 'abc', 1),
(22, 2, 'fsdf', 'kdjsfds', 0);

-- --------------------------------------------------------

--
-- Table structure for table `app`
--

CREATE TABLE `app` (
  `appId` int(11) NOT NULL,
  `appName` varchar(50) DEFAULT NULL,
  `url` text,
  `sessAryName` varchar(30) DEFAULT NULL,
  `remark` text,
  `disabled` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `app`
--

INSERT INTO `app` (`appId`, `appName`, `url`, `sessAryName`, `remark`, `disabled`) VALUES
(1, 'Client Management Systemxxx', 'http://aslsdfsdfk.com/asfsdf/sadfds', 'qwe', 'xxxlorem imsem dolor sit amet', 0),
(2, 'Product Management System', 'http://sdfsf/asdfs/df', 'PMS', 'Loriem imsfdasdfls saldfs dfsdlfi', 0),
(3, 'Global Business Tool', 'http://gbt.com/xxtp', 'gbt', 'lorem imsem dolor sit amet', 0),
(4, 'Client Management Systemrrr', 'http://aslsdfsdfk.com/asfsdf/sadfdsrrrr', 'cms', 'rrrrlorem imsem dolor sit amet', 0),
(5, 'Glorious Management System', 'http://asdf.lkdjf/sadfs/df', 'bsn1', 'No remark available', 0),
(6, 'Application 2', 'http://app2', 'app2', '', 0),
(7, 'Big App', 'http://asb', 'iap', 'No remark', 0);

-- --------------------------------------------------------

--
-- Table structure for table `dgn`
--

CREATE TABLE `dgn` (
  `dgnId` int(11) NOT NULL,
  `dgnUserId` int(11) DEFAULT NULL,
  `fromTime` int(11) DEFAULT NULL,
  `toTime` int(11) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dgn`
--

INSERT INTO `dgn` (`dgnId`, `dgnUserId`, `fromTime`, `toTime`, `title`) VALUES
(1, 2, 45643643, 43446545, 'trdrertw'),
(2, 2, 3453254, 345345, 'dfgsgfdfg'),
(8, 22, 45643643, 43446545, 'trdrertw'),
(9, 22, 3453254, 345345, 'dfgsgfdfg'),
(10, 23, 1561623255, 0, 'AAA'),
(11, 25, 1561623550, 0, 'AAA'),
(12, 26, 1561623550, 0, 'AAA'),
(13, 27, 1561623550, 0, 'AAA'),
(14, 31, 1561634405, 0, 'sdf'),
(15, 32, 1562069455, 0, 'NOP'),
(16, 33, 1562412798, 0, 'Auto'),
(30, 1, 1459360800, 0, 'engineer'),
(32, 34, 1562668290, 0, 'SD'),
(33, 15, 45643643, 0, 'trdrertw');

-- --------------------------------------------------------

--
-- Table structure for table `email`
--

CREATE TABLE `email` (
  `emailId` int(11) NOT NULL,
  `emailUserId` int(11) DEFAULT NULL,
  `emailType` varchar(20) DEFAULT NULL,
  `email` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `email`
--

INSERT INTO `email` (`emailId`, `emailUserId`, `emailType`, `email`) VALUES
(1, 2, 'h', 'haha@hjdsj'),
(2, 2, 'yd', 'gjfgd@kjhkjf'),
(6, 15, 'h', 'haha@hjdsj'),
(7, 15, 'yd', 'gjfgd@kjhkjf'),
(8, 22, 'h', 'haha@hjdsj'),
(9, 22, 'yd', 'gjfgd@kjhkjf'),
(10, 23, '', 'abcd@abcd'),
(11, 25, 'Work', 'abcd@abcd'),
(12, 26, 'Work', 'abcd@abcd'),
(13, 27, 'Work', 'abcd@abcd'),
(14, 31, 'Work', 'sdfs@sdf'),
(15, 32, 'Work', 'asdf@sdf'),
(16, 33, 'Work', 'jhjhgjgh@jgjhg.com'),
(18, 1, 'Personalsss', 'als;kfjsd@sdfasddd'),
(19, 1, 'Work', 'dfgfcg@dfg'),
(20, 34, 'Work', 'asdf@sdf');

-- --------------------------------------------------------

--
-- Table structure for table `level`
--

CREATE TABLE `level` (
  `levelId` int(11) NOT NULL,
  `title` varchar(20) DEFAULT NULL,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `level`
--

INSERT INTO `level` (`levelId`, `title`, `description`) VALUES
(1, 'developer', 'developer can do anything with super access to all over the system.'),
(2, 'admin', 'developer can do anything with super access to all over the system.'),
(3, 'Manager D', 'developer can do anything with super access to all over the system.'),
(4, 'Manager', 'developer can do anything with super access to all over the system.'),
(5, 'manager3', 'aaaaaaaaaaaaa'),
(6, 'manager4', 'asdflskdjfsf'),
(7, 'UUU', 'uuuuuuuuuuuuuuu'),
(8, 'PPP', 'OOO'),
(9, 'Hellouytuy', 'ertyuioknbgtf');

-- --------------------------------------------------------

--
-- Table structure for table `permission`
--

CREATE TABLE `permission` (
  `permissionId` int(11) NOT NULL,
  `permissionLevelId` int(11) DEFAULT NULL,
  `permissionAppId` int(11) DEFAULT NULL,
  `access` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `permission`
--

INSERT INTO `permission` (`permissionId`, `permissionLevelId`, `permissionAppId`, `access`) VALUES
(27, 1, 3, '[{\"keyword\":\"gbt1\",\"val\":true},{\"keyword\":\"gbt2\",\"val\":true},{\"keyword\":\"gbt3\",\"val\":false}]'),
(29, 1, 7, '[]'),
(30, 8, 1, '[]'),
(31, 8, 2, '[]'),
(32, 8, 5, '[]'),
(33, 8, 6, '[]'),
(36, 1, 4, '[{\"keyword\":\"prm1rr\",\"val\":true},{\"keyword\":\"prm4rr\",\"val\":false}]'),
(40, 2, 1, '[]'),
(41, 2, 2, '[]'),
(42, 2, 3, '[]'),
(43, 2, 4, '[]'),
(44, 2, 5, '[]'),
(45, 2, 6, '[]'),
(46, 2, 7, '[]'),
(47, 3, 1, '[{\"keyword\":\"mmm\",\"val\":false}]'),
(48, 3, 3, '[]'),
(49, 3, 5, '[]'),
(50, 4, 2, '[{\"keyword\":\"pin\",\"val\":true}]');

-- --------------------------------------------------------

--
-- Table structure for table `phone`
--

CREATE TABLE `phone` (
  `phoneId` int(11) NOT NULL,
  `phoneUserId` int(11) DEFAULT NULL,
  `phoneType` varchar(20) DEFAULT NULL,
  `number` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `phone`
--

INSERT INTO `phone` (`phoneId`, `phoneUserId`, `phoneType`, `number`) VALUES
(1, 2, 'h', '0987654321'),
(2, 2, 'p', '34560345678'),
(10, 15, 'h', '0987654321'),
(11, 15, 'p', '34560345678'),
(12, 22, 'h', '0987654321'),
(13, 22, 'p', '34560345678'),
(14, 23, '', '1234'),
(15, 25, 'Work', '1234'),
(16, 26, 'Work', '1234'),
(17, 27, 'Work', '1234'),
(18, 31, 'Work', 'adfdf'),
(19, 32, 'Work', '54322'),
(20, 33, 'Work', '0987979898'),
(25, 1, 'pn', '45689034567'),
(26, 1, 'Work', '55555'),
(27, 34, 'Work', '56789');

-- --------------------------------------------------------

--
-- Table structure for table `prime`
--

CREATE TABLE `prime` (
  `primeId` int(11) NOT NULL,
  `keyword` varchar(30) DEFAULT NULL,
  `definition` varchar(100) DEFAULT NULL,
  `val` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prime`
--

INSERT INTO `prime` (`primeId`, `keyword`, `definition`, `val`) VALUES
(1, 'manageUser', 'Manage User', 0),
(2, 'manageApp', 'Manage App', 0),
(3, 'manageUserLevel', 'Manage User Level', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `dob` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(32) NOT NULL,
  `gender` varchar(15) NOT NULL,
  `religion` varchar(20) NOT NULL,
  `bloodGroup` varchar(10) NOT NULL,
  `address` text NOT NULL,
  `joinTime` int(11) DEFAULT NULL,
  `userLevelId` int(11) NOT NULL,
  `blocked` tinyint(1) NOT NULL,
  `primeAccessMod` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `name`, `dob`, `username`, `password`, `gender`, `religion`, `bloodGroup`, `address`, `joinTime`, `userLevelId`, `blocked`, `primeAccessMod`) VALUES
(1, 'Developer', 717184800, 'developer', '81dc9bdb52d04dc20036dbd8313ed055', 'Female', 'Christianity', 'B-', 'Dhaka, Bangladesh', 1562665673, 1, 0, '[{\"keyword\":\"manageUser\",\"val\":true},{\"keyword\":\"manageUserLevel\",\"val\":true}]'),
(2, 'Admin', 76898786, 'admin', '81dc9bdb52d04dc20036dbd8313ed055', 'Male', 'Islam', 'B+', 'Dhaka, Bangladesh', 5454343, 2, 0, '[{\"keyword\":\"manageUser\",\"val\":1},{\"keyword\":\"manageApp\",\"val\":1},{\"keyword\":\"manageUserLevel\",\"val\":1}]'),
(15, 'Aman Ullah', 76898786, 'aman', '81dc9bdb52d04dc20036dbd8313ed055', 'Male', 'Islam', 'B+', 'Dhaka, Bangladesh', 1563341263, 4, 0, '[]'),
(16, 'Yousuf Rana', 456789, 'yousuf', '1234', 'Male', 'Islam', 'B+', 'als;dkfjsadf/asdf/sdf/', 56789, 2, 0, '[]'),
(17, 'Ahosan Ullah', 0, 'ahosan', '1234', 'Male', 'Islam', 'B+', 'lskdjflksdjf', 5678, 2, 0, '[]'),
(18, 'Sifat Ullah', 456789, 'sifat', '1234', 'Male', 'Islam', 'B+', 'slakdjfsd', 6543345, 2, 0, '[]'),
(19, 'Atikur Rahman', 67890, 'atik', '1234', 'Male', 'Islam', 'A+', 'asdkfjsdkjf', 5678987, 2, 0, '[]'),
(20, 'Tasnim Sarwar Rad', 456789, 'rad', '1234', 'Male', 'Islam', 'B+', 'asdfsfs', 434332, 2, 0, '[]'),
(21, 'Mansur Ahmed', 56789876, 'mansur', '1234', 'Male', 'Islam', 'A+', 'sdfsadf', 5678987, 2, 0, '[]'),
(22, 'Nasir Uddin', 76898786, 'aman222', '81dc9bdb52d04dc20036dbd8313ed055', 'Male', 'Islam', 'B+', 'Dhaka, Bangladesh', 5454343, 2, 0, '[]'),
(23, 'ABCD', 1561623255, 'abcd', 'abcd', 'Male', 'Islam', 'A+', 'AAAA BBBB', 1561623315, 1, 0, '[{\"keyword\":\"manageUser\",\"val\":true},{\"keyword\":\"manageApp\",\"val\":true}]'),
(25, 'ABCD', 1561623550, 'abcd2', '1234', 'Male', 'Islam', 'A+', '', 1561623629, 1, 0, '[{\"keyword\":\"manageUser\",\"val\":true},{\"keyword\":\"manageApp\",\"val\":true},{\"keyword\":\"manageUserLevel\",\"val\":true}]'),
(26, 'ABCD', 1561623550, 'abcd3', '1234', 'Male', 'Islam', 'A+', '', 1561623644, 1, 0, '[]'),
(27, 'ABCD', 1561623550, 'abcd4', '81dc9bdb52d04dc20036dbd8313ed055', 'Male', 'Islam', 'A+', '', 1561623751, 1, 0, '[]'),
(31, 'Jewel', 1561634405, 'amans', '20838a8df7cc0babd745c7af4b7d94e2', 'Male', 'Islam', 'A+', '', 1561634828, 1, 0, '[]'),
(32, 'KKM PPR', 1562069455, 'aprr', '3c50c6a518f2386a91148a46b0d43de1', 'Male', 'Islam', 'A+', '', 1562069518, 1, 0, '[]'),
(33, 'Tarique Hasan', 1562412798, 'th250', 'f136a80494c239ef024c7ccd69b386a1', 'Male', 'Islam', 'B-', 'hfhfhg', 1562412936, 2, 0, '[]'),
(34, 'Nasir Uddin', 805485600, 'muddin', '81dc9bdb52d04dc20036dbd8313ed055', 'Male', 'Islam', 'A+', 'ddd', 1562668382, 1, 0, '[{\"keyword\":\"manageApp\",\"val\":true},{\"keyword\":\"manageUserLevel\",\"val\":true}]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `access`
--
ALTER TABLE `access`
  ADD PRIMARY KEY (`accessId`),
  ADD KEY `app_id` (`accessAppId`);

--
-- Indexes for table `app`
--
ALTER TABLE `app`
  ADD PRIMARY KEY (`appId`);

--
-- Indexes for table `dgn`
--
ALTER TABLE `dgn`
  ADD PRIMARY KEY (`dgnId`),
  ADD KEY `dgn_user_id` (`dgnUserId`);

--
-- Indexes for table `email`
--
ALTER TABLE `email`
  ADD PRIMARY KEY (`emailId`),
  ADD KEY `user_id` (`emailUserId`);

--
-- Indexes for table `level`
--
ALTER TABLE `level`
  ADD PRIMARY KEY (`levelId`);

--
-- Indexes for table `permission`
--
ALTER TABLE `permission`
  ADD PRIMARY KEY (`permissionId`),
  ADD KEY `level_id` (`permissionLevelId`),
  ADD KEY `app_id` (`permissionAppId`);

--
-- Indexes for table `phone`
--
ALTER TABLE `phone`
  ADD PRIMARY KEY (`phoneId`),
  ADD KEY `user_id` (`phoneUserId`);

--
-- Indexes for table `prime`
--
ALTER TABLE `prime`
  ADD PRIMARY KEY (`primeId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `level_id` (`userLevelId`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `access`
--
ALTER TABLE `access`
  MODIFY `accessId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `app`
--
ALTER TABLE `app`
  MODIFY `appId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `dgn`
--
ALTER TABLE `dgn`
  MODIFY `dgnId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `email`
--
ALTER TABLE `email`
  MODIFY `emailId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `level`
--
ALTER TABLE `level`
  MODIFY `levelId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `permission`
--
ALTER TABLE `permission`
  MODIFY `permissionId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `phone`
--
ALTER TABLE `phone`
  MODIFY `phoneId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `prime`
--
ALTER TABLE `prime`
  MODIFY `primeId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `access`
--
ALTER TABLE `access`
  ADD CONSTRAINT `access_ibfk_1` FOREIGN KEY (`accessAppId`) REFERENCES `app` (`appId`);

--
-- Constraints for table `dgn`
--
ALTER TABLE `dgn`
  ADD CONSTRAINT `dgn_ibfk_1` FOREIGN KEY (`dgnUserId`) REFERENCES `user` (`userId`);

--
-- Constraints for table `email`
--
ALTER TABLE `email`
  ADD CONSTRAINT `email_ibfk_1` FOREIGN KEY (`emailUserId`) REFERENCES `user` (`userId`);

--
-- Constraints for table `permission`
--
ALTER TABLE `permission`
  ADD CONSTRAINT `permission_ibfk_1` FOREIGN KEY (`permissionLevelId`) REFERENCES `level` (`levelId`),
  ADD CONSTRAINT `permission_ibfk_2` FOREIGN KEY (`permissionAppId`) REFERENCES `app` (`appId`);

--
-- Constraints for table `phone`
--
ALTER TABLE `phone`
  ADD CONSTRAINT `phone_ibfk_1` FOREIGN KEY (`phoneUserId`) REFERENCES `user` (`userId`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`userLevelId`) REFERENCES `level` (`levelId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
