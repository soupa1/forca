class Parede {
    constructor(x,y,l,a){
        var config = {
            isStatic: true
        }
        this.corpo = Bodies.rectangle(x, y, l, a, config);
        this.lar = l;
        this.alt = a;
        World.add(world,this.corpo);
    }

    show(){
        var pos = this.corpo.position;

        push();
        rectMode(CENTER);
        stroke("grey");
        fill("black");
        rect(pos.x, pos.y, this.lar, this.alt);
        pop();
    }
}