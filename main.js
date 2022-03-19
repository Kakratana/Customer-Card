const canvas = document.getElementById("result");
const preview = document.getElementById("preview");
preview.addEventListener("click", prev);

// canvas.height = canvas.width / 1.616;
const ctx = canvas.getContext("2d");
ctx.font = "20px Krasar"; //Helvetica

const image = document.getElementById("imgDisplayed");
const logo = document.getElementById("logo");

function prev(){
      
      let inName = document.getElementById("inName").value;
      let inBirth = document.getElementById("inBirth").value;
      let inField = document.getElementById("inField").value;
      let inYear = document.getElementById("inYear").value;
      let inNum = document.getElementById("inNum").value;

      const name = document.getElementById("name");
      const birth = document.getElementById("birth");
      const fieldYear = document.getElementById("fieldYear");
      const num = document.getElementById("num");

      name.innerHTML = "ឈ្មោះ : " + inName;
      birth.innerHTML = "អាសយដ្ឋាន : " + inBirth;
      fieldYear.innerHTML = "ដំណាំ : " + inYear; //inField
      num.innerHTML = inNum;

      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, 1280, 1280);

      ctx.fillStyle = "#F0F3FA";
      ctx.fillRect(0, 770, 1280, 150);
      
      ctx.fillStyle = "#242A3A";
      ctx.fillRect(0, 0, 1280, 190);

      


      ctx.fillStyle = "#fff";
      ctx.font = '72px Krasar'; //Arial
      ctx.fillText("កាតអតិថិជន", 70, 120);
      
      ctx.drawImage(logo, 1000, 30, 250, 130);


      ctx.fillStyle = "#000";
      ctx.font = '48px Krasar'; //Arial
      ctx.fillText(name.innerHTML, 620, 300);
      ctx.fillText("Tel: " + num.innerHTML, 620, 420);
      ctx.fillText(birth.innerHTML, 70, 850);
      ctx.fillText(fieldYear.innerHTML, 620, 620);
      
      
      ctx.drawImage(image, 70, 230, 500, 500);
      
   

      
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
