class Form{

    constructor(){
       
        this.input= createInput ("Please enter your name");
        this.button= createButton('Hit to Play !')
        this.greeting= createElement('h3');
        this.title = createElement('h2');

    }

    hide(){

        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();

    }

    display(){

        
        this.title.html("Hurdle Jumping Game");
        this.title.position(230,0);

        this.input.position(230,160);
        this.button.position(350,300);
        
        this.button.mousePressed(()=>{

            this.input.hide();
            this.button.hide();
            this.title.hide();

            player.name= this.input.value();

            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Welcome "+ player.name)
            this.greeting.position(230,0)

        });
    }
}