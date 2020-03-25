class Form{
constructor(){}

display(){

    var title = createElement('h1')
    title.html("Car Racing Game")
    title.position(130,0);

     var input = createInput("DO you like SCHOOL?");
     var button= createButton("YES");
     var button1 = createButton("NO");
    //  var greeting = createElement('h2');
     input.position(130,160);
     button.position(250,200);
     button1.position(300,200)
     button.mousePressed(function(){
         input.hide();
         button.hide();
         var name = input.value();
         playerCount+=1;
         player.update(name);
         player.updateCount(playerCount);
         button1.visibility = false;


        //  greeting.html("hello" + name);
        //  greeting.position(130,160);
     })

     


}


}