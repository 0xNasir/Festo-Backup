-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 01, 2020 at 12:05 PM
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
  `product_unit` varchar(50) NOT NULL,
  `product_price` decimal(10,2) NOT NULL,
  `product_description` text NOT NULL,
  `available_quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `quotation_id`, `product_name`, `product_part_no`, `internal_part_no`, `product_type`, `product_quantity`, `product_unit`, `product_price`, `product_description`, `available_quantity`) VALUES
(69, 19, 'Pressure sensor', '529964', '529964', ' SDE1-D10-G2-HQ4-L-P1-M8', 1, 'pc', '25408.12', 'Pressure sensor SDE1-D10-G2-HQ4-L-P1-M8', 1),
(79, 21, 'Ball valve VAPB-1', '534308', '534308', ' 1/2-F-25-F0405', 1, 'pc', '7548.02', 'Ball valve VAPB-1 1/2-F-25-F0405', 1),
(81, 22, 'Quick connector', '2032', '2032', ' CK-3/8-PK-6', 1, 'pc', '393.42', 'Quick connector CK-3/8-PK-6', 1);

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
  `contact_by_userId` int(11) NOT NULL,
  `contact_by_username` varchar(100) NOT NULL,
  `contact_by_designation` varchar(100) NOT NULL,
  `contact_by_phone` varchar(20) NOT NULL,
  `remarks` varchar(200) NOT NULL,
  `managed_by` varchar(200) NOT NULL,
  `state` varchar(50) NOT NULL DEFAULT 'Incomplete',
  `doc_data` longtext CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  `terms_condition` longtext NOT NULL,
  `print_count` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quotation`
--

INSERT INTO `quotation` (`quota_id`, `quota_date`, `quota_no`, `quota_ref`, `company_name`, `branch_name`, `address`, `contact_person`, `person_id`, `designation`, `status`, `contact_by`, `contact_by_userId`, `contact_by_username`, `contact_by_designation`, `contact_by_phone`, `remarks`, `managed_by`, `state`, `doc_data`, `terms_condition`, `print_count`) VALUES
(19, 1577782991, 'FSQT / TISPIL / SL 31 / 01', '', 'The IBN SINA Pharmaceutical Industry Ltd.', 'Corporate Office', 'Tanim Center, 3 Asad Gate, Mohammadpur, Dhaka-1207', 'Mr. Md. Nazimul Hauque Murad', 1, 'Assistant General Manager', 'Ready', 'Nasir Uddin', 34, 'muddin', 'SD', '56789', '', 'admin', 'Complete', '{\"pdfId\":null,\"pdfSubject\":\"Quotation for Supply of Festo Pneumatic Components\",\"pdfBody\":\"Dear Sir,<br>As desired, please find below our quotations for Festo Pneumatic Components for favourable evaluation at your end.\",\"pdfVat\":7.5,\"suggestion\":\"We look forward to being favored with your valuable order in due course.<br>Should you require any other information, please do not hesitate to contact us.\"}', '[{\"topic\":\"STANDARD DELIVERY\",\"message\":\"Cash cheque / Account payee cheque at the time of delivery.\"},{\"topic\":\"EXPEDITED DELIVERY\",\"message\":\"<strong>Urgent delivery is possible on a case-by-case basis and is subjected to additional charges.</strong>\"},{\"topic\":\"VALIDITY OF OFFER\",\"message\":\"7 days from the date of issuance of this quotation.<br>(Priority would be given on first come first served basis)\"},{\"topic\":\"BRAND\",\"message\":\"Festo, Germany\"},{\"topic\":\"PARTIAL DELIVERY\",\"message\":\"To be allowed\"}]', 3),
(21, 1577862989, 'FSQT / TISPIL / TA 01 / 20', '', 'The IBN SINA Pharmaceutical Industry Ltd.', 'Corporate Office', 'Tanim Center, 3 Asad Gate, Mohammadpur, Dhaka-1207', 'Mr. Md. Nazimul Hauque Murad', 1, 'Assistant General Manager', 'Preparing', 'Admin Manager', 2, 'admin', 'Sr. Automation Engineer', '0987654321', '', 'admin', 'Complete', '{\"pdfId\":null,\"pdfSubject\":\"Quotation for Supply of Festo Pneumatic Components\",\"pdfBody\":\"Dear Sir,<br>As desired, please find below our quotations for Festo Pneumatic Components for favourable evaluation at your end.\",\"pdfVat\":7.5,\"suggestion\":\"We look forward to being favored with your valuable order in due course.<br>Should you require any other information, please do not hesitate to contact us.\"}', '[{\"topic\":\"PAYMENT\",\"message\":\"Cash cheque / Account payee cheque at the time of delivery.\"},{\"topic\":\"STANDARD DELIVERY\",\"message\":\"12-14 weeks after receipt of order confirmation from your end.<br>(Subject to availability on first come first served basis).\"},{\"topic\":\"EXPEDITED DELIVERY\",\"message\":\"<strong>Urgent delivery is possible on a case-by-case basis and is subjected to additional charges.</strong>\"},{\"topic\":\"VALIDITY OF OFFER\",\"message\":\"7 days from the date of issuance of this quotation.<br>(Priority would be given on first come first served basis)\"},{\"topic\":\"BRAND\",\"message\":\"Festo, Germany\"},{\"topic\":\"PARTIAL DELIVERY\",\"message\":\"To be allowed\"}]', 1),
(22, 1577870447, 'FSQT / Sp / TA 01 / 22', '', 'Square pharma', 'Head office', 'Dhaka-1205', 'Kamal Ahammed', 3, 'sdfasdf', 'Preparing', 'Admin Manager', 2, 'admin', 'Sr. Automation Engineer', '0987654321', '', 'admin', 'Complete', '{\"pdfId\":null,\"pdfSubject\":\"Quotation for Supply of Festo Pneumatic Components\",\"pdfBody\":\"Dear Sir,<br>As desired, please find below our quotations for Festo Pneumatic Components for favourable evaluation at your end.\",\"pdfVat\":7.5,\"suggestion\":\"We look forward to being favored with your valuable order in due course.<br>Should you require any other information, please do not hesitate to contact us.\"}', '[{\"topic\":\"PAYMENT\",\"message\":\"Cash cheque / Account payee cheque at the time of delivery. <br>40% of the total amount to be paid at the time of issuance of the purchase order & the remaining 60% to be paid at the time of delivery.\"},{\"topic\":\"STANDARD DELIVERY\",\"message\":\"The items shown on the Quality Available column are available & can be delivered immediately after receipt of order confirmation from your end. (Subject to availability on first come first served basis)<br>Remaining items can be delivered 12-14 weeks after receipt of order confirmation from your end.\"},{\"topic\":\"EXPEDITED DELIVERY\",\"message\":\"<strong>Urgent delivery is possible on a case-by-case basis and is subjected to additional charges.</strong>\"},{\"topic\":\"VALIDITY OF OFFER\",\"message\":\"7 days from the date of issuance of this quotation.<br>(Priority would be given on first come first served basis)\"},{\"topic\":\"BRAND\",\"message\":\"Festo, Germany\"},{\"topic\":\"PARTIAL DELIVERY\",\"message\":\"To be allowed\"}]', 1);

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

