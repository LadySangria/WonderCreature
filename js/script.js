window.onload=function(){
    var gridBox = document.getElementById("grid");
    
    for(var i =0; i<46;i++){
        gridBox.innerHTML += "<div class='productBox' onclick='ShowBox(" + i + ");'> <div class='imageThumb'><img src='productImages/"+ (i +1) + ".jpg' alt='" + pNames[i] + "' class='thumbs'></div> <div class='productSummary'><h2>" + pNames[i] +"</h2><h3>" + pPrices[i] + "</h3></div> <div class='seeMore'>details</div></div>";
    }
    
}

var theBox = document.getElementById("details");

var pNames = ["Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title"];
var pDescriptions = [
    "Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description","Description"
];


var pPrices = ["$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$","$$$"];

var pCategories = ["Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title","Title"];

var image = document.getElementById("productImage");
var productName = document.getElementById("productName");
var desc = document.getElementById("description");
var price = document.getElementById("price");
var category = document.getElementById("category");

function ShowBox(productNum){
    
    image.src = "productImages/" + (productNum +1) + ".jpg";
    desc.innerHTML = pDescriptions[productNum];
    price.innerHTML = pPrices[productNum];
    productName.innerHTML = pNames[productNum];
    category.innerHTML = pCategories[productNum];
    
    theBox.classList.add('show');
}

function HideBox(){
    theBox.classList.remove('show');
}