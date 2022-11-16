<?php
    session_start();
    $servername = "us-cdbr-east-06.cleardb.net";
    $username = "b9d7c802785a99";
    $password = "835797f1";
    $dbname = "heroku_7bd78ab84fef851";
    $result_array = array();

    $conn = new mysqli($servername, $username, $password, $dbname);

    if(!$conn){
        die("Erro na conexão" . mysqli_connect_error());
    }

    $sql = $_POST['sql'];
    
    $comandoSql = explode(" ", $sql);
    $sql = "";
    
    $procurar = ["cidades","comidas","aventureiro"];
    $substituir = ["cidades_".session_id(),"comidas_".session_id(),"aventureiro_".session_id()];
    for($pos= 0; $pos<=count($comandoSql)-1; $pos++){
        $comandoSql[$pos] = str_ireplace($procurar, $substituir, $comandoSql[$pos]);
        $sql = $sql." ".$comandoSql[$pos];
    }
    
    $comandosPermitidos = array("SELECT", "INSERT","UPDATE","DELETE");
    if(in_array(strtoupper($comandoSql[0]),$comandosPermitidos)){#Se o comando está na lista de comandos permitidos     
        if (strtoupper($comandoSql[0]) == "SELECT"){ #Se o comando é SELECT
            $result = mysqli_query($conn, $sql);
            if ($result){
                if(mysqli_num_rows($result)>0){
                    while($row = mysqli_fetch_assoc($result)){
                        array_push($result_array, $row);
                    }
                }
            }else{
                echo "Erro na consulta: ";
                var_dump($sql);
            }
            echo json_encode($result_array);
        }
        elseif(strtoupper($comandoSql[0]) == "INSERT"){
            $result = mysqli_query($conn, $sql);
            if(strpos($sql, "aventureiro") != false){
                $sql = "select * from aventureiro_".session_id();
            }
            elseif (strpos($sql, "cidade") != false) {
                $sql = "select * from cidade_".session_id();
            }
            elseif (strpos($sql, "comidas") != false) {
                $sql = "select * from comidas_".session_id();
            }
            $result = mysqli_query($conn, $sql);
            if ($result){
                if(mysqli_num_rows($result)>0){
                    while($row = mysqli_fetch_assoc($result)){
                        array_push($result_array, $row);
                    }
                }
            }else{
                echo "Erro na consulta: ";
            }
            echo json_encode($result_array);
        }
        else{
            $result = mysqli_query($conn, $sql);
            if($result){
                $result_array[0] = "TRUE";
                echo json_encode($result_array);
            }
            else{
                $result_array[0] = "FALSE";
                echo json_encode($result_array);
            }
        }
    }
    else{# Se não está na lista de comandos permitidos
        $result_array[0] = "FALSE";
        $result_array[1] = strtoupper($comandoSql[1])." não é um comando permitido.";
        echo json_encode($result_array);
    }
    mysqli_close($conn);

?>