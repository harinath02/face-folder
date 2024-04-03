async function getFaceDescriptorFromWebcam() {
    const video = document.createElement('video'); // Assuming this is integrated into a frontend
  
    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: true });
    } catch (err) {
      console.error(err);
      return null; // Handle webcam access error
    }
  
    video.srcObject = stream;
    video.play();
  
    // Capture a frame after a short delay to ensure video is playing
}  