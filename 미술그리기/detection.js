const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');

function onResults(results) {
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(
      results.image, 0, 0, canvasElement.width, canvasElement.height);
  if (results.multiHandLandmarks) {
    for (const landmarks of results.multiHandLandmarks) {
      drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
                     {color: '#00FF00', lineWidth: 5});
      drawLandmarks(canvasCtx, landmarks, {color: '#FF0000', lineWidth: 2});

      prev_draw_x1=landmarks[8].x*1200
      prev_draw_y1=landmarks[8].y*1200







      setTimeout(function () {
        prev_draw_x2=landmarks[8].x*1200
        prev_draw_y2=landmarks[8].y*1200
      },0.5);
      setTimeout(function () {
        prev_draw_x3=landmarks[8].x*1200
        prev_draw_y3=landmarks[8].y*1200
      },0.5);
      setTimeout(function () {
        prev_draw_x4=landmarks[8].x*1200
        prev_draw_y4=landmarks[8].y*1200
      },0.5);
      setTimeout(function () {
        prev_draw_x5=landmarks[8].x*1200
        prev_draw_y5=landmarks[8].y*1200
      },0.5);

      console.log(prev_draw_y4) 
if(prev_draw_x4<40){
  if(prev_draw_y4<230){
  color="red" 
  document.getElementById('brother').innerHTML=color

}

if(prev_draw_y4>230&prev_draw_y4<480){
  color="green"
  document.getElementById('brother').innerHTML=color

}

if(prev_draw_y4<720&prev_draw_y4>480){
  color="blue"
  document.getElementById('brother').innerHTML=color

}



if(prev_draw_y4>720&prev_draw_y4<960){
  color="black"
  document.getElementById('brother').innerHTML=color

}



if(prev_draw_y4>960){
  color="eraser"
  document.getElementById('brother').innerHTML=color

}




}







    }
  }
  output_canvass=canvasCtx
  canvasCtx.restore();
}

const hands = new Hands({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
}});
hands.setOptions({
  maxNumHands: 2,
  modelComplexity: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});
hands.onResults(onResults);

const camera = new Camera(videoElement, {
  onFrame: async () => {
    await hands.send({image: videoElement});
  },
  width:500,
  height:250,
  flip_horiz: true
});

camera.start();



