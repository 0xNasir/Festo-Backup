<?php
if (isset($_POST)) {
    $_POST = json_decode($_POST["data"], true);
//============================================================+
// File name   : example_003.php
// Begin       : 2008-03-04
// Last Update : 2013-05-14
//
// Description : Example 003 for TCPDF class
//               Custom Header and Footer
//
// Author: Nicola Asuni
//
// (c) Copyright:
//               Nicola Asuni
//               Tecnick.com LTD
//               www.tecnick.com
//               info@tecnick.com
//============================================================+

    /**
     * Creates an example PDF TEST document using TCPDF
     * @package com.tecnick.tcpdf
     * @abstract TCPDF - Example: Custom Header and Footer
     * @author Nicola Asuni
     * @since 2008-03-04
     */

// Include the main TCPDF library (search for installation path).
    require_once('tcpdf.php');


// Extend the TCPDF class to create custom Header and Footer
    class MYPDF extends TCPDF
    {

        //Page header
        public function Header()
        {
            // Logo
            $image_file = 'http://127.0.0.1/quotation-management/?api=pdf/header';
            $this->Image($image_file, 2, 2, 205, '', 'PNG', '', 'T', false, 300, '', false, false, 0, false, false, false);
            // Set font
            $this->SetFont('helvetica', 'B', 20);
            // Title
//        $this->Cell(0, 15, '<< TCPDF Example 003 >>', 0, false, 'C', 0, '', 0, false, 'M', 'M');
        }

        // Page footer
        public function Footer()
        {
            // Position at 15 mm from bottom
            $this->SetY(-35);
            // Set font
            $this->SetFont('helvetica', 'I', 8);
            $this->SetFont('helvetica', '', 12);
            $user='<strong>'.$_POST['preparedBy'].'</strong><br>'.$_POST['position'];
            $tls=<<<EOD
            $user
EOD;
            $this->writeHTML($user, true, true, true, true, "L");
            // Page number
            $this->SetY(-15);
            $image_file = 'http://127.0.0.1/quotation-management/?api=pdf/footer';
            $this->Image($image_file, 5, 280, 200, '', 'PNG', '', 'T', false, 300, '', false, false, 0, false, false, false);
        }
    }

// create new PDF document
    $pdf = new MYPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// set document information
    $pdf->SetCreator(PDF_CREATOR);
    $pdf->SetAuthor('Nicola Asuni');
    $pdf->SetTitle('Festo - Quotation - '.$_POST['quotaNo']);
    $pdf->SetSubject('TCPDF Tutorial');
    $pdf->SetKeywords('TCPDF, PDF, example, test, guide');

// set default header data
    $pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, PDF_HEADER_TITLE, PDF_HEADER_STRING);

// set header and footer fonts
    $pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
    $pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

// set default monospaced font
    $pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

// set margins
    $pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
    $pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
    $pdf->SetFooterMargin(PDF_MARGIN_FOOTER);

// set auto page breaks
    $pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);

// set image scale factor
    $pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

// set some language-dependent strings (optional)
    if (@file_exists(dirname(__FILE__) . '/lang/eng.php')) {
        require_once(dirname(__FILE__) . '/lang/eng.php');
        $pdf->setLanguageArray($l);
    }

// ---------------------------------------------------------


// add a page
    $pdf->AddPage();
    $pdf->SetFont('times', '', 12);
    $epoch = $_POST["date"];

    $postData = "Date: " . date('M d, Y', $epoch);
    $dt = <<<EOD
    $postData
EOD;
    $pdf->writeHTMLCell('', '', 120, 35, $dt, '', 0, false, false, 'R', false);

    $pdf->SetFont('times', 'B', 12);
    $postData = 'Quotation No.: ' . $_POST['quotaNo'];
    $dt = <<<EOD
    $postData
EOD;
    $pdf->writeHTMLCell('', '', 16, 35, $dt, '', 0, false, false, 'L', false);

// set font
    $pdf->SetFont('times', '', 12);
    $cmInfo = '<div><span style="font-weight: bold">' . $_POST['companyName'] . '<span><br/><span style="font-weight: normal">' . $_POST['branchName'] . ',</span><br><span style="font-weight: normal">' . $_POST['branchAddress'] . '</span></div>';
// set some text to print
    $html = <<<EOD
    $cmInfo
EOD;
    $pdf->writeHTMLCell('', '', 16, 50, $html, '', 0, false, false, 'L', false);

    $pdf->SetFont('times', 'B', 12);
    $contactInfo = '<br><br><span>Attention: ' . $_POST['contactPerson'] . '</span>';
    $html = <<<EOD
    $contactInfo
EOD;
    $pdf->writeHTMLCell('', '', 16, 60, $html, '', 0, false, false, 'L', false);


    $pdf->SetFont('times', '', 12);
    $designation = '<div>' . $_POST['designation'] . '</div><br>';
    $html = <<<EOD
    $designation
EOD;
    $pdf->writeHTMLCell('', '', 35, 67, $html, '', 0, false, false, 'L', false);

    $pdf->SetFont('times', 'B', 12);
    $subject = '<div><br>Subject: ' . $_POST['subject'] . '</div>';
    $html = <<<EOD
    $subject
EOD;
    $pdf->writeHTMLCell('', '', 16, 80, $html, '', 0, false, false, 'L', false);


    $pdf->SetFont('times', '', 12);
    $body = '<br><br><br><br>
    <div>' .
        $_POST['body']
        . '</div>
