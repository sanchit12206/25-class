class Paper
{
	constructor()
	{
		var options={
			restitution:0.3,
            friction:0,
            density:1.2
            

			}
	
		this.body=Bodies.circle(250,540,70, options);
        this.image=loadImage("paper.png")
 		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		
var angle=this.body.angle
			push()
		//	translate(Pos.x, Pos.y);
			
			//strokeWeight(4);
            imageMode(RADIUS);
			fill(128,128,128)
			image(this.image,pos.x,pos.y,70,70);
			pop()
			
	}

}

