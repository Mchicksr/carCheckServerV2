 export default ({ to,faxNum,date,time,from,owner,callback,sa,city,zip,location,make,model,year,tag,sta,color,details,reason,vid,vinfo,photo1,photo2}) => {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
    *{
        margin: 0 auto;
    
    }

    img.stamp{
        width: 5rem;
        position: relative;
        top:3rem
    }

    .title{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
     }
     
     .subTitle{
         font-size:6px;
     }
     
     .sub{
         font-size:9px;
     }
     
     .tow-form{
        font-family: 'Roboto', sans-serif;
        font-weight: 100 !important;
    }
    .lawBorder {
        border: solid 4px;
    }
    .lawFlexBox {
    
        margin-top: 1rem;
    }
    h4.law {
        padding: 5px;
    }
    .law{
        /* font-size: 20px; */
        font-size: 10px;
        font-family: 'Roboto', sans-serif;
        font-weight: 100 !important;
    }
    .TitleBox {
        text-align: center;
        font-family: 'Roboto', sans-serif;
    }
    
    
    h3.mainTitle {
        text-decoration: underline;
        font-family: 'Roboto', sans-serif;
        text-align: center;
    }

    .Formh2 {
        font-size: 11px;
        padding-top:1rem;
    }
    .sign{
        width:2.5rem;
    }

    .contact{
        font-size:8px;
    }
    .infoInput{
        text-decoration: underline;
    }
    .spread{
        padding-right:3rem;
    }

   
    </style>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet">

    <title>Document</title>
</head>
<body>
   <header class="faxHeader">
       <div class="faxHeaderBox">
            <img class="stamp" src="http://sapphireh3.sg-host.com/wp-content/uploads/2021/12/PBCFnSeal2.png" alt="seal">
        <div class="TitleBox">
                    <h3 class="state">Palm Beach County, Florida</h3>
                    <h1 class="title">Fax Authorization</h1>
                    <h3>to</h3>
                    <h1 class="title">Remove/Tow Vehicle/Vessel</h1>
                    <h2 class="sub">with out the approval or knowledge of the owner</h2>
        </div>  
    </div> 
    </header>
    <div class="lawFlexBox">
        <div class="lawBorder">
            <h4 class="law">Palm Beach County Towing Ordinance 2005-009 requires the real property owner or a duly authorized agent of the property owner to provide “express authorization” to the contracted towing company before a vehicle/vessel can be removed from private property without the approval or knowledge of the vehicle/vessel owner. Normally, the approval to remove a vehicle/vessel must be done in the presence of the towtruck company/driver. The only exception to this approval requirement is when the property owner or authorized agent sends a fax to the towtruck company using this form. The date and time must electronically stamped on the fax sent to the towing company. The towing company is required to retain the original fax received from the property owner/designee.</h4>
        </div>
    </div>
    <div class="mainBorderBox">
        <section class="main">
            <h3 class="mainTitle">Please Print</h3>
        </section>
        <form class="tow-form">
            <div class="var">
                <h2 for="company" class="Formh2"> <span class="dec"><span class="infoInput">To</span></span> (Name of  towing company):___<span class="infoInput">${to}</span>__________________________________________</h2>
                    
            </div>
            <div class="var">
                <h2 for="faxNumber" class="Formh2">Fax number for towing company:___<span class="dec">( 561 )</span><span class="infoInput">${faxNum}</span>__________________________________________</h2>
                    
            </div>
            <div class="share date">
                <h2 for="" class="Formh2 "><span class="spread">Today's:___<span class="infoInput">${date}</span>_______________________________</span>Time:___<span class="infoInput">${time}</span>_______________________________</h2>      
            </div> 
            <div class="var">
                <h2 for="" class="Formh2"><span class="dec"><span class="infoInput">From</span>:</span>(Your Name):___<span class="infoInput">${from}</span>__________________________________________</h2>      
            </div>
            <div class="var owner">
                <h2 for="" class="Formh2">Owner/Agent for (Name of buisiness/Facility):___<span class="infoInput">${owner}</span>__________________________________________</h2>      
            </div>
            <div class="var callback">
                <h2 for="" class="Formh2">Your call back phone number:___<span class="infoInput">${callback}</span>__________________________________________</h2>
            </div>
            <div class="var sa">
                <h2 for="" class="Formh2">Located at Street Address:___<span class="infoInput">${sa}</span>__________________________________________</h2>
            </div>
                <div class="share place">
                <h2 for="" class="Formh2"><span class="spread">City:___<span class="infoInput">${city}</span> _______________________________</span>Zip:___<span class="infoInput">${zip}</span>_______________________________</h2>
                </div>
            <div class="var spec">
                <h2 for="" class="Formh2">Specific location of vehicle/vessel on property:___<span class="infoInput">${location}</span>__________________________________________</h2>
            </div>
            <div class="share car">
                <h2 for="" class="Formh2 make"><span class="spread">Make:___<span class="infoInput">${make}</span>____________________</span><span class="spread">Model:___<span class="infoInput">${model}</span>____________________</span>Year:___<span class="infoInput">${year}</span>____________________</h2>

            </div> 
            <div class="share vid">
                <h2 for="" class="Formh2 tag"><span class="spread">Tag No.:___<span class="infoInput">${tag}</span>_____________</span><span class="spread">State:___<span class="infoInput">${sta}</span> ___________</span>Colors(s):___<span class="infoInput">${color}</span>_________________</h2>
            </div>
            <div class="var vin">
                <h2 for="" class="Formh2">Vehicle Identification No.:___<span class="infoInput">${vid}</span>__________________________________________</h2>
            </div>
            <div class="var">
                <h2 for="" class="Formh2">Other details/description:___<span class="infoInput">${details}</span>__________________________________________</h2>
            </div>
            <div class="var">
                <h2 for="" class="Formh2">Vehicle owner information (if known):___<span class="infoInput">${vinfo}</span>__________________________________________</h2>
            </div>
            <div class="var">
                <h2 for="" class="Formh2">Reason for Removal:___<span class="infoInput">${reason}</span>__________________________________________</h2> 
            </div>
            <div class="var">
                <h2 for="" class="Formh2">Signature of owner/agent:___<img class="sign" src="http://sapphireh3.sg-host.com/wp-content/uploads/2021/12/car-check-sign-A.png" alt="pic"></h2>
                
            </div>
        </form>
        <p class="contact">For more information about towing authorization requirements or the Palm Beach County Towing Ordinance, contact the Consumer Affairs Division through out website at: <span class="dec site">www.pbcgov.com/consumer</span> or call 561-712-6600 (Boca/Delray/Glades call toll free 888-852-7362).</p>
    </div>    
</body>
</html>
`

}

