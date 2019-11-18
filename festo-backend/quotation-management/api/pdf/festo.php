<?php
if (isset($_POST)) {
    $_POST = json_decode($_POST["data"], true);
    global $db;
    $dtId=$_POST['id'];
    $selectQuota=$db->query("SELECT * FROM  `quotation` WHERE `quotation`.`quota_id`='$dtId'");
    if ($selectQuota){
        $quota=$selectQuota->rows[0]['print_count']+1;
        $sql=$db->query("UPDATE `quotation` SET `print_count` = '$quota' WHERE `quotation`.`quota_id` = '$dtId'");
        if ($sql){

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
            $this->Image($image_file, 0, 0, 210, '', 'PNG', '', 'T', false, 300, '', false, false, 0, false, false, false);
        }

        // Page footer
        public function Footer()
        {
            // Page number
            $this->SetY(0);
            $image_file = 'http://127.0.0.1/quotation-management/?api=pdf/footer';
            $this->Image($image_file, 0, 280, 210, '', 'PNG', '', 'T', false, 300, '', false, false, 0, false, false, false);
        }
    }

// create new PDF document
    $pdf = new MYPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// set document information
    $pdf->SetCreator(PDF_CREATOR);
    $pdf->SetAuthor('SINCOS');
    $pdf->SetTitle('Festo - Quotation - '.$_POST['quotaNo']);
    $pdf->SetSubject('Quotations');
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
    $pdf->SetFont('helvetica', 'B', 11);
    $headerData=<<<EOD
                E-mail: festo@sincosbd.com
EOD;
    $pdf->writeHTMLCell(200,10,15, 35,$headerData,0,0,false,false,'C', false);

    $pdf->SetFont('', '', 13);
    $headerData=<<<EOD
                <span style="text-decoration: underline;">Q U O T A T I O N</span>
EOD;
    $pdf->writeHTMLCell(200,10,15, 40,$headerData,0,0,false,false,'C', false);
    $pdf->SetFont('times', 'B', 11);
    $epoch = $_POST["date"];
    $date=(string)date('M d, Y', (int)$epoch);
    $postData = "Date: " . $date;
    $dt = <<<EOD
    $postData
EOD;
    $pdf->writeHTMLCell('', '', 120, 44, $dt, '', 0, false, false, 'R', false);

    $pdf->SetFont('times', 'B', 11);
    $postData = 'Quotation No.: ' . $_POST['quotaNo'];
    $dt = <<<EOD
    $postData
EOD;
    $pdf->writeHTMLCell('', '', 15, 44, $dt, '', 0, false, false, 'L', false);$pdf->SetFont('times', 'B', 11);
    if ($_POST['quotaRef']){
        $postData = 'Ref. No: ' . $_POST['quotaRef'];
        $dt = <<<EOD
    $postData
EOD;
        $pdf->writeHTMLCell('', '', 15, 50, $dt, '', 0, false, false, 'L', false);
    }

// set font
    $pdf->SetFont('times', '', 10);
    $cmInfo = '<div><span style="font-weight: bold">' . $_POST['companyName'] . '<span><br/><span style="font-weight: normal">' . $_POST['branchName'] . ',</span><br><span style="font-weight: normal">' . $_POST['address'] . '</span></div>';
// set some text to print
    $html = <<<EOD
    $cmInfo
EOD;
    if ($_POST['quotaRef']){
        $pdf->writeHTMLCell('', '', 15, 59, $html, '', 0, false, false, 'L', false);
    }else{
        $pdf->writeHTMLCell('', '', 15, 55, $html, '', 0, false, false, 'L', false);
    }

    $pdf->SetFont('times', 'B', 10);
    $contactInfo = '<br><div>Attention: ' . $_POST['contactPerson'] . '</div>';
    $html = <<<EOD
    $contactInfo
EOD;
    if ($_POST['quotaRef']){
        $pdf->writeHTMLCell('', '', 15, 68, $html, '', 0, false, false, 'L', false);
    }else{
        $pdf->writeHTMLCell('', '', 15, 63, $html, '', 0, false, false, 'L', false);
    }


    $pdf->SetFont('times', '', 10);
    $designation = '<div style="text-decoration: underline;">' . $_POST['designation'] . '</div><br>';
    $html = <<<EOD
    $designation
EOD;
    if ($_POST['quotaRef']){
        $pdf->writeHTMLCell('', '', 31.25, 85, $html, '', 0, false, false, 'L', false);
    }else{
        $pdf->writeHTMLCell('', '', 31.25, 80, $html, '', 0, false, false, 'L', false);
    }


    $pdf->SetFont('times', 'B', 10);
    $subject = '<div><br>Subject: ' . $_POST['doc']['pdfSubject'] . '</div>';
    $html = <<<EOD
    $subject
EOD;
    if ($_POST['quotaRef']){
        $pdf->writeHTMLCell('', '', 15, 86, $html, '', 0, false, false, 'L', false);
    }else{
        $pdf->writeHTMLCell('', '', 15, 83, $html, '', 0, false, false, 'L', false);
    }


    $pdf->SetFont('times', '', 10);
    $body = '<br><br><br><div>'.$_POST['doc']['pdfBody']. '</div><br>';
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
  <th style="width: 40px;">SL. NO.</th>
  <th style="width: 180px;">ITEM / DESCRIPTION</th>
  <th>PART NO.</th>
  <th style="width: 80px;">QTY. REQUIRED</th>
  <th style="width: 80px;">QTY. AVAILABLE</th>
  <th>UNIT PRICE (Taka)</th>
  <th>TOTAL PRICE (Taka)</th>
 </tr>';
    $total_price=0;
    $counter=1;
    foreach ($_POST['productList'] as $product) {
        $productInfo=$productInfo.'<tr nobr="true"><td>'.$counter++.'</td><td style="text-align: left;">'.$product['productName'].'<br>Type: '.$product['productType'].'</td><td>'.$product['internalPartNumber'].'</td><td>'.$product['productQty'].'</td><td>'.$product['productQtyAvailable'].'</td><td style="text-align: right;">'.formatedPrice($product['productPrice']).'</td><td style="text-align: right;">'.formatedPrice(sprintf('%0.2f',$product['productPrice']*$product['productQty'])).'</td></tr>';
        $total_price=$total_price+($product['productPrice']*$product['productQty']);
    }
    $productInfo=$productInfo.'<tr nobr="true"><td colspan="6" style="text-align: right;font-weight: bold;">Total</td><td style="text-align: right;">'.formatedPrice(sprintf('%0.2f', $total_price)).'</td></tr>';
    $currency=currencywords($total_price);
    if (isset($_POST['doc']['pdfVat'])){
        if ($_POST['doc']['pdfVat']!=0){
            $numVat=$_POST['doc']['pdfVat']/100;
            $vatAmount=$numVat*$total_price;
            $grandTotal=$total_price+$vatAmount;
            $productInfo=$productInfo.'<tr nobr="true"><td colspan="6" style="text-align: right;font-weight: bold;">VAT '.$_POST['doc']['pdfVat'].'%</td><td style="text-align: right;">'.formatedPrice(sprintf('%0.2f',$vatAmount)).'</td></tr>';
            $productInfo=$productInfo.'<tr nobr="true"><td colspan="6" style="text-align: right;font-weight: bold;">Grand Total</td><td style="text-align: right;">'.formatedPrice(sprintf('%0.2f', $grandTotal)).'</td></tr>';
            $currency=currencywords($grandTotal);
        }
    }
    $productInfo=$productInfo.'</table>';
    $tbl = <<<EOD
    $productInfo
EOD;
    $pdf->writeHTML($tbl, true, true, true, true, "L");
    $pdf->SetFont('times', 'B', 11);

    $html = <<<EOD
<br><br>
In Words: $currency
<br>
EOD;
    $pdf->writeHTML($html, true, true, true, true, "L");
    if ($pdf->GetY()>260){
        $pdf->AddPage();
        $html = <<<EOD
            <br><br>
EOD;
        $pdf->writeHTML($html, true, true, true, true, "L");
    }

    foreach ($_POST['terms'] as $term){
        if ($term['topic']==' '){

        }else{
            $terms='<table style="margin: 0; padding: 0;"align="left"><tr style="padding: 0;margin: 0;"><td style="width: 180px;"><strong>'.$term['topic'].'</strong></td><td style="width: 5px;">:</td><td colspan="3">'.$term['message'].'</td></tr></table><br>';
            $pdf->SetFont('times', '', 10);
            $html = <<<EOD
    $terms
EOD;
            $pdf->writeHTML($html, true, true, true, true, "L");
            if ($pdf->GetY()>260){
                $pdf->AddPage('','',true,false);
                $html = <<<EOD
            <br><br>
EOD;
                $pdf->writeHTML($html, true, true, true, true, "L");
            }
        }
    }
    if ($pdf->GetY()>240){
        $pdf->AddPage();
        $html = <<<EOD
            <br><br>
EOD;
        $pdf->writeHTML($html, true, true, true, true, "L");
    }
    $pdf->SetFont('times', '', 10);
    $suggestion=$_POST['doc']['suggestion'];
    $html = <<<EOD
    $suggestion 
EOD;
    $pdf->writeHTML($html, true, true, true, true, "L");

    $pdf->SetFont('times', 'B', 11);
    $html = <<<EOD
    <br><br>For SINCOS AUTOMATION TECHNOLOGIES LTD.<br>
EOD;
    $pdf->writeHTML($html, true, true, true, true, "L");

    if ($pdf->GetY()>240 && $pdf->GetY()<250){
        $html = <<<EOD
            <br><br>
EOD;
        $pdf->writeHTML($html, true, true, true, true, "L");
    }
    // Set font
    $pdf->SetFont('times', 'B', 11);
    $user='<strong>'.$_POST['contactBy'].'</strong>';
    $tls=<<<EOD
            $user
EOD;
    $pdf->writeHTML($tls, true, true, true, true, "L");
//    $pdf->writeHTMLCell('','',16,-35,$tls,0,0,false, false, 'L',false);


//    Designation
    $pdf->SetFont('times', '', 10);
    $userDgn=ucwords($_POST['contactByDesignation']);
    $tls=<<<EOD
            $userDgn
EOD;
    $pdf->writeHTML($tls, true, true, true, true, "L");
//    $pdf->writeHTMLCell('','',16,-30,$tls,0,0,false, false, 'L',false);

//    Designation
    $pdf->SetFont('times', '', 10);
    $userDgn=$_POST['contactByPhone'];
    $tls=<<<EOD
            Cell: $userDgn
EOD;
    $pdf->writeHTML($tls, true, true, true, true, "L");
//    $pdf->writeHTMLCell('','',16,-25,$tls,0,0,false, false, 'L',false);


//Close and output PDF document
    $pdf->Output('Festo_Quotation_'.$_POST['quotaNo'].'.pdf', 'I');

//============================================================+
// END OF FILE
//============================================================+

} else {
    echo "No data found";
}

    }
}
function currencywords($number){
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
            $plural = (($counter = count($str)) && $number > 9) ? '' : null;
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

function formatedPrice($data) {
    $str=(string)$data;
    $counter = 0;
    $shouldCount = false;
    $i = 0;
    for (; $i < strlen($str); $i++) {
        if ($str[$i] === '.' || $shouldCount) {
            $counter = $counter + 1;
            $shouldCount = true;
        }
    }
    $except = $counter + 3;
    if (strlen($str) > $except) {
      $formattedMoney = '';
      $i = 0;
      $preFormatterLength = strlen($str) - $except;
      if ($preFormatterLength % 2 == 1) {
          $i = 1;
          $formattedMoney = $formattedMoney . $str[0] . ',';
      }
      $comma = true;
      for (; $i < $preFormatterLength; $i++) {
          if ($comma) {
              $comma = false;
              $formattedMoney = $formattedMoney . $str[$i];
          } else {
              $comma = true;
              $formattedMoney = $formattedMoney . $str[$i] . ',';
          }
      }
      for ($j = strlen($str) - $except; $j < strlen($str); $j++) {
            $formattedMoney =$formattedMoney . $str[$j];
        }
      return $formattedMoney;
    } else {
        return $str;
    }
}