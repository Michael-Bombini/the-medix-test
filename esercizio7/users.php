<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css
    " />
    <?php
    require_once('readdata.php');
    ?>
</head>

<body>
    <table class="table text-center">
        <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">Nome</th>
                <th scope="col">Cognome</th>
                <th scope="col">Età</th>
                <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            <h1 class="text-center text-white bg-success">I dati sono stati inseriti correttamente ecco la lista di tutti inseriti nel tempo</h1>
            <?php foreach ($utenti as $index => $utente) {
            ?>
                <tr>
                    <td><?php echo $utente['indice'] ?></td>
                    <td><?php echo $utente['nome'] ?></td>
                    <td><?php echo $utente['cognome'] ?></td>
                    <td><?php echo $utente['eta'] ?></td>
                    <td><?php echo $utente['email'] ?></td>
                </tr>
            <?php } ?>
        </tbody>
    </table>
</body>

</html>