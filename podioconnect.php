<?php

$client_id = "projectplanner";
$client_secret = "LX6k53Q8oFf1e7eEOzCJ2KtKgELXrTiccsdjJoth4hA8O6wKuEjh8O8zoXmppaUV";
$app_id = "6075847";
$app_token = "8210c97b3ff4479cb60a5455469be5d2";

// Podio API
require_once('podio-php-4.0.0/PodioAPI.php');

// Authenticate with API
Podio::setup($client_id, $client_secret);

try {
  Podio::authenticate_with_app($app_id, $app_token);

  echo('authenticate');

  // Authentication was a success, now you can start making API calls.

}
catch (PodioError $e) {

	echo('error');

  // Something went wrong. Examine $e->body['error_description'] for a description of the error.
};

// Retrieve data from app

Podio::authenticate_with_app($app_id, $app_token);

$allitems = PodioItem::filter($app_id);

echo($allitems);

?>