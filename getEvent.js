<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            background: linear-gradient(skyblue,lightgreen);
            margin: 10px;
            padding: 20px;
            text-align: center;
        }
        .marquee-container {
            width: 100%;
            overflow: hidden; /* Ensures text moves inside the box */
            display: flex;
            justify-content: center;
            position: relative;
        }
        h1 {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            display: inline-block;
            white-space: nowrap; /* Prevents text wrapping */
            overflow: hidden;
            position: relative;
            width: 100%;
        }
        .marquee-text{
            font-size: 25px;
            font-family: sans-serif;
            font-weight: 700;
            position: absolute;
            animation: marquee 10s linear infinite;
        }
        @keyframes marquee{
            from {transform:translatex(100%);}
            to {transform:translateX(-100%) ;}
        }
        button{
            padding: 10px;
            background-color:white ;
            font-family: sans-serif;
            font-size: large;
            font-style: italic;
            color: blue;
            border-radius:10px ;
        }
        button:hover{

            border-radius:10px ;
            text-decoration: underline;
            background-color:red;
            color: rgb(226, 212, 240);
        }
    </style>
</head>
<body>
    <div class="marquee-container">
        <h1><span class="marquee-text">Welcome to my website! Look for more information.</span></h1>
    </div>
<button onclick="display()">cklick to get About me</button>
<p id="demo"></p>
<script>
    function display(){
        let info=document.getElementById("demo")
        info.innerHTML="My name is Leta Kasahun I am Learning Now I am learning DBU university \n And I study about Software Enginnering fields I want to trigger problem solving activity"
        
    }
</script>
</body>
</html>
