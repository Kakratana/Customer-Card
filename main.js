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
      var destWidth = 500;
      var destHeight = 500;
      var destX = 70;
      var destY = 230;

      if (image.clientWidth >= image.clientHeight){

        sourceX = image.clientWidth / 2 - image.clientWidth / 2;
        sourceY = 0;
        sourceWidth = 500;
        sourceHeight = 500;
        
      
      }else{
      
        sourceX = 0;
        sourceY = image.clientHeight / 2 - image.clientHeight / 2;
        sourceWidth = 50;
        sourceHeight = 50;
      }
      
      let inName = document.getElementById("inName").value;
      let inBirth = document.getElementById("inBirth").value;
      let inField = document.getElementById("inField").value;
      let inYear = document.getElementById("inYear").value;
      let inNum = document.getElementById("inNum").value;

      const name = document.getElementById("name");
      const birth = document.getElementById("birth");
      const fieldYear = document.getElementById("fieldYear");
      const area = document.getElementById("area");
      const num = document.getElementById("num");

      name.innerHTML = "ឈ្មោះ : " + inName;
      birth.innerHTML = "អាសយដ្ឋាន : " + inBirth;
      fieldYear.innerHTML = "ដំណាំ : " + inYear; //inField
      area.innerHTML = inField;
      num.innerHTML = inNum;

      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, 1280, 1280);

      ctx.fillStyle = "#F0F3FA";
      ctx.fillRect(0, 770, 1280, 150);
      
      ctx.fillStyle = "#1877F2";
      ctx.fillRect(0, 0, 1280, 190);

      


      ctx.fillStyle = "#fff";
      ctx.font = '60px Krasar'; //Arial
      ctx.fillText("កាតអតិថិជន Customer Card", 70, 120);
      
      ctx.drawImage(logo, 1000, 30, 250, 130);


      ctx.fillStyle = "#000";
      ctx.font = '45px Krasar'; //Arial
      ctx.fillText(name.innerHTML, 620, 300);
      ctx.fillText("Tel : " + num.innerHTML, 620, 420);
      ctx.fillText("ផ្ទៃដី : " + area.innerHTML, 620, 540);
      ctx.fillText(fieldYear.innerHTML, 620, 660);
      ctx.fillText(birth.innerHTML, 70, 850);

      ctx.drawImage(image, destX, destY, destWidth, destHeight); //sourceX, sourceY, sourceWidth, sourceHeight, 

      
   

      
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
