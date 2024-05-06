<?php
if(isset($_POST['data'])) {
    $dadosAtualizados = $_POST['data'];
    file_put_contents("assets/dados.CSV", $dadosAtualizados);
}
?>
