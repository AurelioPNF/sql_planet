<?php
	session_start();
	$servername = "us-cdbr-east-06.cleardb.net";
    $username = "b9d7c802785a99";
    $password = "835797f1";
    $dbname = "heroku_7bd78ab84fef851";
    $conn = new mysqli($servername, $username, $password, $dbname);
    if(!$conn){
        die("Erro na conexão" . mysqli_connect_error());
    }
    // Criando duplicata de cidade
    $newCidade = "cidades_".session_id();
    $sql = "create table if not exists ".$newCidade." like cidades ;";
    $result = mysqli_query($conn, $sql);
    $sql = "insert into ".$newCidade." select * from cidades;";
    $result = mysqli_query($conn, $sql);
    // Criando duplicata de comidas
    $newComidas = "comidas_".session_id();
    $sql = "create table if not exists ".$newComidas." like comidas ;";
    $result = mysqli_query($conn, $sql);
    $sql = "insert into ".$newComidas." select * from comidas;";
    $result = mysqli_query($conn, $sql);
    // Criando duplicata de aventureiro
    $newAventureiro = "aventureiro_".session_id();
    $sql = "create table if not exists ".$newAventureiro." like aventureiro ;";
    $result = mysqli_query($conn, $sql);
    $sql = "insert into ".$newAventureiro." select * from aventureiro;";
    $result = mysqli_query($conn, $sql);
    header("Location: ../jogo.php");
    // PARA O SCRIPT DE DELETAR AS TABELAS, SE REFERIR A delete_tables no diretorio local
    // PARA FAZER: Colocar um timeout, de acordo com: https://solutionfactor.net/blog/2014/02/08/implementing-session-timeout-with-php/#:~:text=First%2C%20set%20session.,30%20minutes%20%3D%201%2C800%20seconds).
    // Antes de usar session_destroy, apagar as tabelas criadas de acordo com o session_id;
 ?>