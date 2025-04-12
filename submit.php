<?php
require 'vendor/autoload.php'; // PHPSpreadsheet autoload

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

$firstName = $_POST['first_name'];
$lastName = $_POST['last_name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$password = $_POST['password'];
$confirmPassword = $_POST['confirm_password'];
$terms = isset($_POST['terms']) ? 'Agreed' : 'Not Agreed';
$takenCourse = $_POST['taken_course'];
$courseName = $_POST['course_name'];

$fileName = "registrations.xlsx";

// Load existing or create new spreadsheet
if (file_exists($fileName)) {
    $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load($fileName);
    $sheet = $spreadsheet->getActiveSheet();
} else {
    $spreadsheet = new Spreadsheet();
    $sheet = $spreadsheet->getActiveSheet();
    $sheet->fromArray(['First Name', 'Last Name', 'Email', 'Phone', 'Password', 'Confirmed Password', 'Terms', 'Taken Course Before?', 'Course Name'], null, 'A1');
}

// Append data
$row = $sheet->getHighestRow() + 1;
$sheet->fromArray([$firstName, $lastName, $email, $phone, $password, $confirmPassword, $terms, $takenCourse, $courseName], null, 'A' . $row);

// Save the file
$writer = new Xlsx($spreadsheet);
$writer->save($fileName);

// Redirect or show message
echo "Thank you! Your data has been submitted.";
?>