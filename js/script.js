var turn=0;
            var clicked_id;
            var clickCount=0;
            var noWin=true;
            
            $( document ).ready(function() {  
                       $("#a1,#a2,#a3,#b1,#b2,#b3,#c1,#c2,#c3").click(function(){                          
                           clicked_id=this.id;        
                           var squareValue=$(this).html();   
                           
                           if(squareValue === "X" || squareValue === "O")
                           {
                               alert(noWin);
                               if(clickCount!=9 && noWin !=true)
                               {
                               alert("OoPS CLICK ANOTHER EMPTY SQUARE"); 
                               }
                               else
                               {
                                   alert("game over, reset game");
                               }
                           }
                           else
                           {                              
                            boardWrite();                          
                           }
                           
                       });
                $(".reset").click(function(){                          
                           $("#a1,#a2,#a3,#b1,#b2,#b3,#c1,#c2,#c3").empty();
                        $(".result, .winner").html(" ");
                        turn=0;
                    clickCount=0;
                           
                       });
                
                
             });
            function boardWrite()
            {
                if(turn==0)
                           {
                               $("#"+clicked_id).html("O");  
                               clickCount++;
                               squareCheck();  
                               
                           }
                           else{                                
                               $("#"+clicked_id).html("X");
                               clickCount++;
                               squareCheck();
                           }
            }
            function squareCheck()
                {                   
                    var a1=$("#a1").html();                    
                    var a2=$("#a2").html();
                    var a3=$("#a3").html();
                    var b1=$("#b1").html();
                    var b2=$("#b2").html();
                    var b3=$("#b3").html();
                    var c1=$("#c1").html();
                    var c2=$("#c2").html();
                    var c3=$("#c3").html();
                                        
                    if((a1==a2 && a1==a3 && a3 =="O") || (b1==b2 && b1==b3 && b3 =="O") || (c1==c2 && c1==c3 && c3 =="O")
                      || (a1==b1 && a1==c1 && a1 =="O") || (a2==b2 && a2==c2 && a2 =="O") || (a3==b3 && a3==c3 && a3 =="O")
                      || (a1==b2 && a1==c3 && a1 =="O") || (a3==b2 && a3==c1 && a3 =="O"))
                    {
                        $(".winner").html("player 1 is winner");
                        $(".result").html(" ");
                        noWin=false;
                        
                    }
                    else if((a1==a2 && a1==a3 && a3 =="X") || (b1==b2 && b1==b3 && b3 =="X") || (c1==c2 && c1==c3 && c3 =="X")
                      || (a1==b1 && a1==c1 && a1 =="X") || (a2==b2 && a2==c2 && a2 =="X") || (a3==b3 && a3==c3 && a3 =="X")
                      || (a1==b2 && a1==c3 && a1 =="X") || (a3==b2 && a3==c1 && a3 =="X"))
                    {
                         $(".winner").html("player 2 is winner");
                        $(".result").html(" ");
                        noWin=false;
                       
                    }
                    else if(clickCount == 9)
                    {
                        $(".winner").html("it's a draw");
                        $(".result").html(" ");
                    }
                    else
                    {
                        playerTurn();
                    }
                    
                    
                   
                }
            function playerTurn()
            {
                if(turn==0)
                           {                                                           
                               
                               $(".result").html("player 2 turn");
                               turn=1;
                           }
                           else{   
                               $(".result").html("playr 3 turn");
                               turn=0;
                           }
            }
                