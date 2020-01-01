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
  `productType` varchar(200) NOT NULL,
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

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productId`, `productName`, `productPartNo`, `productType`, `productCategory`, `productDescription`, `productPrice`, `productBasePrice`, `productInStock`, `productUuq`, `productLoan`, `productBooking`, `productOrigin`, `productAddedOn`) VALUES
(29, 'Ball valve VAPB-1', '534308', ' 1/2-F-25-F0405', '', 'Ball valve VAPB-1 1/2-F-25-F0405', '7548.02', '0.00', 4, 0, 0, 0, 'IT', 1562824800),
(28, 'Ball valve VAPB-1', '534307', ' 1/4-F-40-F0405', '', 'Ball valve VAPB-1 1/4-F-40-F0405', '5966.62', '0.00', 4, 0, 0, 0, 'DE', 1562824800),
(196, 'Compact cyl.', '572682', ' ADN-50-10-I-PPS-A', '', 'Compact cyl. ADN-50-10-I-PPS-A', '13115.85', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(204, 'Compact cyl.', '572685', ' ADN-50-25-I-PPS-A', 'Plastic Tubing', 'Compact cyl. ADN-50-25-I-PPS-A', '13939.41', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(192, 'Compact cyl.', '554241', ' ADNGF-32-20-P-A', '', 'Compact cyl. ADNGF-32-20-P-A', '14479.71', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(154, 'Sh/stroke cyl.', '188309', ' ADVC-80-15-I-P-A', '', 'Sh/stroke cyl. ADVC-80-15-I-P-A', '22773.27', '0.00', 4, 0, 0, 0, 'DE', 1568959200),
(46, 'Compact cyl.', '156517', ' ADVU-20-20-P-A', '', 'Compact cyl. ADVU-20-20-P-A', '62.32', '0.00', 1, 0, 0, 0, 'DE', 1563602400),
(180, 'Compact cyl.', '156553', ' ADVU-50-25-P-A', '', 'Compact cyl. ADVU-50-25-P-A', '21594.55', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(175, 'Compact cyl.', '156556', ' ADVU-50-50-P-A', '', 'Compact cyl. ADVU-50-50-P-A', '24004.04', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(238, 'Solenoid valve', '6686', ' BMCH-2-3-1/8', '', 'Solenoid valve BMCH-2-3-1/8', '31771.58', '0.00', 1, 0, 0, 0, 'DE', 1569823200),
(190, 'Safety module', '1501330', ' CAMC-G-S1', '', 'Safety module CAMC-G-S1', '34127.33', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(191, 'interface', '547450', ' CAMC-PB', '', 'interface CAMC-PB', '77086.13', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(232, 'Quick connector', '2032', ' CK-3/8-PK-6', '', 'Quick connector CK-3/8-PK-6', '393.42', '0.00', 10, 0, 0, 0, 'DE', 1569823200),
(189, 'Motor control.', '1501327', ' CMMP-AS-C5-11A-P3-M3', '', 'Motor control. CMMP-AS-C5-11A-P3-M3', '485278.32', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(45, 'Solenoid valve', '196941', ' CPE14-M1BH-5L-1/8', '', 'Solenoid valve CPE14-M1BH-5L-1/8', '72.85', '0.00', 1, 0, 0, 0, 'DE', 1563602400),
(43, 'Solenoid valve', '196942', ' CPE14-M1BH-5LS-1/8', '', 'Solenoid valve CPE14-M1BH-5LS-1/8', '75.08', '0.00', 1, 0, 0, 0, 'DE', 1563602400),
(228, 'Solenoid valve', '161416', ' CPV10-M1H-2X3-GLS-M7', '', 'Solenoid valve CPV10-M1H-2X3-GLS-M7', '16414.81', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(226, 'Solenoid valve', '161362', ' CPV14-M1H-2X3-GLS-1/8', '', 'Solenoid valve CPV14-M1H-2X3-GLS-1/8', '16809.69', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(227, 'Solenoid valve', '161363', ' CPV14-M1H-2X3-OLS-1/8', '', 'Solenoid valve CPV14-M1H-2X3-OLS-1/8', '16809.69', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(225, 'Solenoid valve', '161360', ' CPV14-M1H-5LS-1/8', '', 'Solenoid valve CPV14-M1H-5LS-1/8', '12339.45', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(27, 'Axis control', '548932', ' CPX-CMAX-C1-1', '', 'Axis control CPX-CMAX-C1-1', '74361.33', '0.00', 1, 0, 0, 0, 'DE', 1562824800),
(158, 'Guided drive', '170844', ' DFM-20-50-P-A-GF', '', 'Guided drive DFM-20-50-P-A-GF', '34091.51', '0.00', 2, 0, 0, 0, 'DE', 1568959200),
(88, 'Stopper cyl.', '576152', ' DFSP-50-30-PS-PA', '', 'Stopper cyl. DFSP-50-30-PS-PA', '21104.70', '0.00', 6, 0, 0, 0, 'DE', 1568613600),
(164, 'Linear drive', '161781', ' DGP-32-2000-PPV-A-B', '', 'Linear drive DGP-32-2000-PPV-A-B', '0.00', '0.00', 2, 0, 0, 0, 'DE', 1568959200),
(182, 'ISO cylinder', '163472', ' DNC-100-200-PPV-A', '', 'ISO cylinder DNC-100-200-PPV-A', '37992.41', '0.00', 1, 0, 0, 0, 'HU', 1569650400),
(200, 'ISO cylinder', '163309', ' DNC-32-100-PPV-A', '', 'ISO cylinder DNC-32-100-PPV-A', '13288.95', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(37, 'ISO cylinder', '163407', ' DNC-63-160-PPV-A', '', 'ISO cylinder DNC-63-160-PPV-A', '21824.69', '0.00', 1, 0, 0, 0, 'DE', 1563343200),
(179, 'ISO cylinder', '163438', ' DNC-80-125-PPV-A', '', 'ISO cylinder DNC-80-125-PPV-A', '27562.33', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(176, 'ISO cylinder', '163441', ' DNC-80-250-PPV-A', '', 'ISO cylinder DNC-80-250-PPV-A', '29681.57', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(195, 'ISO cylinder', '1376471', ' DSBC-32-100-PPSA-N3', '', 'ISO cylinder DSBC-32-100-PPSA-N3', '14776.96', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(206, 'ISO cylinder', '1376667', ' DSBC-40-500-PPVA-N3', '', 'ISO cylinder DSBC-40-500-PPVA-N3', '21069.98', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(203, 'ISO cylinder', '1463766', ' DSBC-50-450-PPVA-N3', '', 'ISO cylinder DSBC-50-450-PPVA-N3', '24147.42', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(153, 'Semi-rot. drive', '547582', ' DSM-32-270-P-A-B', '', 'Semi-rot. drive DSM-32-270-P-A-B', '49798.08', '0.00', 1, 0, 0, 0, 'DE', 1568959200),
(47, 'ISO cylinder', '5066', ' DSN-20-25-P', '', 'ISO cylinder DSN-20-25-P', '0.00', '0.00', 1, 0, 0, 0, 'DE', 1563602400),
(156, 'ISO cylinder', '5068', ' DSN-20-50-P', '', 'ISO cylinder DSN-20-50-P', '0.00', '0.00', 6, 0, 0, 0, 'DE', 1568959200),
(197, 'ISO cylinder', '19251', ' DSNU-25-200-PPV-A', '', 'ISO cylinder DSNU-25-200-PPV-A', '10631.16', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(166, 'ISO cylinder', '19245', ' DSNU-25-40-PPV-A', '', 'ISO cylinder DSNU-25-40-PPV-A', '9952.73', '0.00', 2, 0, 0, 0, 'DE', 1569391200),
(244, 'Round cylinder', '195986', ' DSNU-32-160-P-A', '', 'Round cylinder DSNU-32-160-P-A', '10832.24', '0.00', 2, 0, 0, 0, 'DE', 1569823200),
(1, 'Flat cylinder', '161228', ' DZF-12-80-A-P-A', '', 'Flat cylinder DZF-12-80-A-P-A', '18303.94', '0.00', 1, 0, 0, 0, 'DE', 1562479200),
(44, 'Flat cylinder', '164037', ' DZF-32-15-P-A-S2', '', 'Flat cylinder DZF-32-15-P-A-S2', '147.22', '0.00', 1, 0, 0, 0, 'DE', 1563602400),
(188, 'Gear unit', '552197', ' EMGA-120-P-G5-SAS-100', '', 'Gear unit EMGA-120-P-G5-SAS-100', '193020.86', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(187, 'Servo motor', '550128', ' EMMS-AS-100-M-HS-RM', '', 'Servo motor EMMS-AS-100-M-HS-RM', '378371.34', '0.00', 1, 0, 0, 0, 'IN', 1569650400),
(230, 'Clamping module', '150683', ' EV-20-4', '', 'Clamping module EV-20-4', '5278.86', '0.00', 1, 0, 0, 0, 'DE', 1569823200),
(21, 'Foot valve', '8992', ' F-5-1/4-B', '', 'Foot valve F-5-1/4-B', '33696.84', '0.00', 8, 0, 0, 0, 'BR', 1562824800),
(233, 'T-distributor', '6275', ' FCK-3-PK-6-KU', '', 'T-distributor FCK-3-PK-6-KU', '545.55', '0.00', 10, 0, 0, 0, 'DE', 1569823200),
(208, 'Guide unit', '34481', ' FENG-32-100-GF', '', 'Guide unit FENG-32-100-GF', '50473.53', '0.00', 1, 0, 0, 0, 'HU', 1569650400),
(183, '1-way contr.val', '193152', ' GRLA-1/2-QS-12-D', '', '1-way contr.val GRLA-1/2-QS-12-D', '4772.54', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(194, '1-way contr.val', '151165', ' GRLA-1/8-B', '', '1-way contr.val GRLA-1/8-B', '3380.08', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(198, '1-way contr.val', '193144', ' GRLA-1/8-QS-6-D', '', '1-way contr.val GRLA-1/8-QS-6-D', '2099.09', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(169, '1-way contr.val', '151169', ' GRLA-1/8-RS-B', '', '1-way contr.val GRLA-1/8-RS-B', '3909.10', '0.00', 2, 0, 0, 0, 'DE', 1569391200),
(178, '1-way contr.val', '151178', ' GRLA-3/8-B', '', '1-way contr.val GRLA-3/8-B', '5148.52', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(171, '1-way contr.val', '193139', ' GRLA-M5-QS-6-D', '', '1-way contr.val GRLA-M5-QS-6-D', '2099.09', '0.00', 5, 0, 0, 0, 'DE', 1569391200),
(207, '1-way contr.val', '525670', ' GRXA-HG-1/4-QS-8', '', '1-way contr.val GRXA-HG-1/4-QS-8', '10555.89', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(209, '1-way contr.val', '525668', ' GRXA-HG-1/8-QS-6', '', '1-way contr.val GRXA-HG-1/8-QS-6', '8762.88', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(48, 'On/off valve', '172950', ' HEE-3/4-D-MAXI-24', '', 'On/off valve HEE-3/4-D-MAXI-24', '77.04', '0.00', 1, 0, 0, 0, 'HU', 1563602400),
(184, 'Pil.check valve', '530033', ' HGL-1/2-B', '', 'Pil.check valve HGL-1/2-B', '9637.66', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(177, 'Pil.check valve', '530032', ' HGL-3/8-B', '', 'Pil.check valve HGL-3/8-B', '8434.13', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(174, 'Solenoid valve', '10166', ' JMFH-5-1/2', '', 'Solenoid valve JMFH-5-1/2', '33704.40', '0.00', 3, 0, 0, 0, 'CN', 1569391200),
(236, 'Solenoid valve', '8820', ' JMFH-5-1/8', '', 'Solenoid valve JMFH-5-1/8', '18158.70', '0.00', 1, 0, 0, 0, 'CN', 1569823200),
(220, 'Service unit', '185787', ' LFR-1/2-D-MIDI-KG', '', 'Service unit LFR-1/2-D-MIDI-KG', '66757.97', '0.00', 1, 0, 0, 0, 'HU', 1569650400),
(52, 'filt. regulator', '159632', ' LFR-3/4-D-MAXI', '', 'filt. regulator LFR-3/4-D-MAXI', '121.39', '0.00', 1, 0, 0, 0, 'HU', 1563602400),
(212, 'Press regulator', '162583', ' LR-1/4-D-7-MINI', '', 'Press regulator LR-1/4-D-7-MINI', '5688.08', '0.00', 1, 0, 0, 0, 'HU', 1569650400),
(224, 'Press regulator', '162582', ' LR-1/8-D-7-MINI', '', 'Press regulator LR-1/8-D-7-MINI', '5688.08', '0.00', 1, 0, 0, 0, 'HU', 1569650400),
(215, 'Press regulator', '162585', ' LR-3/8-D-7-MIDI', '', 'Press regulator LR-3/8-D-7-MIDI', '8547.50', '0.00', 1, 0, 0, 0, 'HU', 1569650400),
(91, 'Prec. regulator', '159502', ' LRP-1/4-10', '', 'Prec. regulator LRP-1/4-10', '26565.82', '0.00', 1, 0, 0, 0, 'HU', 1568613600),
(214, 'Pressure gauge', '359873', ' MA-50-10-1/4', '', 'Pressure gauge MA-50-10-1/4', '1916.41', '0.00', 1, 0, 0, 0, 'PL', 1569650400),
(20, 'Precision gauge', '161128', ' MAP-40-16-1/8-EN', '', 'Precision gauge MAP-40-16-1/8-EN', '2194.43', '0.00', 2, 0, 0, 0, 'BG', 1562824800),
(9, 'Precision gauge', '162842', ' MAP-40-4-1/8-EN', '', 'Precision gauge MAP-40-4-1/8-EN', '2194.43', '0.00', 1, 0, 0, 0, 'BG', 1562824800),
(239, 'Solenoid valve', '2187', ' MC-2-1/8', '', 'Solenoid valve MC-2-1/8', '14612.36', '0.00', 1, 0, 0, 0, 'DE', 1569823200),
(223, 'Illumin. seal', '151717', ' MEB-LD-12-24DC', '', 'Illumin. seal MEB-LD-12-24DC', '1833.04', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(157, 'Solenoid valve', '9857', ' MFH-3-1/2', '', 'Solenoid valve MFH-3-1/2', '22991.70', '0.00', 4, 0, 0, 0, 'CN', 1568959200),
(161, 'Solenoid valve', '15901', ' MFH-5-1/4-B', '', 'Solenoid valve MFH-5-1/4-B', '16099.29', '0.00', 20, 0, 0, 0, 'CN', 1568959200),
(155, 'Solenoid valve', '10349', ' MFH-5-1/4-S', '', 'Solenoid valve MFH-5-1/4-S', '15674.24', '0.00', 4, 0, 0, 0, 'IN', 1568959200),
(213, 'Solenoid valve', '535920', ' MFH-5-3/8-B-EX', '', 'Solenoid valve MFH-5-3/8-B-EX', '22409.77', '0.00', 1, 0, 0, 0, 'CN', 1569650400),
(24, 'Solenoid valve', '533138', ' MLH-5-1/4-B', '', 'Solenoid valve MLH-5-1/4-B', '9800.14', '0.00', 4, 0, 0, 0, 'CN', 1562824800),
(26, 'Displ. encoder', '178302', ' MME-MTS-1250-TLF-AIF', '', 'Displ. encoder MME-MTS-1250-TLF-AIF', '251557.75', '0.00', 1, 0, 0, 0, 'DE', 1562824800),
(54, 'Solenoid valve', '161727', ' MN1H-2-3/8-MS', '', 'Solenoid valve MN1H-2-3/8-MS', '77.63', '0.00', 1, 0, 0, 0, 'DE', 1563602400),
(243, 'Sub-base-SET', '537137', ' MS12-AGH', '', 'Sub-base-SET MS12-AGH', '5489.11', '0.00', 6, 0, 0, 0, 'HU', 1569823200),
(40, 'Sub-base-SET', '537138', ' MS12-AGI', '', 'Sub-base-SET MS12-AGI', '5650.55', '0.00', 1, 0, 0, 0, 'HU', 1563343200),
(237, 'Solenoid coil', '4534', ' MSFW-24-50/60', '', 'Solenoid coil MSFW-24-50/60', '2263.24', '0.00', 1, 0, 0, 0, 'DE', 1569823200),
(49, 'Solenoid coil', '123060', ' MSN1G-24DC-OD', '', 'Solenoid coil MSN1G-24DC-OD', '10.43', '0.00', 1, 0, 0, 0, 'DE', 1563602400),
(222, 'Plug socket', '151687', ' MSSD-EB', '', 'Plug socket MSSD-EB', '319.30', '0.00', 1, 0, 0, 0, 'PL', 1569650400),
(8, 'Plug s. w cable', '566654', ' NEBV-H1G2-KN-0.5-N-LE2', '', 'Plug s. w cable NEBV-H1G2-KN-0.5-N-LE2', '262.45', '0.00', 1, 0, 0, 0, 'BG', 1562479200),
(6, 'Plug s. w cable', '566655', ' NEBV-H1G2-KN-1-N-LE2', '', 'Plug s. w cable NEBV-H1G2-KN-1-N-LE2', '395.94', '0.00', 1, 0, 0, 0, 'BG', 1562479200),
(173, 'PE converter', '3344', ' PE-1/8', '', 'PE converter PE-1/8', '35183.77', '0.00', 1, 0, 0, 0, 'BG', 1569391200),
(51, 'Pressure switch', '10773', ' PEV-1/4-B', '', 'Pressure switch PEV-1/4-B', '92.99', '0.00', 1, 0, 0, 0, 'HU', 1563602400),
(221, 'Angled socket', '164274', ' PEV-1/4-WD-LED-24', '', 'Angled socket PEV-1/4-WD-LED-24', '2558.12', '0.00', 1, 0, 0, 0, 'HU', 1569650400),
(17, 'Plastic tubing', '197378', ' PUN-H-8X1-25-NT', '', 'Plastic tubing PUN-H-8X1-25-NT', '169.72', '0.00', 200, 0, 0, 0, 'CZ', 1562824800),
(13, 'Push-in fitting', '153002', ' QS-1/8-6', '', 'Push-in fitting QS-1/8-6', '220.32', '0.00', 50, 0, 0, 0, 'JP', 1562824800),
(14, 'P/in connector', '153034', ' QS-10', '', 'P/in connector QS-10', '564.78', '0.00', 40, 0, 0, 0, 'JP', 1562824800),
(19, 'P/in connector', '153035', ' QS-12', '', 'P/in connector QS-12', '666.20', '0.00', 50, 0, 0, 0, 'JP', 1562824800),
(12, 'Push-in fitting', '190645', ' QS-3/8-6', '', 'Push-in fitting QS-3/8-6', '292.01', '0.00', 50, 0, 0, 0, 'JP', 1562824800),
(16, 'P/in connector', '153033', ' QS-8', '', 'P/in connector QS-8', '428.39', '0.00', 40, 0, 0, 0, 'JP', 1562824800),
(168, 'Push-in L-conn.', '153057', ' QSL-6H', '', 'Push-in L-conn. QSL-6H', '413.99', '0.00', 10, 0, 0, 0, 'JP', 1569391200),
(172, 'Push-in L-fit', '153335', ' QSML-M5-6', '', 'Push-in L-fit QSML-M5-6', '405.66', '0.00', 5, 0, 0, 0, 'JP', 1569391200),
(10, 'Pressure sensor', '529964', ' SDE1-D10-G2-HQ4-L-P1-M8', '', 'Pressure sensor SDE1-D10-G2-HQ4-L-P1-M8', '25408.12', '0.00', 3, 0, 0, 0, 'BG', 1562824800),
(39, 'Rod clevis', '6146', ' SG-M16X1/5', '', 'Rod clevis SG-M16X1/5', '2188.77', '0.00', 1, 0, 0, 0, 'DE', 1563343200),
(87, 'Prox. sensor', '160251', ' SME-8-O-K-LED-24', '', 'Prox. sensor SME-8-O-K-LED-24', '8894.28', '0.00', 2, 0, 0, 0, 'BG', 1568613600),
(90, 'Prox. sensor', '574335', ' SMT-8M-A-PS-24V-E-25-OE', '', 'Prox. sensor SMT-8M-A-PS-24V-E-25-OE', '6991.05', '0.00', 6, 0, 0, 0, 'BG', 1568613600),
(229, 'Prox. sensor', '152742', ' SMTO-4U-PS-S-LED-24', '', 'Prox. sensor SMTO-4U-PS-S-LED-24', '25339.78', '0.00', 2, 0, 0, 0, 'CH', 1569823200),
(38, 'Swivel flange', '176945', ' SNCB-40-R3', '', 'Swivel flange SNCB-40-R3', '3853.74', '0.00', 1, 0, 0, 0, 'IN', 1563343200),
(89, 'Stopper cyl.', '164889', ' STA-50-30-P-A', '', 'Stopper cyl. STA-50-30-P-A', '0.00', '0.00', 6, 0, 0, 0, '0', 1568613600),
(32, 'Hand lever', '542703', ' VAOH-11-H9', '', 'Hand lever VAOH-11-H9', '5297.78', '0.00', 4, 0, 0, 0, 'TW', 1562824800),
(33, 'Hand lever', '542704', ' VAOH-14-H9', '', 'Hand lever VAOH-14-H9', '6442.74', '0.00', 4, 0, 0, 0, 'TW', 1562824800),
(216, 'Pneumatic valve', '14299', ' VL-5/3B-1/4-B', '', 'Pneumatic valve VL-5/3B-1/4-B', '18819.98', '0.00', 1, 0, 0, 0, 'CN', 1569650400),
(219, 'Pneumatic valve', '14298', ' VL-5/3G-1/4-B', '', 'Pneumatic valve VL-5/3G-1/4-B', '18819.98', '0.00', 1, 0, 0, 0, 'CN', 1569650400),
(4, 'Prop-press reg.', '557775', ' VPPE-3-1-1/8-6-420-E1', '', 'Prop-press reg. VPPE-3-1-1/8-6-420-E1', '59278.57', '0.00', 1, 0, 0, 0, 'HU', 1562479200),
(42, 'Solenoid valve', '566499', ' VUVG-L14-M52-AT-G18-1P3', '', 'Solenoid valve VUVG-L14-M52-AT-G18-1P3', '48.00', '0.00', 1, 0, 0, 0, 'DE', 1563602400),
(234, 'Solenoid valve', '566505', ' VUVG-L14-T32C-AZT-G18-1&', '', 'Solenoid valve VUVG-L14-T32C-AZT-G18-1&', '12823.13', '0.00', 1, 0, 0, 0, 'DE', 1569823200),
(7, 'Solenoid valve', '8042547', ' VUVG-LK10-M52-AT-M7-1H2', '', 'Solenoid valve VUVG-LK10-M52-AT-M7-1H2&', '7213.77', '0.00', 1, 0, 0, 0, 'DE', 1562479200),
(5, 'Solenoid valve', '8042546', ' VUVG-LK10-T32C-AT-M7-1H', '', 'Solenoid valve VUVG-LK10-T32C-AT-M7-1H&', '10327.61', '0.00', 1, 0, 0, 0, 'DE', 1562479200),
(31, 'Ball valve', '1686643', ' VZBA-11/2-GG-63-T-22-F&', '', 'Ball valve VZBA-11/2-GG-63-T-22-F&', '30031.47', '0.00', 4, 0, 0, 0, 'TW', 1562824800),
(30, 'Ball valve', '1686641', ' VZBA-11/4-GG-63-T-22-F&', '', 'Ball valve VZBA-11/4-GG-63-T-22-F&', '22266.18', '0.00', 4, 0, 0, 0, 'TW', 1562824800),
(3, 'Angle seat val.', '1002517', ' VZXF-L-M22C-M-B-G1-240', '', 'Angle seat val. VZXF-L-M22C-M-B-G1-240-&', '54370.68', '0.00', 2, 0, 0, 0, 'DE', 1562479200),
(34, 'VALVE TERMINAL', '18200', '10P-10-4A-MP-R-V-MCMM+HA', '', 'VALVE TERMINAL CPV10-VI', '91092.00', '0.00', 1, 0, 0, 0, 'DE', 1562824800),
(262, ' VALVE TERMINAL', '18210', '10P-14-6B-MP-R-V-6M+ZHSA', '', 'CPV14-VI VALVE TERMINAL', '144712.46', '0.00', 1, 0, 0, 0, 'DE', 1566626400),
(217, 'VALVE TERMINAL', '18210', '10P-14-8C-D2-R-Z-MCJCJNJM+GCPTNB', '', 'VALVE TERMINAL CPV14-VI', '215521.87', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(218, 'VALVE TERMINAL', '18210', '10P-14-8C-FB-R-Z-5JCLC+PT', '', 'VALVE TERMINAL CPV14-VI', '216557.24', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(210, 'VALVE TERMINAL', '18210', '10P-14-8C-FB-R-Z-JCJJCLLJ+PT', '', 'VALVE TERMINAL CPV14-VI', '201765.40', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(199, ' VALVE TERMINAL', '18210', '10P-14-8C-MP-R-Y-7JC+ZUR', '', 'CPV14-VI VALVE TERMINAL', '195963.93', '0.00', 1, 0, 0, 0, 'DE', 1563861600),
(167, 'Compact cyl.', '536233', 'ADN-20-10-A-P-A-S20', '', 'Compact cyl. ADN-20-10', '10018.66', '0.00', 6, 0, 0, 0, 'DE', 1569391200),
(283, ' - Compact cyl.', '536233', 'ADN-20-15-I-P-A-S2-M5-K5', '', 'ADN-20- - Compact cyl.', '0.00', '0.00', 1, 0, 0, 0, 'DE', 1571810400),
(62, ' Compact cyl.', '536233', 'ADN-20-30-A-P-A-S2', '', 'ADN-20-30 Compact cyl.', '9421.57', '0.00', 2, 0, 0, 0, 'DE', 1571551200),
(159, 'Compact cyl.', '536267', 'ADN-32-25-A-P-A', '', 'Compact cyl. ADN-32-25', '9640.66', '0.00', 4, 0, 0, 0, 'DE', 1568959200),
(287, ' Compact cyl.', '536342', 'ADN-63-10-I-P-A', '', 'ADN-63-10-I-P-A Compact cyl.', '14202.83', '0.00', 2, 0, 0, 0, 'DE', 1573970400),
(272, ' Compact cyl.', '536370', 'ADN-80-60-I-P-A', '', 'ADN-80-60-I-P-A Compact cyl.', '21780.76', '0.00', 1, 0, 0, 0, 'DE', 1566885600),
(285, ' Compact cyl.', '554252', 'ADNGF-40-25-P-A', '', 'ADNGF-40-25-P-A Compact cyl.', '17665.08', '0.00', 4, 0, 0, 0, 'DE', 1573970400),
(202, ' High-force cyl.', '539694', 'ADNH-100-50-I-P-A-4N', '', 'ADNH-100-50 High-force cyl.', '168997.76', '0.00', 2, 0, 0, 0, 'HU', 1563861600),
(113, ' - Multi-pos. cyl.', '539697', 'ADNM-63-I-P-A-5Z1-15Z2', '', 'ADNM-63- - Multi-pos. cyl.', '59536.25', '0.00', 1, 0, 0, 0, 'DE', 1563861600),
(273, ' Sh/stroke cyl.', '188117', 'ADVC-16-25-I-P', '', 'ADVC-16-25-I-P Sh/stroke cyl.', '5635.08', '0.00', 2, 0, 0, 0, 'DE', 1571810400),
(56, ' Compact cyl.', '156011', 'ADVU-16-25-P-A-S2', '', 'ADVU-16-25-P-A-S2 Compact cyl.', '13653.97', '0.00', 2, 0, 0, 0, 'DE', 1571551200),
(55, ' Compact cyl.', '156011', 'ADVU-16-30-P-A-S2', '', 'ADVU-16-30-P-A-S2 Compact cyl.', '13752.57', '0.00', 2, 0, 0, 0, 'DE', 1571551200),
(133, ' Compact cyl.', '156517', 'ADVU-20-20-P-A', '', 'ADVU-20-20-P-A Compact cyl.', '11217.44', '0.00', 1, 0, 0, 0, 'DE', 1563861600),
(269, ' Compact cyl.', '156094', 'ADVU-32-10-A-P-A-S6', '', 'ADVU-32-10-A-P-A-S6 Compact cyl.', '16333.38', '0.00', 20, 0, 0, 0, 'DE', 1566885600),
(270, ' Compact cyl.', '156094', 'ADVU-32-5-A-P-A-S6', '', 'ADVU-32-5-A-P-A-S6 Compact cyl.', '15957.64', '0.00', 20, 0, 0, 0, 'DE', 1566885600),
(151, ' Compact cyl.', '156005', 'ADVU-40-50-P-A', '', 'ADVU-40-50-P-A Compact cyl.', '21693.35', '0.00', 20, 0, 0, 0, 'DE', 1568700000),
(86, 'Compact cyl.', '536418', 'AEN-32-10-A-P-A', '', 'Compact cyl. AEN-32-10', '8884.67', '0.00', 2, 0, 0, 0, 'DE', 1568613600),
(101, ' Cover cap', '549198', 'AKM-40', '', 'AKM-40 Cover cap', '1323.65', '0.00', 1, 0, 0, 0, 'DE', 1563861600),
(67, ' electrical brid', '173503', 'CPA10-EB2-HR', '', 'CPA10-EB2-HR electrical brid', '0.00', '0.00', 2, 0, 0, 0, 'DE', 1566280800),
(69, ' E manifold mod.', '173506', 'CPA10-EV2', '', 'CPA10-EV2 E manifold mod.', '0.00', '0.00', 2, 0, 0, 0, 'DE', 1566280800),
(68, ' Solenoid valve', '173452', 'CPA10-M1H-2X3-GLS', '', 'CPA10-M1H-2X3-GLS Solenoid valve', '0.00', '0.00', 2, 0, 0, 0, 'DE', 1566280800),
(235, 'Contact', '173943', 'CPA14-M1H-2x3-GLS', '', 'Contact Festo', '0.00', '0.00', 1, 0, 0, 0, '', 1569823200),
(53, ' Solenoid valve', '196933', 'CPE14-M1BH-5/3B-1/8', '', 'CPE14-M1BH-5/3B-1/8 Solenoid valve', '24307.49', '0.00', 2, 0, 0, 0, 'DE', 1571551200),
(41, ' Solenoid valve', '196910', 'CPE14-M1BH-5JS-QS-8', '', 'CPE14-M1BH-5JS-QS-8 Solenoid valve', '22957.96', '0.00', 1, 0, 0, 0, 'DE', 1571551200),
(139, ' Solenoid valve', '196941', 'CPE14-M1BH-5L-1/8', '', 'CPE14-M1BH-5L-1/8 Solenoid valve', '14168.86', '0.00', 1, 0, 0, 0, 'DE', 1563861600),
(141, ' Solenoid valve', '196942', 'CPE14-M1BH-5LS-1/8', '', 'CPE14-M1BH-5LS-1/8 Solenoid valve', '14602.58', '0.00', 1, 0, 0, 0, 'DE', 1563861600),
(74, ' Multi-pin', '539505', 'CPV14-VI-P8-1/8-D', '', 'CPV14-VI-P8-1/8-D Multi-pin', '16860.23', '0.00', 2, 0, 0, 0, 'DE', 1567317600),
(71, ' Guided drive', '170910', 'DFM-16-30-P-A-KF', '', 'DFM-16-30-P-A-KF Guided drive', '37041.67', '0.00', 1, 0, 0, 0, 'DE', 1566280800),
(344, ' Guided drive', '170840', 'DFM-20-20-P-A-GF', '', 'DFM-20-20-P-A-GF Guided drive', '31036.22', '0.00', 1, 0, 0, 0, 'DE', 1566885600),
(201, 'Guided drive', '532319', 'DFM-40-125-B-PPV-A-GF', '', 'Guided drive DFM-40-125-B', '73744.94', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(70, ' Semi-rot. drive', '8048127', 'DFPD-480-RP-90-RD-F1012', '', 'DFPD-480-RP-90-RD-F1012 Semi-rot. drive', '69119.00', '0.00', 1, 0, 0, 0, 'IT', 1566280800),
(85, 'Linear drive', '530907', 'DGC-12-250-G-P-A', '', 'Linear drive DGC-12-250', '32219.54', '0.00', 2, 0, 0, 0, 'DE', 1568613600),
(93, 'Linear drive DGC-18-', '532446', 'DGC-18-320-G-P', '', 'Linear drive DGC-18- -', '0.00', '0.00', 1, 0, 0, 0, 'DE', 1568613600),
(163, 'Linear drive', '532446', 'DGC-18-320-G-PPV-A', '', 'Linear drive DGC-18-320', '43897.77', '0.00', 1, 0, 0, 0, 'DE', 1568959200),
(92, 'Linear drive DGC-18-', '532446', 'DGC-18-430-G-P', '', 'Linear drive DGC-18- -', '0.00', '0.00', 2, 0, 0, 0, 'DE', 1568613600),
(162, 'Linear drive', '532446', 'DGC-18-430-G-PPV-A', '', 'Linear drive DGC-18-430', '45227.95', '0.00', 1, 0, 0, 0, 'DE', 1568959200),
(165, 'Linear drive', '1312502', 'DGC-K-32-2000-PPV-A-GK-D2', '', 'Linear drive DGC-K-32-2000', '87345.54', '0.00', 2, 0, 0, 0, 'DE', 1568959200),
(25, 'Linear drive DGP-63-', '175138', 'DGP-63-1100-PPV-A-B', 'Plastic Tubing', 'Linear drive DGP-63- -', '0.00', '0.00', 1, 0, 0, 0, 'DE', 1577770922),
(271, ' Parall. gripper', '1254044', 'DHPS-16-A-NO', '', 'DHPS-16-A-NO Parall. gripper', '60674.34', '0.00', 1, 0, 0, 0, 'IT', 1566885600),
(333, ' Angle gripper', '1310180', 'DHWS-25-A', '', 'DHWS-25-A Angle gripper', '44865.06', '0.00', 1, 0, 0, 0, 'IT', 1575871200),
(147, ' stand.based cyl', '163302', 'DNC-32-160-P-A-KP', '', 'DNC-32-160 stand.based cyl', '56452.74', '0.00', 2, 0, 0, 0, 'DE', 1568700000),
(95, ' stand.based cyl', '163305', 'DNC-32-25-PPV-A', '', 'DNC-32-25-PPV-A stand.based cyl', '13380.09', '0.00', 6, 0, 0, 0, 'DE', 1568700000),
(94, ' stand.based cyl', '163342', 'DNC-40-125-PPV-A', '', 'DNC-40-125-PPV-A stand.based cyl', '15996.58', '0.00', 6, 0, 0, 0, 'DE', 1568700000),
(76, ' AB D9 Set wear parts', '121692', 'DNG-160-PPVA', '', 'DNG-160-PPVA AB D9 Set wear parts', '51931.68', '0.00', 2, 0, 0, 0, 'IT', 1567922400),
(36, 'Set wear parts DNG-160-PPVA AB', '121692', 'DNG-160-PPVA AB D9', '', 'Set wear parts', '49302.26', '0.00', 2, 0, 0, 0, 'IT', 1563343200),
(303, ' Set wear parts', '383741', 'DNG-250-PPV/-A', '', 'DNG-250-PPV/-A Set wear parts', '67001.56', '0.00', 1, 0, 0, 0, 'DE', 1574229600),
(75, ' stand.based cyl', '34447', 'DNGZK-160-100-PPV-A', '', 'DNGZK-160-100-PPV-A stand.based cyl', '0.00', '0.00', 1, 0, 0, 0, 'DE', 1567922400),
(160, 'ISO cylinder', '1634484', 'DSBG-32-100-T-PPVA-N3', '', 'ISO cylinder DSBG-...-32-100', '24150.25', '0.00', 6, 0, 0, 0, 'DE', 1568959200),
(281, ' stand.based cyl', '1638844', 'DSBG-32-50-PPVA-N3', '', 'DSBG-32-50-PPVA-N3 stand.based cyl', '18456.05', '0.00', 4, 0, 0, 0, 'CN', 1571810400),
(282, ' stand.based cyl', '1646552', 'DSBG-40-125-PPVA-N3', '', 'DSBG-40-125-PPVA-N3 stand.based cyl', '21737.71', '0.00', 3, 0, 0, 0, 'CN', 1571810400),
(146, ' - stand.based cyl', '1645477', 'DSBG-40-25-F-PPV-A', '', 'DSBG-...-40- - stand.based cyl', '0.00', '0.00', 2, 0, 0, 0, 'DE', 1568700000),
(114, ' stand.based cyl', '1646715', 'DSBG-50-160-PPVA-N3', '', 'DSBG-50-160-PPVA-N3 stand.based cyl', '25135.14', '0.00', 20, 0, 0, 0, 'CN', 1568700000),
(109, ' stand.based cyl', '1646718', 'DSBG-50-320-PPVA-N3', '', 'DSBG-50-320-PPVA-N3 stand.based cyl', '27707.82', '0.00', 6, 0, 0, 0, 'DE', 1568700000),
(152, ' stand.based cyl', '1646708', 'DSBG-50-480-PPVA-N3', '', 'DSBG-50-480-PPVA-N3 stand.based cyl', '30280.49', '0.00', 1, 0, 0, 0, 'DE', 1568700000),
(149, ' stand.based cyl', '1646708', 'DSBG-50-800-PPVA-N3', '', 'DSBG-50-800-PPVA-N3 stand.based cyl', '35425.84', '0.00', 20, 0, 0, 0, 'DE', 1568700000),
(150, ' stand.based cyl', '1646739', 'DSBG-63-600-PPVA-N3', '', 'DSBG-63-600-PPVA-N3 stand.based cyl', '36961.40', '0.00', 7, 0, 0, 0, 'DE', 1568700000),
(58, 'Semi-rot. Drive', '547582', 'DSM-32-270-P-A-B', '', 'Semi-rot. Drive DSM-32-270-P-A-B', '49798.08', '0.00', 1, 0, 0, 0, 'BG', 1564034400),
(181, ' Semi-rot. drive', '547588', 'DSM-40-270-CC-A-B', '', 'DSM-40-270-CC-A-B Semi-rot. drive', '97304.80', '0.00', 1, 0, 0, 0, 'DE', 1563861600),
(104, ' Semi-rot. drive', '547586', 'DSM-40-270-P-A-B', '', 'DSM-40-270-P-A-B Semi-rot. drive', '62424.85', '0.00', 1, 0, 0, 0, 'DE', 1563861600),
(130, ' ISO cylinder', '5066', 'DSN-20-25-P', '', 'DSN-20-25-P ISO cylinder', '0.00', '0.00', 1, 0, 0, 0, 'DE', 1563861600),
(79, ' stand.based cyl', '5077', 'DSN-25-40-P', '', 'DSN-25-40-P stand.based cyl', '0.00', '0.00', 2, 0, 0, 0, 'DE', 1567922400),
(289, ' - stand.based cyl', '193987', 'DSNU-10-10-P-MF', '', 'DSNU-10- - stand.based cyl', '0.00', '0.00', 1, 0, 0, 0, 'DE', 1573970400),
(23, ' stand.based cyl', '19190', 'DSNU-12-25-P-A', '', 'DSNU-12-25-P-A stand.based cyl', '6735.69', '0.00', 6, 0, 0, 0, 'DE', 1566626400),
(349, ' stand.based cyl', '193989', 'DSNU-16-20-P-A-MQ', '', 'DSNU-16-20 stand.based cyl', '8201.64', '0.00', 2, 0, 0, 0, 'DE', 1566885600),
(73, ' stand.based cyl', '193989', 'DSNU-16-50-PPV-A-S2', '', 'DSNU-16-50 stand.based cyl', '13195.68', '0.00', 4, 0, 0, 0, 'DE', 1571551200),
(268, ' stand.based cyl', '19215', 'DSNU-20-200-P-A', '', 'DSNU-20-200-P-A stand.based cyl', '10938.91', '0.00', 1, 0, 0, 0, 'DE', 1567058400),
(57, 'ISO cylinder', '19208', 'DSNU-20-25-P-A', '', 'ISO cylinder DSNU-20-25-P-A', '8184.48', '0.00', 1, 0, 0, 0, 'DE', 1564034400),
(102, ' stand.based cyl', '19210', 'DSNU-20-50-P-A', '', 'DSNU-20-50-P-A stand.based cyl', '8399.07', '0.00', 5, 0, 0, 0, 'DE', 1568700000),
(112, ' stand.based cyl', '19249', 'DSNU-25-125-PPV-A', '', 'DSNU-25-125-PPV-A stand.based cyl', '10769.07', '0.00', 10, 0, 0, 0, 'DE', 1568700000),
(170, ' ISO cylinder', '193991', 'DSNU-25-15-PPV-A-Q-S2', '', 'DSNU-25-15 ISO cylinder', '19544.12', '0.00', 1, 0, 0, 0, 'DE', 1563861600),
(106, ' stand.based cyl', '1908314', 'DSNU-25-20-PPV-A', '', 'DSNU-25-20-PPV-A stand.based cyl', '10305.30', '0.00', 5, 0, 0, 0, 'DE', 1568700000),
(115, ' stand.based cyl', '35193', 'DSNU-25-400-PPV-A', '', 'DSNU-25-400-PPV-A stand.based cyl', '11986.94', '0.00', 2, 0, 0, 0, 'DE', 1568700000),
(350, ' stand.based cyl', '193991', 'DSNU-25-50-P-A-MQ', '', 'DSNU-25-50 stand.based cyl', '9690.63', '0.00', 2, 0, 0, 0, 'DE', 1566885600),
(108, ' stand.based cyl', '19246', 'DSNU-25-50-PPV-A', '', 'DSNU-25-50-PPV-A stand.based cyl', '10436.76', '0.00', 6, 0, 0, 0, 'DE', 1568700000),
(186, 'ISO cylinder', '193991', 'DSNU-25-50-PPV-A-S2', '', 'ISO cylinder DSNU-25-50', '15467.64', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(185, 'ISO cylinder', '193991', 'DSNU-25-80-PPV-A-S6', '', 'ISO cylinder DSNU-25-80', '14866.14', '0.00', 1, 0, 0, 0, 'DE', 1569650400),
(117, ' Round cylinder', '195994', 'DSNU-40-100-P-A', '', 'DSNU-40-100-P-A Round cylinder', '13608.33', '0.00', 90, 0, 0, 0, 'DE', 1568700000),
(118, ' Round cylinder', '196034', 'DSNU-40-100-PPV-A', '', 'DSNU-40-100-PPV-A Round cylinder', '15286.32', '0.00', 50, 0, 0, 0, 'DE', 1568700000),
(231, 'Round cylinder', '193993', 'DSNU-40-125-P-S2', '', 'Round cylinder DSNU-40-125', '20629.35', '0.00', 1, 0, 0, 0, 'DE', 1569823200),
(77, ' Semi-rot. drive', '11911', 'DSR-25-180-P', '', 'DSR-25-180-P Semi-rot. drive', '37706.37', '0.00', 1, 0, 0, 0, 'DE', 1567922400),
(15, ' Semi-rot. drive', '30656', 'DSRL-25-180-P-FW', '', 'DSRL-25-180-P-FW Semi-rot. drive', '39546.86', '0.00', 1, 0, 0, 0, 'DE', 1566626400),
(140, ' Flat cylinder', '164037', 'DZF-32-15-P-A-S2', '', 'DZF-32-15-P-A-S2 Flat cylinder', '26499.22', '0.00', 1, 0, 0, 0, 'DE', 1563861600),
(205, ' Round cylinder', '2417', 'EG-12-40', '', 'EG-12-40 Round cylinder', '0.00', '0.00', 12, 0, 0, 0, 'DE', 1563861600),
(325, ' Round cylinder', '11647', 'EG-12-40-', '', 'EG-12-40- Round cylinder', '0.00', '0.00', 8, 0, 0, 0, 'DE', 1575871200),
(292, ' stand.based cyl', '5089', 'ESN-10-10-P', '', 'ESN-10-10-P stand.based cyl', '0.00', '0.00', 1, 0, 0, 0, 'DE', 1573970400),
(334, ' stand. Based cyl', '14317', 'ESNU-12-40-P-A', '', 'ESNU-12-40-P-A stand. Based cyl', '7437.93', '0.00', 6, 0, 0, 0, '0', 1575957600),
(326, ' stand.based cyl', '193998', 'ESNU-12-47-P-MA', '', 'ESNU-12-47-P stand.based cyl', '6557.03', '0.00', 8, 0, 0, 0, 'DE', 1575871200),
(61, ' Service unit', '159590', 'FRC-1/2-D-MIDI', '', 'FRC-1/2-D-MIDI Service unit', '18930.41', '0.00', 2, 0, 0, 0, 'HU', 1566280800),
(351, ' Service unit', '159591', 'FRC-1/2-D-MIDI-A', '', 'FRC-1/2-D-MIDI-A Service unit', '27526.49', '0.00', 1, 0, 0, 0, 'HU', 1566885600),
(80, ' 1-way contr.val', '151213', 'GR-M5-B', '', 'GR-M5-B 1-way contr.val', '6769.40', '0.00', 4, 0, 0, 0, 'IN', 1567922400),
(311, ' Exh.contr.valve', '35310', 'GRE-3/8', '', 'GRE-3/8 Exh.contr.valve', '2860.27', '0.00', 3, 0, 0, 0, 'DE', 1575439200),
(267, ' 1-way contr.val', '193145', 'GRLA-1/8-QS-8-D', '', 'GRLA-1/8-QS-8-D 1-way contr.val', '2670.27', '0.00', 2, 0, 0, 0, 'DE', 1567058400),
(264, ' F/control valve', '193973', 'GRO-QS-6', '', 'GRO-QS-6 F/control valve', '3266.45', '0.00', 1, 0, 0, 0, 'IN', 1571810400),
(309, ' On/off valve', '162810', 'HE-1/2-D-MIDI', '', 'HE-1/2-D-MIDI On/off valve', '7420.59', '0.00', 150, 0, 0, 0, 'HU', 1575439200),
(65, ' On/off valve', '165071', 'HEE-1/4-D-MINI-24', '', 'HEE-1/4-D-MINI-24 On/off valve', '10173.96', '0.00', 2, 0, 0, 0, 'HU', 1566280800),
(129, ' On/off valve', '172950', 'HEE-3/4-D-MAXI-24', '', 'HEE-3/4-D-MAXI-24 On/off valve', '14983.78', '0.00', 1, 0, 0, 0, 'HU', 1563861600),
(276, ' Mountng bracket', '159593', 'HFOE-D-MIDI/MAXI', '', 'HFOE-D-MIDI/MAXI Mountng bracket', '846.63', '0.00', 184, 0, 0, 0, 'HU', 1571810400),
(295, ' Pneumatic valve', '10772', 'J-3-PK-3', '', 'J-3-PK-3 Pneumatic valve', '14443.82', '0.00', 1, 0, 0, 0, 'DE', 1573970400),
(296, ' Pneumatic valve', '4503', 'J-5-PK-3', '', 'J-5-PK-3 Pneumatic valve', '23047.14', '0.00', 1, 0, 0, 0, 'DE', 1573970400),
(99, ' clevis foot', '31761', 'LBG-32', '', 'LBG-32 clevis foot', '9742.93', '0.00', 2, 0, 0, 0, 'CN', 1568700000),
(279, ' Micro filter', '532858', 'LFMA-1/2-D-MIDI-DA-A', '', 'LFMA-1/2-D-MIDI-DA-A Micro filter', '16550.82', '0.00', 51, 0, 0, 0, 'HU', 1571810400),
(280, ' Micro filter', '532861', 'LFMA-3/4-D-MAXI-DA-A', '', 'LFMA-3/4-D-MAXI-DA-A Micro filter', '29011.75', '0.00', 9, 0, 0, 0, 'HU', 1571810400),
(274, ' filt. regulator', '162730', 'LFR-1/2-D-5M-MIDI-A', '', 'LFR-1/2-D-5M-MIDI-A filt. regulator', '14711.21', '0.00', 42, 0, 0, 0, 'HU', 1571810400),
(286, ' filt. regulator', '159584', 'LFR-1/2-D-MIDI', '', 'LFR-1/2-D-MIDI filt. regulator', '8657.35', '0.00', 2, 0, 0, 0, 'HU', 1573970400),
(352, ' filt. regulator', '162703', 'LFR-1/4-D-7-MINI', '', 'LFR-1/4-D-7-MINI filt. regulator', '7041.22', '0.00', 1, 0, 0, 0, 'HU', 1566885600),
(123, ' filt. regulator', '159632', 'LFR-3/4-D-MAXI', '', 'LFR-3/4-D-MAXI filt. regulator', '21225.60', '0.00', 1, 0, 0, 0, 'HU', 1563861600),
(275, ' filt. regulator', '159636', 'LFR-3/4-D-MAXI-A', '', 'LFR-3/4-D-MAXI-A filt. regulator', '27155.26', '0.00', 22, 0, 0, 0, 'HU', 1571810400),
(277, ' Press regulator', '159581', 'LR-1/2-D-MIDI', '', 'LR-1/2-D-MIDI Press regulator', '9896.92', '0.00', 51, 0, 0, 0, 'HU', 1571810400),
(307, ' Press regulator', '162583', 'LR-1/4-D-7-MINI', '', 'LR-1/4-D-7-MINI Press regulator', '5978.56', '0.00', 5, 0, 0, 0, 'HU', 1575439200),
(255, ' Press regulator', '159625', 'LR-1/4-D-MINI', '', 'LR-1/4-D-MINI Press regulator', '6308.32', '0.00', 2, 0, 0, 0, 'HU', 1571810400),
(278, ' Press regulator', '159626', 'LR-3/4-D-MAXI', '', 'LR-3/4-D-MAXI Press regulator', '21931.55', '0.00', 9, 0, 0, 0, 'HU', 1571810400),
(96, ' Press regulator', '194642', 'LRS-1/2-D-MIDI', '', 'LRS-1/2-D-MIDI Press regulator', '23349.92', '0.00', 1, 0, 0, 0, 'HU', 1568700000),
(293, ' Solenoid valve', '9964', 'MFH-3-1/4', '', 'MFH-3-1/4 Solenoid valve', '13755.93', '0.00', 2, 0, 0, 0, 'IN', 1573970400),
(266, ' Solenoid valve', '6211', 'MFH-5-1/4', '', 'MFH-5-1/4 Solenoid valve', '18864.96', '0.00', 1, 0, 0, 0, 'IN', 1567058400),
(81, ' Solenoid valve', '15901', 'MFH-5-1/4-B', '', 'MFH-5-1/4-B Solenoid valve', '16324.72', '0.00', 4, 0, 0, 0, 'CN', 1568268000),
(318, ' Solenoid valve', '9982', 'MFH-5-1/8', '', 'MFH-5-1/8 Solenoid valve', '13550.64', '0.00', 6, 0, 0, 0, 'IN', 1566626400),
(82, ' Solenoid valve', '19758', 'MFH-5-1/8-B', '', 'MFH-5-1/8-B Solenoid valve', '14234.56', '0.00', 4, 0, 0, 0, 'CN', 1568268000),
(342, ' Solenoid valve', '151870', 'MFH-5/2-D-3-C', '', 'MFH-5/2-D-3-C Solenoid valve', '33010.16', '0.00', 2, 0, 0, 0, 'HU', 1566885600),
(59, ' Solenoid valve', '151032', 'MFH-5/2-D-3-S-C', '', 'MFH-5/2-D-3-S-C Solenoid valve', '34456.48', '0.00', 3, 0, 0, 0, 'HU', 1566280800),
(313, ' Solenoid valve', '196131', 'MHE2-MS1H-3/2G-M7', '', 'MHE2-MS1H-3/2G-M7 Solenoid valve', '11692.26', '0.00', 4, 0, 0, 0, 'HU', 1575439200),
(125, ' Solenoid valve', '161728', 'MN1H-2-1/2-MS', '', 'MN1H-2-1/2-MS Solenoid valve', '15098.54', '0.00', 1, 0, 0, 0, 'DE', 1563861600),
(312, ' Prop-press reg.', '161168', 'MPPE-3-1/4-10-010-B', '', 'MPPE-3-1/4-10-010-B Prop-press reg.', '121960.74', '0.00', 1, 0, 0, 0, 'BG', 1575439200),
(306, ' Prop-press reg.', '161167', 'MPPE-3-1/4-6-010-B', '', 'MPPE-3-1/4-6-010-B Prop-press reg.', '121960.74', '0.00', 2, 0, 0, 0, 'BG', 1575439200),
(242, 'Filter', '535023', 'MS12-LF-AGH-C-U-V', '', 'Filter MS12-LF', '63421.52', '0.00', 1, 0, 0, 0, 'HU', 1569823200),
(241, 'Fine filter', '535042', 'MS12-LFM-AGH-A-U-V', '', 'Fine filter MS12-LFM', '117825.79', '0.00', 1, 0, 0, 0, 'HU', 1569823200),
(35, 'filt. regulator', '535022', 'MS12-LFR-AGI-D8-E-U-M-AS', '', 'filt. regulator MS12-LFR', '0.00', '0.00', 1, 0, 0, 0, 'HU', 1563343200),
(193, ' filt. regulator', '535022', 'MS12-LFR-AGI-D8-E-U-M-LD-AS', '', 'MS12-LFR filt. regulator', '80250.04', '0.00', 1, 0, 0, 0, 'HU', 1563861600),
(240, 'Actv carb filtr', '535043', 'MS12-LFX-AGH-U', '', 'Actv carb filtr MS12-LFX', '118974.58', '0.00', 1, 0, 0, 0, 'HU', 1569823200),
(353, ' Press regulator', '527690', 'MS4-LR-1/4-D7-VS-PSI-DM2', '', 'MS4-LR Press regulator', '11341.70', '0.00', 1, 0, 0, 0, 'HU', 1566885600),
(336, ' Sub-base-SET', '526082', 'MS6-AGD', '', 'MS6-AGD Sub-base-SET', '4270.56', '0.00', 50, 0, 0, 0, '0', 1575957600),
(78, ' On/off valve', '542606', 'MS6-EE-3/8-10V24-S', '', 'MS6-EE-3/8-10V24-S On/off valve', '17782.75', '0.00', 1, 0, 0, 0, 'HU', 1567922400),
(329, ' On/off valve', '541267', 'MS6-EM1-1/2', '', 'MS6-EM1-1/2 On/off valve', '7260.10', '0.00', 150, 0, 0, 0, 'HU', 1575871200),
(50, ' On/off valve', '541268', 'MS6-EM1-1/2-S', '', 'MS6-EM1-1/2-S On/off valve', '8486.71', '0.00', 1, 0, 0, 0, 'HU', 1566885600),
(11, ' On/off valve', '541269 ', 'MS6-EM1-1/2-S-Z', '', 'MS6-EM1-1/2-S-Z On/off valve', '8486.71', '0.00', 1, 0, 0, 0, 'HU', 1566885600),
(107, ' Distrib.block', '549337', 'MS6-FRM-FRZ', '', 'MS6-FRM-FRZ Distrib.block', '2523.58', '0.00', 1, 0, 0, 0, 'HU', 1566885600),
(18, ' filt. regulator', '529183', 'MS6-LFR-1/2-D6-ERV-AS-Z', '', 'MS6-LFR-1/2-D6-ERV-AS-Z filt. regulator', '13219.10', '0.00', 1, 0, 0, 0, 'HU', 1566885600),
(22, ' Soft s/qu.exh.v', '548713', 'MS6-SV-1/2-E-10V24-SO-AD1-MP1-UL1', '', 'MS6-SV Soft s/qu.exh.v', '166761.76', '0.00', 1, 0, 0, 0, 'HU', 1566885600),
(148, ' Water separator', '567857', 'MS9-LWS-AGF-U-V-WP', '', 'MS9-LWS Water separator', '59114.88', '0.00', 1, 0, 0, 0, 'HU', 1568700000),
(337, ' C3:J1-WP', '8025355', 'MSB6-1/2', '', 'MSB6-1/2 C3:J1-WP', '29877.63', '0.00', 25, 0, 0, 0, '0', 1575957600),
(338, ' J2M1', '530246', 'MSB6-1/2-FRC6', '', 'MSB6-1/2-FRC6 J2M1', '31319.21', '0.00', 8, 0, 0, 0, '0', 1575957600),
(332, ' Service combin.', '530246', 'MSB6-1/2-FRC6:J2M1', '', 'MSB6-1/2-FRC6:J2M1 Service combin.', '30411.41', '0.00', 8, 0, 0, 0, 'HU', 1575871200),
(331, ' Service combin.', '8025355', 'MSB6-1/2:C3:J1-WP', '', 'MSB6-1/2:C3:J1-WP Service combin.', '29011.62', '0.00', 50, 0, 0, 0, 'HU', 1575871200),
(66, ' Service combin.', '531030', 'MSB6-AGE:N3:I8:I8:W1-WP', '', 'MSB6 Service combin.', '114562.14', '0.00', 1, 0, 0, 0, 'HU', 1566280800),
(317, ' Solenoid coil', '4527', 'MSFG-24/42-50/60', '', 'MSFG-24/42-50/60 Solenoid coil', '2335.31', '0.00', 6, 0, 0, 0, 'DE', 1566626400),
(128, ' Solenoid coil', '123060', 'MSN1G-24DC-OD', '', 'MSN1G-24DC-OD Solenoid coil', '1899.91', '0.00', 1, 0, 0, 0, 'DE', 1563861600),
(290, ' Solenoid valve', '19701', 'MVH-5-1/4-B', '', 'MVH-5-1/4-B Solenoid valve', '17499.03', '0.00', 1, 0, 0, 0, 'CN', 1573970400),
(83, ' Solenoid valve', '19779', 'MVH-5-1/8-B', '', 'MVH-5-1/8-B Solenoid valve', '15795.95', '0.00', 4, 0, 0, 0, 'CN', 1568268000),
(343, ' Indiv.sub-base', '10336', 'NAS-1/2-3A-ISO', '', 'NAS-1/2-3A-ISO Indiv.sub-base', '4129.66', '0.00', 2, 0, 0, 0, 'SK', 1566885600),
(60, ' Manif.sub-base', '10175', 'NAV-1/2-3C-ISO', '', 'NAV-1/2-3C-ISO Manif.sub-base', '5013.00', '0.00', 3, 0, 0, 0, 'DE', 1566280800),
(340, ' Connector Cable', '541334', 'NEBU-M8G3-K-5-LE3', '', 'NEBU-M8G3-K-5-LE3 Connector Cable', '1925.59', '0.00', 4, 0, 0, 0, '0', 1575957600),
(134, ' Adapter', '563398', 'NPFV-AF-G14-G14-MF', '', 'NPFV-AF-G14-G14-MF Adapter', '4599.41', '0.00', 50, 0, 0, 0, 'DE', 1568700000),
(127, ' Push-in fitting', '578343', 'NPQH-D-G14-Q10-P10', '', 'NPQH-D-G14-Q10-P10 Push-in fitting', '423.61', '0.00', 50, 0, 0, 0, 'IT', 1568700000),
(145, ' Push-in fitting', '578344', 'NPQH-D-G14-Q12-P10', '', 'NPQH-D-G14-Q12-P10 Push-in fitting', '615.32', '0.00', 50, 0, 0, 0, 'IT', 1568700000),
(144, ' Push-in fitting', '578341', 'NPQH-D-G14-Q6-P10', '', 'NPQH-D-G14-Q6-P10 Push-in fitting', '317.70', '0.00', 50, 0, 0, 0, 'IT', 1568700000),
(126, ' Push-in fitting', '578342', 'NPQH-D-G14-Q8-P10', '', 'NPQH-D-G14-Q8-P10 Push-in fitting', '367.00', '0.00', 50, 0, 0, 0, 'IT', 1568700000),
(251, ' Push-in fitting', '578348', 'NPQH-D-G38-Q14-P10', '', 'NPQH-D-G38-Q14-P10 Push-in fitting', '948.87', '0.00', 20, 0, 0, 0, 'IT', 1571810400),
(132, ' plug connector', '578326', 'NPQH-D-Q10-E-P10', '', 'NPQH-D-Q10-E-P10 plug connector', '693.84', '0.00', 50, 0, 0, 0, 'IT', 1568700000),
(131, ' plug connector', '578325', 'NPQH-D-Q8-E-P10', '', 'NPQH-D-Q8-E-P10 plug connector', '556.90', '0.00', 50, 0, 0, 0, 'IT', 1568700000),
(298, ' OR block', '4232', 'OS-PK-3-6/3', '', 'OS-PK-3-6/3 OR block', '18998.52', '0.00', 1, 0, 0, 0, 'DE', 1573970400),
(316, ' co.sup.manifold', '9767', 'PAL-1/8-6', '', 'PAL-1/8-6 co.sup.manifold', '6341.30', '0.00', 1, 0, 0, 0, 'IN', 1566626400),
(124, ' Pressure switch', '10773', 'PEV-1/4-B', '', 'PEV-1/4-B Pressure switch', '24214.84', '0.00', 1, 0, 0, 0, 'HU', 1563861600),
(300, ' Plastic tubing', '197061', 'PFAN-4X0/75-NT', '', 'PFAN-4X0/75-NT Plastic tubing', '1531.89', '0.00', 50, 0, 0, 0, 'DE', 1573970400),
(301, ' Plastic tubing', '197062', 'PFAN-6X1-NT', '', 'PFAN-6X1-NT Plastic tubing', '2805.25', '0.00', 50, 0, 0, 0, 'DE', 1573970400),
(302, ' Plastic tubing', '197063', 'PFAN-8X1/25-NT', '', 'PFAN-8X1/25-NT Plastic tubing', '4001.61', '0.00', 50, 0, 0, 0, 'DE', 1573970400),
(321, ' Plastic tubing', '12133', 'PU-13-SW', '', 'PU-13-SW Plastic tubing', '2431.80', '0.00', 50, 0, 0, 0, 'DE', 1575439200),
(320, ' Plastic tubing', '12134', 'PU-9-SW', '', 'PU-9-SW Plastic tubing', '1406.65', '0.00', 50, 0, 0, 0, 'DE', 1575439200),
(335, ' Plastic tubing', '525749', 'PUN-10X1/5-BL-300', '', 'PUN-10X1/5-BL-300 Plastic tubing', '364.77', '0.00', 300, 0, 0, 0, 'CZ', 1566626400),
(319, ' Plastic tubing', '525750', 'PUN-12X2-BL-200', '', 'PUN-12X2-BL-200 Plastic tubing', '469.75', '0.00', 200, 0, 0, 0, 'CZ', 1575439200),
(314, ' Plastic tubing', '159660', 'PUN-3X0/5-BL', '', 'PUN-3X0/5-BL Plastic tubing', '124.57', '0.00', 50, 0, 0, 0, 'CZ', 1575439200),
(315, ' Plastic tubing', '159662', 'PUN-4X0/75-BL', '', 'PUN-4X0/75-BL Plastic tubing', '145.34', '0.00', 50, 0, 0, 0, 'CZ', 1575439200),
(2, ' Plastic tubing', '159664', 'PUN-6X1-BL', '', 'PUN-6X1-BL Plastic tubing', '231.60', '0.00', 50, 0, 0, 0, 'CZ', 1566626400),
(246, ' Plastic tubing', '525748', 'PUN-8X1/25-BL-400', '', 'PUN-8X1/25-BL-400 Plastic tubing', '299.76', '0.00', 30, 0, 0, 0, 'CZ', 1567058400),
(253, ' Plastic tubing', '558259', 'PUN-H-8X1/25-BL-400', '', 'PUN-H-8X1/25-BL-400 Plastic tubing', '255.70', '0.00', 400, 0, 0, 0, 'CZ', 1571810400),
(330, ' Push-in fitting', '153007', 'QS-1/4-10', '', 'QS-1/4-10 Push-in fitting', '356.05', '0.00', 10, 0, 0, 0, 'JP', 1566626400),
(247, ' Push-in fitting', '164980', 'QS-1/4-12', '', 'QS-1/4-12 Push-in fitting', '425.68', '0.00', 20, 0, 0, 0, 'JP', 1571810400),
(256, ' Push-in fitting', '153003', 'QS-1/4-6', '', 'QS-1/4-6 Push-in fitting', '283.16', '0.00', 6, 0, 0, 0, 'JP', 1571810400),
(258, ' Push-in fitting', '153005', 'QS-1/4-8', '', 'QS-1/4-8 Push-in fitting', '355.88', '0.00', 10, 0, 0, 0, 'JP', 1567058400),
(327, ' Push-in fitting', '153002', 'QS-1/8-6', '', 'QS-1/8-6 Push-in fitting', '230.06', '0.00', 20, 0, 0, 0, 'JP', 1566626400),
(143, ' P/in connector', '153040', 'QS-12-10', '', 'QS-12-10 P/in connector', '620.80', '0.00', 50, 0, 0, 0, 'JP', 1568700000),
(249, ' Push-in fitting', '153008', 'QS-3/8-10', '', 'QS-3/8-10 Push-in fitting', '399.42', '0.00', 10, 0, 0, 0, 'JP', 1571810400),
(250, ' Push-in fitting', '153009', 'QS-3/8-12', '', 'QS-3/8-12 Push-in fitting', '481.94', '0.00', 20, 0, 0, 0, 'JP', 1571810400),
(252, ' Push-in fitting', '164957', 'QS-3/8-16', '', 'QS-3/8-16 Push-in fitting', '1502.06', '0.00', 5, 0, 0, 0, 'JP', 1571810400),
(248, ' Push-in fitting', '153006', 'QS-3/8-8', '', 'QS-3/8-8 Push-in fitting', '324.42', '0.00', 10, 0, 0, 0, 'JP', 1571810400),
(260, ' P/in connector', '153038', 'QS-8-6', '', 'QS-8-6 P/in connector', '459.43', '0.00', 2, 0, 0, 0, 'JP', 1571810400),
(341, ' Push-in Fitting', '186107', 'QS-G1/8-6-I', '', 'QS-G1/8-6-I Push-in Fitting', '298.35', '0.00', 4, 0, 0, 0, '0', 1575957600),
(136, ' Push-in L-fit', '153051', 'QSL-1/4-10', '', 'QSL-1/4-10 Push-in L-fit', '589.76', '0.00', 50, 0, 0, 0, 'JP', 1568700000),
(135, ' Push-in L-fit', '153049', 'QSL-1/4-8', '', 'QSL-1/4-8 Push-in L-fit', '438.21', '0.00', 50, 0, 0, 0, 'JP', 1568700000),
(120, ' Push-in L-conn.', '153073', 'QSL-10', '', 'QSL-10 Push-in L-conn.', '629.93', '0.00', 100, 0, 0, 0, 'JP', 1568700000),
(122, ' Push-in L-conn.', '153074', 'QSL-12', '', 'QSL-12 Push-in L-conn.', '785.13', '0.00', 50, 0, 0, 0, 'JP', 1568700000),
(121, ' Push-in L-conn.', '153071', 'QSL-6', '', 'QSL-6 Push-in L-conn.', '429.08', '0.00', 100, 0, 0, 0, 'JP', 1568700000),
(119, ' Push-in L-conn.', '153072', 'QSL-8', '', 'QSL-8 Push-in L-conn.', '469.25', '0.00', 100, 0, 0, 0, 'JP', 1568700000),
(138, ' Push-in t-conn.', '153131', 'QST-10', '', 'QST-10 Push-in t-conn.', '953.11', '0.00', 50, 0, 0, 0, 'JP', 1568700000),
(265, ' Push-in t-conn.', '130614', 'QST-10-6', '', 'QST-10-6 Push-in t-conn.', '907.61', '0.00', 2, 0, 0, 0, 'JP', 1571810400),
(259, ' Push-in t-conn.', '130615', 'QST-12-8', '', 'QST-12-8 Push-in t-conn.', '1297.66', '0.00', 2, 0, 0, 0, 'JP', 1571810400),
(137, ' Push-in t-conn.', '153130', 'QST-8', '', 'QST-8 Push-in t-conn.', '659.14', '0.00', 50, 0, 0, 0, 'JP', 1568700000),
(263, ' Push-in t-conn.', '153135', 'QST-8-6', '', 'QST-8-6 Push-in t-conn.', '615.08', '0.00', 2, 0, 0, 0, 'JP', 1571810400),
(308, ' Pressure sensor', '529964', 'SDE1-D10-G2-HQ4-L-P1-M8', '', 'SDE1-D10-G2-HQ4-L-P1-M8 Pressure sensor', '25205.35', '0.00', 5, 0, 0, 0, 'BG', 1575439200),
(310, ' Quick exh. val.', '9687', 'SE-3/8-B', '', 'SE-3/8-B Quick exh. val.', '7092.58', '0.00', 3, 0, 0, 0, 'DE', 1575439200),
(116, ' Rod clevis', '6144', 'SG-M10X1/25', '', 'SG-M10X1/25 Rod clevis', '894.68', '0.00', 2, 0, 0, 0, 'DE', 1568700000),
(111, ' Rod clevis', '6146', 'SG-M16X1/5', '', 'SG-M16X1/5 Rod clevis', '2220.28', '0.00', 6, 0, 0, 0, 'DE', 1568700000),
(103, ' Rod clevis', '3111', 'SG-M8', '', 'SG-M8 Rod clevis', '589.76', '0.00', 5, 0, 0, 0, 'DE', 1568700000),
(97, ' Rod eye', '9261', 'SGS-M10X1/25', '', 'SGS-M10X1/25 Rod eye', '3461.88', '0.00', 2, 0, 0, 0, 'CN', 1568700000),
(291, ' Prox. sensor', '150430', 'SIEN-M18NB-PO-K-L', '', 'SIEN-M18NB-PO-K-L Prox. sensor', '11356.56', '0.00', 9, 0, 0, 0, 'LK', 1573970400),
(72, ' Mounting kit', '175094', 'SMBR-8-16', '', 'SMBR-8-16 Mounting kit', '677.40', '0.00', 4, 0, 0, 0, 'BG', 1571551200),
(254, ' Mounting kit', '175095', 'SMBR-8-20', '', 'SMBR-8-20 Mounting kit', '825.20', '0.00', 2, 0, 0, 0, 'BG', 1567058400),
(257, ' Prox. sensor', '150855', 'SME-8-K-LED-24', '', 'SME-8-K-LED-24 Prox. sensor', '8110.63', '0.00', 2, 0, 0, 0, 'BG', 1567058400),
(63, ' Prox. sensor', '171169', 'SME-8-ZS-KL-LED-24', '', 'SME-8-ZS-KL-LED-24 Prox. sensor', '6620.38', '0.00', 4, 0, 0, 0, 'BG', 1571551200),
(323, ' Prox. sensor', '571339', 'SMT-C1-PS-24V-K-5/0-OE', '', 'SMT-C1-PS-24V-K-5/0-OE Prox. sensor', '11925.54', '0.00', 2, 0, 0, 0, 'CH', 1575439200),
(110, ' Swivel flange', '174385', 'SNC-50', '', 'SNC-50 Swivel flange', '3520.31', '0.00', 6, 0, 0, 0, 'IN', 1568700000),
(105, ' Swivel flange', '174386', 'SNC-63', '', 'SNC-63 Swivel flange', '4352.91', '0.00', 7, 0, 0, 0, 'IN', 1568700000),
(98, ' Swivel flange', '174397', 'SNCS-32', '', 'SNCS-32 Swivel flange', '6197.06', '0.00', 2, 0, 0, 0, 'IN', 1568700000),
(294, ' Colour sensor', '538236', 'SOEC-RT-Q50-PS-S-7L', '', 'SOEC-RT-Q50-PS-S-7L Colour sensor', '113827.36', '0.00', 1, 0, 0, 0, 'DE', 1573970400),
(245, ' Receiver', '165322', 'SOEG-E-Q30-PS-K-2L', '', 'SOEG-E-Q30-PS-K-2L Receiver', '15122.75', '0.00', 1, 0, 0, 0, 'LK', 1567058400),
(211, ' Transmitter', '165352', 'SOEG-S-Q30-K-L', '', 'SOEG-S-Q30-K-L Transmitter', '12816.19', '0.00', 1, 0, 0, 0, 'HU', 1567058400),
(261, ' Silencer', '2316', 'U-1/4', '', 'U-1/4 Silencer', '1098.78', '0.00', 2, 0, 0, 0, 'DE', 1567058400),
(347, ' Regulator plate', '546248', 'VABF-S4-2-R6C2-C-6', '', 'VABF-S4-2-R6C2-C-6 Regulator plate', '20178.18', '0.00', 2, 0, 0, 0, 'DE', 1566885600),
(348, ' Sub-base', '541070', 'VABS-S4-2S-G18-B-R3', '', 'VABS-S4-2S-G18-B-R3 Sub-base', '7913.28', '0.00', 2, 0, 0, 0, 'DE', 1566885600),
(305, ' El.sub-base', '573942', 'VAVE-L1-1VK7-LP', '', 'VAVE-L1-1VK7-LP El.sub-base', '1901.11', '0.00', 8, 0, 0, 0, 'BG', 1575439200),
(64, ' Pneumatic valve', '9199', 'VL-5-1/4', '', 'VL-5-1/4 Pneumatic valve', '12509.83', '0.00', 2, 0, 0, 0, 'IN', 1566280800),
(299, ' Pneumatic valve', '9984', 'VL/O-3-1/4', '', 'VL/O-3-1/4 Pneumatic valve', '11099.96', '0.00', 1, 0, 0, 0, 'IN', 1573970400),
(100, ' Solenoid valve', '533347', 'VMPA1-M1H-K-PI', '', 'VMPA1-M1H-K-PI Solenoid valve', '14064.44', '0.00', 10, 0, 0, 0, 'DE', 1563861600),
(84, ' Solenoid valve', '533342', 'VMPA1-M1H-M-PI', '', 'VMPA1-M1H-M-PI Solenoid valve', '10053.32', '0.00', 10, 0, 0, 0, 'DE', 1563861600),
(288, ' Prop-press reg.', '543432', 'VPPM-6F-L-1-F-0L10H-A4P-C1', '', 'VPPM-6-... Prop-press reg.', '70860.48', '0.00', 2, 0, 0, 0, 'BG', 1573970400),
(284, ' Prop-press reg.', '543432', 'VPPM-6L-L-1-G18-0L2H-V1N-S1C1', '', 'VPPM-6-... Prop-press reg.', '81120.04', '0.00', 1, 0, 0, 0, 'BG', 1571810400),
(346, ' Solenoid valve', '539182', 'VSVA-B-B52-ZD-A2-1T1L', '', 'VSVA-B-B52-ZD-A2-1T1L Solenoid valve', '15313.47', '0.00', 2, 0, 0, 0, 'DE', 1566885600),
(354, ' Solenoid valve', '539159', 'VSVA-B-M52-MZD-A1-1T1L', '', 'VSVA-B-M52-MZD-A1-1T1L Solenoid valve', '12443.02', '0.00', 1, 0, 0, 0, 'DE', 1566885600),
(328, ' Hollow bolt', '8626', 'VT-1/8', '', 'VT-1/8 Hollow bolt', '693.48', '0.00', 6, 0, 0, 0, 'DE', 1566626400),
(322, ' Cap nut', '9768', 'VTM-1/8', '', 'VTM-1/8 Cap nut', '378.82', '0.00', 6, 0, 0, 0, 'DE', 1566626400),
(324, ' VALVE TERMINAL', '573606', 'VTUG-18-MSD-S1H-25V22-Q10-U-G14S-10P+H', '', 'VTUG VALVE TERMINAL', '146383.28', '0.00', 1, 0, 0, 0, 'DE', 1575871200),
(304, ' Solenoid valve', '566513', 'VUVG-B14-T32C-AZT-F-1P3', '', 'VUVG-B14-T32C-AZT-F-1P3 Solenoid valve', '11722.25', '0.00', 4, 0, 0, 0, 'DE', 1575439200),
(142, ' Solenoid valve', '566499', 'VUVG-L14-M52-AT-G18-1P3', '', 'VUVG-L14-M52-AT-G18-1P3 Solenoid valve', '9335.69', '0.00', 1, 0, 0, 0, 'DE', 1563861600),
(345, ' Solenoid valve', '8042544', 'VUVG-LK10-B52-T-M5-1R8L-S', '', 'VUVG-LK10-B52-T-M5-1R8L-S Solenoid valve', '10575.34', '0.00', 1, 0, 0, 0, 'DE', 1566885600),
(339, ' Solenoid Valve', '564212', 'VUVG-S14-T32C-AT-G18-1R8L', '', 'VUVG-S14-T32C-AT-G18-1R8L Solenoid Valve', '16085.76', '0.00', 2, 0, 0, 0, '0', 1575957600),
(297, ' AND block', '4204', 'ZK-PK-3-6/3', '', 'ZK-PK-3-6/3 AND block', '20501.75', '0.00', 1, 0, 0, 0, 'DE', 1573970400);

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
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=355;

--
-- AUTO_INCREMENT for table `product_price_revision`
--
ALTER TABLE `product_price_revision`
  MODIFY `revisionId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_quantity_revision`
--
ALTER TABLE `product_quantity_revision`
  MODIFY `revisionId` int(11) NOT NULL AUTO_INCREMENT;

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
