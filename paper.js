class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            destiny:1.2			
			}
		this.r=r;


        this.image=loadImage("paper.png");
		this.body=Bodies.circle(x, y, r, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)

			fill(255)
            ImageMode(CENTER);
			Image(this.Image,0,0,this.r,this.r)
			pop()
			
	}

}