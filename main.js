const canvas = document.getElementById("result");
const preview = document.getElementById("preview");
preview.addEventListener("click", prev);

// canvas.height = canvas.width / 1.616;
const ctx = canvas.getContext("2d");
ctx.font = "20px Krasar"; //Helvetica

const image = document.getElementById("imgDisplayed");
const logo = document.getElementById("logo");

function prev(){

      var sourceX;
      var sourceY;
      var sourceWidth;
      var sourceHeight;
      var destWidth = 400;
      var destHeight = 540;
      var destX = 40;
      var destY = 200;

      var myImg = document.querySelector("#imgDisplayed");
      var realWidth = myImg.naturalWidth;
      var realHeight = myImg.naturalHeight;

      
      var scalWidth = (540 * realWidth) / realHeight;
      var scalHeight = (540 * realHeight) / realWidth;
    
      if (realWidth > realHeight){
        sourceX = Math.abs(scalWidth / 2 - scalHeight / 2 ) * -1 ;
        sourceY = 200;
        sourceWidth = scalWidth;
        sourceHeight = 540;

      }else if (realWidth < realHeight){
        sourceX = 40;
        sourceY =  200;
        sourceWidth = 540;
        sourceHeight = scalHeight;

      }else{
        sourceX = 40;
        sourceY =  200;
        sourceWidth = 540;
        sourceHeight = 540;
      }
      
      let inName = document.getElementById("inName").value;
      let inAddress = document.getElementById("inAddress").value;
      let inField = document.getElementById("inField").value;
      let inYear = document.getElementById("inYear").value;
      let inNum = document.getElementById("inNum").value;
      let inNote = document.getElementById("inNote").value;

      const name = document.getElementById("name");
      const birth = document.getElementById("birth");
      const fieldYear = document.getElementById("fieldYear");
      const area = document.getElementById("area");
      const num = document.getElementById("num");
      const note = document.getElementById("note");


      name.innerHTML = "ឈ្មោះ : " + inName;
      note.innerHTML = "សំគាល់ : " + inNote;
      birth.innerHTML = "អាសយដ្ឋាន : " + inAddress;
      fieldYear.innerHTML = "ដំណាំ : " + inYear; //inField
      area.innerHTML = inField;
      num.innerHTML = inNum;
      

      ctx.fillStyle = "#fcfdff";
      ctx.fillRect(0, 0, 1280, 1280);

      //Footer box
      ctx.fillStyle = "#d0e4fd";
      ctx.fillRect(0, 775, 1280, 150);

      //Titile box      
      ctx.fillStyle = "#1877F2";
      ctx.fillRect(0, 0, 1280, 170);

      


      ctx.fillStyle = "#fff";
      ctx.font = '60px Krasar'; //Arial
      ctx.fillText("កាតអតិថិជន Customer Card", 40, 110);
      
      ctx.drawImage(logo, 1000, 20, 250, 130);


      ctx.fillStyle = "#000";
      ctx.font = '45px Krasar'; //Arial
      ctx.fillText(name.innerHTML, 620, 250);
      ctx.fillText("Tel : " + num.innerHTML, 620, 370);
      ctx.fillText(fieldYear.innerHTML, 620, 610);
      ctx.fillText("ផ្ទៃដី : " + area.innerHTML, 620, 490);
      ctx.fillText(note.innerHTML, 620, 730);

      ctx.fillText(birth.innerHTML, 40, 850);

      roundedImage(destX, destY, 540, 540, 20);
      ctx.clip();
      ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight  ); //sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight



      function roundedImage(x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
    }
   

      
}

function loadImage(event) {
  const image = document.getElementById("imgDisplayed");
  image.src = URL.createObjectURL(event.target.files[0]);
}


const download = document.getElementById("down");
download.addEventListener("click", function(){


  if(window.navigator.msSaveBlob) {

    window.navigator.msSaveBlob(canvas.msToBlob(), "Card.png");
  } else {

    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = "Card.png";
    a.click();
    document.body.removeChild(a);
  }
});
