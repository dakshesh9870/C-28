class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
    
        }
    this.Launcher = Constraint.create(options);
    World.add(world,this.Launcher)
    this.pointB = pointB
}
    fly(){
        this.Launcher.bodyA = null;
    }              


display (){
    var pos = this.Launcher.bodyA.position;
    var pointB= this.pointB 
    if (this.Launcher.bodyA){
    strokeWeight(4);
    line(pos.x,pos.y,pointB.x,pointB.y)    
    }
    
}
}