--
-- Dumping data for table `revised_product`
--

INSERT INTO `revised_product` (`r_product_id`, `r_quotation_id`, `r_product_name`, `r_product_part_no`, `r_internal_part_no`, `r_product_type`, `r_product_quantity`, `r_product_price`, `r_product_description`) VALUES
(3, 2, 'Pressure sensor', '529964', '529964', ' SDE1-D10-G2-HQ4-L-P1-M8', 1, '25408.12', 'Pressure sensor SDE1-D10-G2-HQ4-L-P1-M8'),
(4, 3, 'Ball valve VAPB-1', '534308', '534308', ' 1/2-F-25-F0405', 1, '7548.02', 'Ball valve VAPB-1 1/2-F-25-F0405');

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

--
-- Dumping data for table `revised_quotation`
--

INSERT INTO `revised_quotation` (`revised_id`, `r_quotation`, `r_quota_date`, `r_quota_no`, `r_company_name`, `r_branch_name`, `r_address`, `r_contact_person`, `r_person_id`, `r_designation`, `r_status`, `r_contact_by`, `r_remarks`, `r_managed_by`, `r_state`, `r_doc_data`, `r_terms_condition`) VALUES
(2, 19, 1577782991, 'FSQT / TISPIL / SL 31 / 01', 'The IBN SINA Pharmaceutical Industry Ltd.', 'Corporate Office', 'Tanim Center, 3 Asad Gate, Mohammadpur, Dhaka-1207', 'Mr. Md. Nazimul Hauque Murad', 1, 'Assistant General Manager', 'Preparing', 'Nasir Uddin', '', 'admin', 'Complete', '{\"pdfId\":null,\"pdfSubject\":\"Quotation for Supply of Festo Pneumatic Components\",\"pdfBody\":\"Dear Sir,<br>As desired, please find below our quotations for Festo Pneumatic Components for favourable evaluation at your end.\",\"pdfVat\":7.5,\"suggestion\":\"We look forward to being favored with your valuable order in due course.<br>Should you require any other information, please do not hesitate to contact us.\"}', '[{\"topic\":\"STANDARD DELIVERY\",\"message\":\"Cash cheque / Account payee cheque at the time of delivery.\"},{\"topic\":\"EXPEDITED DELIVERY\",\"message\":\"<strong>Urgent delivery is possible on a case-by-case basis and is subjected to additional charges.</strong>\"},{\"topic\":\"VALIDITY OF OFFER\",\"message\":\"7 days from the date of issuance of this quotation.<br>(Priority would be given on first come first served basis)\"},{\"topic\":\"BRAND\",\"message\":\"Festo, Germany\"},{\"topic\":\"PARTIAL DELIVERY\",\"message\":\"To be allowed\"}]'),
(3, 21, 1577862989, 'FSQT / TISPIL / TA 01 / 20', 'The IBN SINA Pharmaceutical Industry Ltd.', 'Corporate Office', 'Tanim Center, 3 Asad Gate, Mohammadpur, Dhaka-1207', 'Mr. Md. Nazimul Hauque Murad', 1, 'Assistant General Manager', 'Preparing', 'Admin Manager', '', 'admin', 'Complete', '{\"pdfId\":null,\"pdfSubject\":\"Quotation for Supply of Festo Pneumatic Components\",\"pdfBody\":\"Dear Sir,<br>As desired, please find below our quotations for Festo Pneumatic Components for favourable evaluation at your end.\",\"pdfVat\":7.5,\"suggestion\":\"We look forward to being favored with your valuable order in due course.<br>Should you require any other information, please do not hesitate to contact us.\"}', '[{\"topic\":\"PAYMENT\",\"message\":\"Cash cheque / Account payee cheque at the time of delivery.\"},{\"topic\":\"STANDARD DELIVERY\",\"message\":\"12-14 weeks after receipt of order confirmation from your end.<br>(Subject to availability on first come first served basis).\"},{\"topic\":\"EXPEDITED DELIVERY\",\"message\":\"<strong>Urgent delivery is possible on a case-by-case basis and is subjected to additional charges.</strong>\"},{\"topic\":\"VALIDITY OF OFFER\",\"message\":\"7 days from the date of issuance of this quotation.<br>(Priority would be given on first come first served basis)\"},{\"topic\":\"BRAND\",\"message\":\"Festo, Germany\"},{\"topic\":\"PARTIAL DELIVERY\",\"message\":\"To be allowed\"}]');

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
-- Dumping data for table `update_quotation_history`
--

