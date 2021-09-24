class Particle {
    constructor(x,y,id,seekradius){
        this.x = x
        this.y = y
        this.id = id
        this.seekradius = seekradius
        this.counddownInitial = 50
        this.counddown = this.counddownInitial
        
        this.xv = int(random([-1,1]))
        this.yv = int(random([-1,1]))
        this.radv = random([0.5,0.6,0.7,0.8,0.9])
        this.color = getRandomColor() 

        this.initialRadius = 10
        this.maxRadius = 30
        this.radius = this.initialRadius
        this.fired = false
    }

    move(allParticles){
        this.reflect()
        this.draw()
        this.infect(allParticles)
        
        if(this.counddown<=0){
            this.counddown = this.counddownInitial
            this.fired=false
            this.xv = int(random([-1,1]))
            this.yv = int(random([-1,1]))
    
        }
        else{
            this.counddown--
        }
        
    }


    infect(allParticles){
        for(let p of allParticles){
            if(this.id!=p.id && this.fired && !p.fired && dist(this.x,this.y,p.x,p.y) <= this.seekradius){
                stroke("yellow")
                //line(this.x,this.y,p.x,p.y)
                p.infect(allParticles)
                p.fired = true
                p.xv = this.xv
                p.yv = this.yv
                p.color = this.color
            }
        }
    }

    draw(){
        this.x+=this.xv
        this.y+=this.yv

        fill(this.fired ? this.color : "blue")
        noStroke()
        if(this.fired){
            let radius = map(sin(frameCount),0, 2*PI, this.initialRadius, this.maxRadius) 
            ellipse(this.x, this.y, radius)
        }
        else{
            ellipse(this.x, this.y, this.radius)
        }
        
        
        if(this.fired){
            noFill()
            stroke("white")
            ellipse(this.x, this.y, this.seekradius)
   
        }
        
    }

    reflect(){
        if(this.x>=width || this.x<=0){
            this.xv*=-1
        }
        
        if(this.y>=height || this.y<=0){
            this.yv*=-1
        }
    }

}