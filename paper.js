class Paper{
    constructor(x,y,radious){
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,radious,options);
        radious = this.body.radious;
    }
    display(){
        var pos = this.body.position
        ellipseMode(RADIUS);
        ellipse(100,645,21);
    }
}