function calculate_and_render_sphere(a){
    var canvas = document.getElementById('screen');
    var context = canvas.getContext('2d');
    var value =75
    var x = {number:a,sin:Math.sin(a),x_final:Math.sin(a)*value}
    var y = {number:a,cos:Math.cos(a),y_final:Math.cos(a)*value}
    context.moveTo(75,75);
    context.lineTo(75+parseInt(x.x_final),75+parseInt(y.y_final));
    context.stroke();
    console.log(x.sin,y.cos);
    console.log(x.x_final,y.y_final);
    console.log(x,y);
}

function looping(a, b){
    for(i = a; i <= b; i +=0.01){
        calculate_and_render_sphere(i);
}
}

function render_bitmap(){
    const a =   [[1,0,0,0,0,0,0],
                 [0,2,0,0,0,0,0],
                 [0,0,3,0,0,0,0],
                 [0,0,0,4,0,0,0],
                 [0,0,0,0,5,0,0],
                 [0,0,0,0,0,6,0],
                 [0,0,0,0,0,0,7],]

    for (b in a){
        console.log(a[b][b])
    }
}





