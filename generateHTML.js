import fs from 'fs';

let output = `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Team Builder</title>     
</head>
<body>
    
    <nav>
        <h1>Team Builder</h1>
    </nav>
    <main>
        <div class="row managers">
            <div class="card">
                <div class="card-header">
                    <h3>Jared</h3>
                    <h4>Manager</h4>
                </div>
                <p> ID: 1</p>
                <p>Email: <a href="">test@test.com</a></p>
                <p> Office number: 1 </p>
            </div>
        </div>
        <h1>Mangers</h1>
        <hr>
        <div class="row engineers">
            <div class="card">
                <div class="card-header">
                    <h3>Jared</h3>
                    <h4>Engineer</h4>
                </div>
                <p> ID: 1</p>
                <p>Email: <a href="">test@test.com</a></p>
                <p>Github: <a href="">Github</a> </p>
            </div>
        </div>
        <h1>Engineers</h1>
        <hr>
        <div class="row managers">
            <div class="card">
                <div class="card-header">
                    <h3>Jared</h3>
                    <h4>Interns</h4>
                </div>
                <p> ID: 1</p>
                <p>Email: <a href="">test@test.com</a></p>
                <p>School: Texas University </p>
            </div>
        </div>
        <h1>Interns</h1>
        <hr>
    </main>
</body>
</html>

`