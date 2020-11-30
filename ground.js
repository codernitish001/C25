class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            friction : 0.5,
            density:1.5
        }
        this.body = B.rectangle(x,y,width,height,options);
        this.x =x;
        this.y = y;
        this.width = width;
        this.height = height;
        W.add(world,this.body);

    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill ("brown");
        rectMode(CENTER); 
        rect(0, 0, this.width, this.height); 
        pop(); 
    }
}