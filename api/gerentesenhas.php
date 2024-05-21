<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Processa os dados recebidos via POST
    //$dadosAtualizados = $_POST['data'];
    $jsonData = file_get_contents('php://input');
    $postData = json_decode($jsonData, true);

 
    file_put_contents("assets/dados.CSV",$postData['senha']);

    echo json_encode($postData['senha']);


} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Processa os dados recebidos via GET
    $senha = file_get_contents("assets/dados.CSV");
    $data = $_GET;
    $response = array(
        'method' => 'GET',
        'data' => $senha
    );
    echo json_encode($response);

} else {
    // Se o método não for nem POST nem GET
    $response = array(
        'error' => 'Método não suportado'
    );
    echo json_encode($response);

}

// Retorna a resposta como JSON
?>

