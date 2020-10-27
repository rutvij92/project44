var card1,card2,card3,card4,card5;
var card6,card7,card8,card9,card10;
var card11,card12,card13,card14,card15;
var card16,card17,card18,card19,card20;
var card21,card22,card23,card24,card25;
var card26,card27,card28,card29;

var backgroundimg,coverimg;
var pic1,pic2,pic3,pic4,pi5,pic6,pic6,pic7,pic8,pic9,pic10,pic11,pic12,pic13,pic14;
function preload(){
backgroundimg=loadImage("pictures/background img.jpg");
coverimg=loadImage("pictures/cover img.png");
pic1=loadImage("pictures/pic1.jpg");
pic2=loadImage("pictures/pic2.jpg");
pic3=loadImage("pictures/pic3.jpg");
pic4=loadImage("pictures/pic4.jpg");
pic5=loadImage("pictures/pic5.png");
pic6=loadImage("pictures/pic6.jpg");
pic7=loadImage("pictures/pic7.jpg");
pic8=loadImage("pictures/pic8.jpg");
pic9=loadImage("pictures/pic9.jpg");
pic10=loadImage("pictures/pic10.jpg");
pic11=loadImage("pictures/pic11.jpg");
pic12=loadImage("pictures/pic12.jpg");
pic13=loadImage("pictures/pic13.jpg");
pic14=loadImage("pictures/pic14.jpg");

}
function setup() {
  createCanvas(displayWidth,displayHeight);
  card1= createSprite(displayWidth/4-250,100, 80,80);
  card1.addImage(coverimg);
  card1.scale=0.7
  card2= createSprite(displayWidth/4-50,100, 200,200);
  card2.addImage(coverimg);
  card2.scale=0.7;
  card3= createSprite(displayWidth/4+150,100, 80,80);
  card3.addImage(coverimg);
  card3.scale=0.7;
  card4= createSprite(displayWidth/4+350,100, 80,80);
  card4.addImage(coverimg);
  card4.scale=0.7;
  card5= createSprite(displayWidth/4+550,100, 80,80);
  card5.addImage(coverimg);
  card5.scale=0.7;
  card6= createSprite(displayWidth/4+750,100, 80,80);
  card6.addImage(coverimg);
  card6.scale=0.7;
  card7= createSprite(displayWidth/4+950,100,150, 80,80);
  card7.addImage(coverimg);
  card7.scale=0.7
  card8= createSprite(displayWidth/4-250,300, 80,80);
  card8.addImage(coverimg);
  card8.scale=0.7
  card9= createSprite(displayWidth/4-50,300, 200,200);
  card9.addImage(coverimg);
  card9.scale=0.7;
  card10= createSprite(displayWidth/4+150,300, 80,80);
  card10.addImage(coverimg);
  card10.scale=0.7;
  card11= createSprite(displayWidth/4+350,300, 80,80);
  card11.addImage(coverimg);
  card11.scale=0.7;
  card12= createSprite(displayWidth/4+550,300, 80,80);
  card12.addImage(coverimg);
  card12.scale=0.7;
  card13= createSprite(displayWidth/4+750,300, 80,80);
  card13.addImage(coverimg);
  card13.scale=0.7
  card14= createSprite(displayWidth/4+950,300, 80,80);
  card14.addImage(coverimg);
  card14.scale=0.7
  card15= createSprite(displayWidth/4-250,500, 80,80);
  card15.addImage(coverimg);
  card15.scale=0.7
  card16= createSprite(displayWidth/4-50,500, 200,200);
  card16.addImage(coverimg);
  card16.scale=0.7;
  card17= createSprite(displayWidth/4+150,500, 80,80);
  card17.addImage(coverimg);
  card17.scale=0.7;
  card18= createSprite(displayWidth/4+350,500, 80,80);
  card18.addImage(coverimg);
  card18.scale=0.7;
  card19= createSprite(displayWidth/4+550,500, 80,80);
  card19.addImage(coverimg);
  card19.scale=0.7;
  card20= createSprite(displayWidth/4+750,500, 80,80);
  card20.addImage(coverimg);
  card20.scale=0.7
  card21 = createSprite(displayWidth/4+950,500, 80,80);
  card21.addImage(coverimg);
  card21.scale=0.7
  card22= createSprite(displayWidth/4-250,700, 80,80);
  card22.addImage(coverimg);
  card22.scale=0.7
  card23= createSprite(displayWidth/4-50,700, 200,200);
  card23.addImage(coverimg);
  card23.scale=0.7;
  card24= createSprite(displayWidth/4+150,700, 80,80);
  card24.addImage(coverimg);
  card24.scale=0.7;
  card25= createSprite(displayWidth/4+350,700, 80,80);
  card25.addImage(coverimg);
  card25.scale=0.7;
  card26= createSprite(displayWidth/4+550,700, 80,80);
  card26.addImage(coverimg);
  card26.scale=0.7;
  card27= createSprite(displayWidth/4+750,700, 80,80);
  card27.addImage(coverimg);
  card27.scale=0.7
  card28= createSprite(displayWidth/4+950,700, 80,80);
  card28.addImage(coverimg);
  card28.scale=0.7; card1= createSprite(displayWidth/4-250,100, 80,80);
  card1.addImage(coverimg);
  card1.scale=0.7
  card2= createSprite(displayWidth/4-50,100, 200,200);
  card2.addImage(coverimg);
  card2.scale=0.7;
  card3= createSprite(displayWidth/4+150,100, 80,80);
  card3.addImage(coverimg);
  card3.scale=0.7;
  card4= createSprite(displayWidth/4+350,100, 80,80);
  card4.addImage(coverimg);
  card4.scale=0.7;
  card5= createSprite(displayWidth/4+550,100, 80,80);
  card5.addImage(coverimg);
  card5.scale=0.7;
  card6= createSprite(displayWidth/4+750,100, 80,80);
  card6.addImage(coverimg);
  card6.scale=0.7;
  card7= createSprite(displayWidth/4+950,100,150, 80,80);
  card7.addImage(coverimg);
  card7.scale=0.7
  card8= createSprite(displayWidth/4-250,300, 80,80);
  card8.addImage(coverimg);
  card8.scale=0.7
  card9= createSprite(displayWidth/4-50,300, 200,200);
  card9.addImage(coverimg);
  card9.scale=0.7;
  card10= createSprite(displayWidth/4+150,300, 80,80);
  card10.addImage(coverimg);
  card10.scale=0.7;
  card11= createSprite(displayWidth/4+350,300, 80,80);
  card11.addImage(coverimg);
  card11.scale=0.7;
  card12= createSprite(displayWidth/4+550,300, 80,80);
  card12.addImage(coverimg);
  card12.scale=0.7;
  card13= createSprite(displayWidth/4+750,300, 80,80);
  card13.addImage(coverimg);
  card13.scale=0.7
  card14= createSprite(displayWidth/4+950,300, 80,80);
  card14.addImage(coverimg);
  card14.scale=0.7
  card15= createSprite(displayWidth/4-250,500, 80,80);
  card15.addImage(coverimg);
  card15.scale=0.7
  card16= createSprite(displayWidth/4-50,500, 200,200);
  card16.addImage(coverimg);
  card16.scale=0.7;
  card17= createSprite(displayWidth/4+150,500, 80,80);
  card17.addImage(coverimg);
  card17.scale=0.7;
  card18= createSprite(displayWidth/4+350,500, 80,80);
  card18.addImage(coverimg);
  card18.scale=0.7;
  card19= createSprite(displayWidth/4+550,500, 80,80);
  card19.addImage(coverimg);
  card19.scale=0.7;
  card20= createSprite(displayWidth/4+750,500, 80,80);
  card20.addImage(coverimg);
  card20.scale=0.7
  card21 = createSprite(displayWidth/4+950,500, 80,80);
  card21.addImage(coverimg);
  card21.scale=0.7
  card22= createSprite(displayWidth/4-250,700, 80,80);
  card22.addImage(coverimg);
  card22.scale=0.7
  card23= createSprite(displayWidth/4-50,700, 200,200);
  card23.addImage(coverimg);
  card23.scale=0.7;
  card24= createSprite(displayWidth/4+150,700, 80,80);
  card24.addImage(coverimg);
  card24.scale=0.7;
  card25= createSprite(displayWidth/4+350,700, 80,80);
  card25.addImage(coverimg);
  card25.scale=0.7;
  card26= createSprite(displayWidth/4+550,700, 80,80);
  card26.addImage(coverimg);
  card26.scale=0.7;
  card27= createSprite(displayWidth/4+750,700, 80,80);
  card27.addImage(coverimg);
  card27.scale=0.7
  card28= createSprite(displayWidth/4+950,700, 80,80);
  card28.addImage(coverimg);
  card28.scale=0.7;
  
 
  


  

 
}

