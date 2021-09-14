class Ground {
    constructor(x,y,w,h) {
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;

        let options={
            isStatic:true,
            restitution:0.5,
        }
        
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
    }

    display(){
        let pos=this.body.position;

        push();
        translate(pos.x,pos.y);
        strokeWeight(1);
        stroke(255);
        fill(127);
        rect(0,0,this.w,this.h);
        pop();
    }
    
}