<?php
$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";

$domain = $_SERVER['HTTP_HOST'];

$doc_root = str_replace('\\', '/', $_SERVER['DOCUMENT_ROOT']);
$current_dir = str_replace('\\', '/', __DIR__);

if ($doc_root === $current_dir || dirname($current_dir) === $doc_root) {
    $project_dir = (strpos($_SERVER['REQUEST_URI'], basename($current_dir)) !== false) ? '/' . basename($current_dir) : '';
} else {
    $project_dir = str_replace($doc_root, '', $current_dir);
}

$project_dir = rtrim($project_dir, '/');

define('BASE_URL', $protocol . $domain . $project_dir . '/');
?>