function draw() {
  background(backgroundimg);  


if (mousePressedOver(card1)){
card1.addImage(pic1)
}
if (mousePressedOver(card2)){
  card2.addImage(pic5)
 }
if (mousePressedOver(card3)){
   card3.addImage(pic8)
 }
 if (mousePressedOver(card4)){
    card4.addImage(pic8)
   
 }
 if (mousePressedOver(card5)){
      card5.addImage(pic9)
 }
if (mousePressedOver(card6)){
      card6.addImage(pic6)
      card6.scale=0.6;
  }
 if (mousePressedOver(card7)){
      card7.addImage(pic7)
      card7.scale=0.85;
  }
  if (mousePressedOver(card8)){
       card8.addImage(pic6)
       card8.scale=0.6
 }
  if (mousePressedOver(card9)){
        card9.addImage(pic14)
        card9.scale=0.29;
 }
  if (mousePressedOver(card10)){
       card10.addImage(pic2)
       card10.scale=0.7;
 }
 if (mousePressedOver(card11)){
       card11.addImage(pic3)
       card11.scale=0.43;
 }
 if (mousePressedOver(card12)){
        card12.addImage(pic11)
}
if (mousePressedOver(card13)){
        card13.addImage(pic1)
}
 if (mousePressedOver(card14)){
card14.addImage(pic14)
card14.scale=0.29;
}
if (mousePressedOver(card15)){
  card15.addImage(pic2)
  card15.scale=0.7;
 }
if (mousePressedOver(card16)){
   card16.addImage(pic12)
 }
 if (mousePressedOver(card17)){
    card17.addImage(pic13)

 }
 if (mousePressedOver(card18)){
      card18.addImage(pic13)
 }
if (mousePressedOver(card19)){
      card19.addImage(pic12)
  }
 if (mousePressedOver(card20)){
      card20.addImage(pic5)
  }
  if (mousePressedOver(card21)){
       card21.addImage(pic9)
 }
  if (mousePressedOver(card22)){
        card22.addImage(pic3)
        card22.scale=0.43;
 }
  if (mousePressedOver(card23)){
       card23.addImage(pic11)
 }
 if (mousePressedOver(card24)){
       card24.addImage(pic5)
 }
 if (mousePressedOver(card25)){
        card25.addImage(pic7)
        card25.scale=0.85;
}
if (mousePressedOver(card26)){
     card26.addImage(pic4)

}                   
if (mousePressedOver(card27)){
  card27.addImage(pic1)
}    
if (mousePressedOver(card28)){
  card28.addImage(pic4)
  
}                      


   
drawSprites();
}