// import jQuery from "jquery" 
export default()=>{
    // const carInfoElements = document.querySelectorAll('.car-info');

    // // Set the text content of each element to 'hello'
    // carInfoElements.forEach(function (element) {
    //   element.textContent = 'hello';
    // });
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./CarLog.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet">
    <title>Document</title>
</head>
<body>
<style>
h1{
    font-family: 'Roboto', sans-serif;
    text-align: center;
    font-size: 24px;

}
h2{
    font-family: 'Roboto', sans-serif;
    
}
h3{
    font-family: 'Roboto', sans-serif;

}
.center-content{
    /* display:flex;
    justify-content: center; */
    padding:0 6rem;
}
.container{
      /* margin: 0 auto; */
}
li{
    margin-left:1rem;
}
</style>
    <h1>Security Report: 08/25/2023 - 08/31/2023</h1>
    <div class="center-content">
        <div class="container">
            <h2>Vioaltions Issued</h2>
            <ol>
                <li>Color CarMake CarModel Date Violation1/violation2</li>
                <li class="car-info"></li>
            </ol>
        </div>
    </div>
    <div class="center-content">
        <div class="container">
            <h2>Vehicles Towed</h2>
            <ul>
                <li>none</li>
            </ul>
        </div>
    </div>
    <div class="center-content">
        <div class="container">
            <h3>Notes</h3>
            <ul>
                <li>none</li>
            </ul>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    
</body>
</html>

    `
}