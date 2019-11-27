-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 27, 2019 at 10:44 AM
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
-- Database: `festo_product_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productId` int(11) NOT NULL,
  `productName` varchar(200) NOT NULL,
  `productPartNo` varchar(100) NOT NULL,
  `productType` varchar(100) NOT NULL,
  `productCategory` varchar(50) NOT NULL,
  `productDescription` text NOT NULL,
  `productPrice` decimal(10,2) NOT NULL,
  `productBasePrice` decimal(10,2) NOT NULL,
  `productInStock` int(11) NOT NULL COMMENT 'Product in stock',
  `productUuq` int(11) NOT NULL COMMENT 'Quantity of upcoming product',
  `productLoan` int(11) NOT NULL COMMENT 'Number of lent product',
  `productBooking` int(11) NOT NULL COMMENT 'Number of booked product by customers',
  `productOrigin` varchar(100) NOT NULL,
  `productAddedOn` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product_price_revision`
--

CREATE TABLE `product_price_revision` (
  `revisionId` int(11) NOT NULL,
  `product` int(11) NOT NULL,
  `revisionPrice` decimal(10,2) NOT NULL,
  `revisionDate` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product_quantity_revision`
--

CREATE TABLE `product_quantity_revision` (
  `revisionId` int(11) NOT NULL,
  `product` int(11) NOT NULL,
  `revisionInStock` int(11) NOT NULL,
  `revisionDate` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productType`),
  ADD UNIQUE KEY `productId_2` (`productId`),
  ADD KEY `productId` (`productId`),
  ADD KEY `productId_3` (`productId`);

--
-- Indexes for table `product_price_revision`
--
ALTER TABLE `product_price_revision`
  ADD PRIMARY KEY (`revisionId`),
  ADD KEY `product` (`product`);

--
-- Indexes for table `product_quantity_revision`
--
ALTER TABLE `product_quantity_revision`
  ADD PRIMARY KEY (`revisionId`),
  ADD KEY `product` (`product`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `product_price_revision`
--
ALTER TABLE `product_price_revision`
  MODIFY `revisionId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `product_quantity_revision`
--
ALTER TABLE `product_quantity_revision`
  MODIFY `revisionId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product_price_revision`
--
ALTER TABLE `product_price_revision`
  ADD CONSTRAINT `product_price_revision_ibfk_1` FOREIGN KEY (`product`) REFERENCES `products` (`productId`) ON DELETE CASCADE;

--
-- Constraints for table `product_quantity_revision`
--
ALTER TABLE `product_quantity_revision`
  ADD CONSTRAINT `product_quantity_revision_ibfk_1` FOREIGN KEY (`product`) REFERENCES `products` (`productId`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
