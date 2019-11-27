-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 27, 2019 at 10:45 AM
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
-- Database: `festo_quotation_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `quotation_id` int(11) NOT NULL,
  `product_name` varchar(200) NOT NULL,
  `product_part_no` varchar(150) NOT NULL,
  `internal_part_no` varchar(150) NOT NULL COMMENT 'This is a custom part number that will be attached to quotation pdf part number.',
  `product_type` varchar(100) NOT NULL,
  `product_quantity` int(11) NOT NULL,
  `product_price` decimal(10,2) NOT NULL,
  `product_description` text NOT NULL,
  `available_quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `quotation`
--

CREATE TABLE `quotation` (
  `quota_id` int(11) NOT NULL,
  `quota_date` int(11) NOT NULL,
  `quota_no` varchar(100) NOT NULL COMMENT 'Quotation number',
  `quota_ref` varchar(100) NOT NULL,
  `company_name` varchar(200) NOT NULL,
  `branch_name` varchar(200) NOT NULL,
  `address` text NOT NULL,
  `contact_person` varchar(100) NOT NULL,
  `person_id` int(11) NOT NULL,
  `designation` varchar(100) NOT NULL,
  `status` varchar(50) NOT NULL COMMENT 'Win / Loss / Pending',
  `contact_by` varchar(100) NOT NULL,
  `contact_by_designation` varchar(100) NOT NULL,
  `contact_by_phone` varchar(20) NOT NULL,
  `remarks` varchar(200) NOT NULL,
  `managed_by` varchar(200) NOT NULL,
  `state` varchar(50) NOT NULL DEFAULT 'Incomplete',
  `doc_data` longtext CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  `terms_condition` longtext NOT NULL,
  `print_count` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `revised_product`
--

CREATE TABLE `revised_product` (
  `r_product_id` int(11) NOT NULL,
  `r_quotation_id` int(11) NOT NULL,
  `r_product_name` varchar(200) NOT NULL,
  `r_product_part_no` varchar(150) NOT NULL,
  `r_internal_part_no` varchar(150) NOT NULL COMMENT 'This is a custom part number that will be attached to quotation pdf part number.',
  `r_product_type` varchar(100) NOT NULL,
  `r_product_quantity` int(11) NOT NULL,
  `r_product_price` decimal(10,2) NOT NULL,
  `r_product_description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `revised_quotation`
--

CREATE TABLE `revised_quotation` (
  `revised_id` int(11) NOT NULL,
  `r_quotation` int(11) NOT NULL,
  `r_quota_date` int(11) NOT NULL,
  `r_quota_no` varchar(100) NOT NULL COMMENT 'Quotation number',
  `r_company_name` varchar(200) NOT NULL,
  `r_branch_name` varchar(200) NOT NULL,
  `r_address` text NOT NULL,
  `r_contact_person` varchar(100) NOT NULL,
  `r_person_id` int(11) NOT NULL,
  `r_designation` varchar(100) NOT NULL,
  `r_status` varchar(50) NOT NULL COMMENT 'Win / Loss / Pending',
  `r_contact_by` varchar(100) NOT NULL,
  `r_remarks` varchar(200) NOT NULL,
  `r_managed_by` varchar(200) NOT NULL,
  `r_state` varchar(50) NOT NULL DEFAULT 'Incomplete',
  `r_doc_data` longtext NOT NULL,
  `r_terms_condition` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `update_quotation_history`
--

CREATE TABLE `update_quotation_history` (
  `u_quota_id` int(11) NOT NULL,
  `updated_on` int(11) NOT NULL,
  `u_quota_date` int(11) NOT NULL,
  `u_quota_no` varchar(100) NOT NULL COMMENT 'Quotation number',
  `u_status` varchar(50) NOT NULL COMMENT 'Win / Loss / Pending',
  `u_quotation` int(11) NOT NULL,
  `products` longtext NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `quotation_id` (`quotation_id`);

--
-- Indexes for table `quotation`
--
ALTER TABLE `quotation`
  ADD PRIMARY KEY (`quota_id`);

--
-- Indexes for table `revised_product`
--
ALTER TABLE `revised_product`
  ADD PRIMARY KEY (`r_product_id`),
  ADD KEY `quotation_id` (`r_quotation_id`);

--
-- Indexes for table `revised_quotation`
--
ALTER TABLE `revised_quotation`
  ADD PRIMARY KEY (`revised_id`),
  ADD KEY `quotation` (`r_quotation`);

--
-- Indexes for table `update_quotation_history`
--
ALTER TABLE `update_quotation_history`
  ADD PRIMARY KEY (`u_quota_id`),
  ADD KEY `u_quotation` (`u_quotation`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- AUTO_INCREMENT for table `quotation`
--
ALTER TABLE `quotation`
  MODIFY `quota_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `revised_product`
--
ALTER TABLE `revised_product`
  MODIFY `r_product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `revised_quotation`
--
ALTER TABLE `revised_quotation`
  MODIFY `revised_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `update_quotation_history`
--
ALTER TABLE `update_quotation_history`
  MODIFY `u_quota_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`quotation_id`) REFERENCES `quotation` (`quota_id`) ON DELETE CASCADE;

--
-- Constraints for table `revised_product`
--
ALTER TABLE `revised_product`
  ADD CONSTRAINT `revised_product_ibfk_1` FOREIGN KEY (`r_quotation_id`) REFERENCES `revised_quotation` (`revised_id`) ON DELETE CASCADE;

--
-- Constraints for table `revised_quotation`
--
ALTER TABLE `revised_quotation`
  ADD CONSTRAINT `revised_quotation_ibfk_1` FOREIGN KEY (`r_quotation`) REFERENCES `quotation` (`quota_id`) ON DELETE CASCADE;

--
-- Constraints for table `update_quotation_history`
--
ALTER TABLE `update_quotation_history`
  ADD CONSTRAINT `update_quotation_history_ibfk_1` FOREIGN KEY (`u_quotation`) REFERENCES `quotation` (`quota_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
