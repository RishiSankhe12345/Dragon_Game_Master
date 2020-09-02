class Game {
    constructor(){

    }
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
      async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
 
        //player1.velocityX=3;
        //player1.velocityY=3;
        //car1.addImage("car1",car1_img);
        /*player2 = createSprite(450,450);
        //car2.addImage("car2",car2_img);
        player3 = createSprite(550,550);
        //car3.addImage("car3",car3_img);
        player4 = createSprite(700,500);
        //player4.addImage("car4",car4_img);
        players = [player1, player2, player3, player4];*/
    }

    play(){
        form.hide();
        
        //Player.getPlayerInfo();
       
        
        
        
        //  camera.position.x = displayWidth/2;
        //player1.collide(Edges[4]);
          //camera.position.y = player1.y;
        
        /*if(allPlayers !== undefined){
          background('white');
          dragon.display();
          image(ground, 0,-displayHeight*4,displayWidth, displayHeight*5);
          
          //var display_position = 100;
          
          //index of the array
          var index = 0;
    
          //x and y position of the cars
          var x = 175 ;
          var y;

          for(var plr in allPlayers){
            //add 1 to the index for every loop
            index = index + 1 ;
    
            //position the cars a little away from each other in x direction
            x = x + 200;
            
            //use data form the database to display the cars in y direction
            y = displayHeight - allPlayers[plr].distance;
            players[index-1].x = x;
            players[index-1].y = y;
           // console.log(index, player.index)
    
           
            if (index === player.index){
              camera.position.x = displayWidth/2;
              camera.position.y = players[index-1].y;
              
            }
            
          }
          
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
          player.distance+=10;
          player.update();
        }

        if(keyIsDown(RIGHT_ARROW) && player.index !== null){
          player.distance=displayWidth + allPlayers[plr].distance;
          player.update();
        }

        
        if(keyIsDown(LEFT_ARROW) && player.index !== null){
          player.distance=displayWidth- allPlayers[plr].distance;
          player.update();
        }
        
        if(keyIsDown(DOWN_ARROW) && player.index !== null){
          player.distance-=10;
          player.update();
        }
       

      
        if(keyDown(LEFT_ARROW)){
            changePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            changePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            changePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            changePosition(0,+1);
        }*/
        drawSprites();
      }

      end(){
        console.log("Game Ended");
      }
}