<h3>Bill of Materials (BOM)</h3>';
    $html = <<<EOD
$body
EOD;
//$pdf->writeHTMLCell('','',16,90,$html,'',0,false,false,'L',false);
    $pdf->writeHTML($html, true, true, true, true, "L");
    $productInfo = '<style>
table{
border-collapse: collapse;
}
table, td, th {
  border: 1px solid black;
}
</style>
<table align="center">
 <tr nobr="true">
  <th style="width: 50px;">SL. NO.</th>
  <th style="width: 150px;">ITEM / DESCRIPTION</th>
  <th>PART NO.</th>
  <th>QTY. REQUESTED</th>
  <th>UNIT PRICE (Taka)</th>
  <th>TOTAL PRICE (Taka)</th>
 </tr>';
    $total_price=0;
    $counter=1;
    foreach ($_POST['productList'] as $product) {
        $productInfo=$productInfo.'<tr nobr="true"><td>'.$counter++.'</td><td>'.$product['productName'].'<br>Type: '.$product['productType'].'</td><td>'.$product['productPartNumber'].'</td><td>'.$product['productQty'].'</td><td>'.$product['productPrice'].'</td><td>'.$product['productPrice']*$product['productQty'].'</td></tr>';
        $total_price=$total_price+($product['productPrice']*$product['productQty']);
    }
    $productInfo=$productInfo.'<tr nobr="true"><td colspan="5">Total</td><td>'.$total_price.'</td></tr>';
    $currency=currencywords($total_price);
    if (isset($_POST['vat'])){
        if ($_POST['vat']!=0){
            $numVat=$_POST['vat']/100;
            $vatAmount=$numVat*$total_price;
            $grandTotal=$total_price+$vatAmount;
            $productInfo=$productInfo.'<tr nobr="true"><td colspan="5">VAT '.$_POST['vat'].'%</td><td>'.$vatAmount.'</td></tr>';
            $productInfo=$productInfo.'<tr nobr="true"><td colspan="5">Grand Total</td><td>'.$grandTotal.'</td></tr>';
            $currency=currencywords($grandTotal);
        }
    }
    $productInfo=$productInfo.'</table>';
    $tbl = <<<EOD
    $productInfo
EOD;
    $pdf->writeHTML($tbl, true, true, true, true, "L");
    $pdf->SetFont('times', 'B', 12);
    $html = <<<EOD
<br><br>
In Words: $currency
EOD;
    $pdf->writeHTML($html, true, true, true, true, "L");

    $pdf->SetFont('times', 'B', 12);
    $html = <<<EOD
<br><br>
Terms and Conditions (Commercial)
EOD;
    $pdf->writeHTML($html, true, true, true, true, "L");
    $terms='<ol>';
    foreach ($_POST['termsCondition'] as $term){
        $terms=$terms.'<li><strong>'.$term['title'].': </strong>'.$term['description'].'</li>';
    }
    $terms=$terms.'</ol>';
    $pdf->SetFont('times', '', 12);
    $html = <<<EOD
    $terms
EOD;
    $pdf->writeHTML($html, true, true, true, true, "L");

//Close and output PDF document
    $pdf->Output('example_003.pdf', 'I');

//============================================================+
// END OF FILE
//============================================================+

} else {
    echo "No data found";
}
function currencywords($number)
{
    $no = round($number);
    $point = round($number - $no, 2) * 100;
    $hundred = null;
    $digits_1 = strlen($no);
    $i = 0;
    $str = array();
    $words = array('0' => '', '1' => 'one', '2' => 'two',
        '3' => 'three', '4' => 'four', '5' => 'five', '6' => 'six',
        '7' => 'seven', '8' => 'eight', '9' => 'nine',
        '10' => 'ten', '11' => 'eleven', '12' => 'twelve',
        '13' => 'thirteen', '14' => 'fourteen',
        '15' => 'fifteen', '16' => 'sixteen', '17' => 'seventeen',
        '18' => 'eighteen', '19' =>'nineteen', '20' => 'twenty',
        '30' => 'thirty', '40' => 'forty', '50' => 'fifty',
        '60' => 'sixty', '70' => 'seventy',
        '80' => 'eighty', '90' => 'ninety');
    $digits = array('', 'hundred', 'thousand', 'lac', 'crore');
    while ($i < $digits_1) {
        $divider = ($i == 2) ? 10 : 100;
        $number = floor($no % $divider);
        $no = floor($no / $divider);
        $i += ($divider == 10) ? 1 : 2;
        if ($number) {
            $plural = (($counter = count($str)) && $number > 9) ? 's' : null;
            $hundred = ($counter == 1 && $str[0]) ? ' and ' : null;
            $str [] = ($number < 21) ? $words[$number] .
                " " . $digits[$counter] . $plural . " " . $hundred
                :
                $words[floor($number / 10) * 10]
                . " " . $words[$number % 10] . " "
                . $digits[$counter] . $plural . " " . $hundred;
        } else $str[] = null;
    }
    $str = array_reverse($str);
    $result = implode('', $str);
//    $points = ($point) ?
//        "." . $words[$point / 10] . " " .
//        $words[$point = $point % 10] : '';
    //echo $result . "Rupees  " . $points . " Paise";
    $wordscurrenty=$result." Taka only.";
    return ucwords ($wordscurrenty); //ucfirst
}