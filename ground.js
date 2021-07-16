class ground
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,
			friction:0.5,
			restitution:0.3,
			destiny:1.2,	
			

			}
		
			this.ground=Bodies.rectangle(x,y,1200,20,options)

			World.add(world, this.ground);
	}
	display()
	{
			
					

			push()
			rectMode(CENTER)
			
			fill(200,0,255)

			
			rect(this.ground.position.x,this.ground.position.y,1200,20);
			pop();
			
	}

}