export default ({Lic,Car, Mdate}) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body style="text-align: center;">
        <div class="card"> 
            <h2>License Plate</h2>
                <h2>${Lic}</h2>
                <div style="display: flex; justify-content: center; justify-content:space-evenly;">
                    <div>
    
                        <h2>Car Type</h2> 
                            <p>${Car}</p>
                    </div>
                    <div>
                        <h2>Date Submited</h2>
                            <p>${Mdate}</p>
                    </div>
                </div>
        </div>
        <hr>
    </body>
    </html>
    `
}