INSERT INTO `update_quotation_history` (`u_quota_id`, `updated_on`, `u_quota_date`, `u_quota_no`, `u_status`, `u_quotation`, `products`, `price`) VALUES
(14, 1577783435, 1577782991, 'FSQT / TISPIL / SL 31 / 01', 'Loss', 19, '[{\"productId\":null,\"productName\":\"Pressure sensor\",\"productPartNumber\":\"529964\",\"internalPartNumber\":\"529964\",\"productType\":\" SDE1-D10-G2-HQ4-L-P1-M8\",\"productQty\":\"1\",\"productQtyAvailable\":\"1\",\"productUnit\":\"pc\",\"productPrice\":\"25408.12\",\"productDescription\":\"Pressure sensor SDE1-D10-G2-HQ4-L-P1-M8\",\"totalPrice\":25408.12}]', '25408.12'),
(15, 1577783561, 1577782991, 'FSQT / TISPIL / SL 31 / 01', 'Loss', 19, '[{\"productId\":null,\"productName\":\"Pressure sensor\",\"productPartNumber\":\"529964\",\"internalPartNumber\":\"529964\",\"productType\":\" SDE1-D10-G2-HQ4-L-P1-M8\",\"productQty\":\"1\",\"productQtyAvailable\":\"1\",\"productUnit\":\"pc\",\"productPrice\":\"25408.12\",\"productDescription\":\"Pressure sensor SDE1-D10-G2-HQ4-L-P1-M8\",\"totalPrice\":25408.12}]', '25408.12'),
(16, 1577783607, 1577782991, 'FSQT / TISPIL / SL 31 / 01', 'Loss', 19, '[{\"productId\":null,\"productName\":\"Pressure sensor\",\"productPartNumber\":\"529964\",\"internalPartNumber\":\"529964\",\"productType\":\" SDE1-D10-G2-HQ4-L-P1-M8\",\"productQty\":\"1\",\"productQtyAvailable\":\"1\",\"productUnit\":\"pc\",\"productPrice\":\"25408.12\",\"productDescription\":\"Pressure sensor SDE1-D10-G2-HQ4-L-P1-M8\",\"totalPrice\":25408.12}]', '25408.12'),
(17, 1577863038, 1577862989, 'FSQT / TISPIL / TA 01 / 20', 'Preparing', 21, '[{\"productId\":null,\"productName\":\"Ball valve VAPB-1\",\"productPartNumber\":\"534308\",\"internalPartNumber\":\"534308\",\"productType\":\" 1/2-F-25-F0405\",\"productQty\":\"1\",\"productQtyAvailable\":\"1\",\"productUnit\":\"pc\",\"productPrice\":\"7548.02\",\"productDescription\":\"Ball valve VAPB-1 1/2-F-25-F0405\",\"totalPrice\":7548.02}]', '7548.02');

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
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `quotation`
--
ALTER TABLE `quotation`
  MODIFY `quota_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `revised_product`
--
ALTER TABLE `revised_product`
  MODIFY `r_product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `revised_quotation`
--
ALTER TABLE `revised_quotation`
  MODIFY `revised_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `update_quotation_history`
--
ALTER TABLE `update_quotation_history`
  MODIFY `u_quota_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

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
