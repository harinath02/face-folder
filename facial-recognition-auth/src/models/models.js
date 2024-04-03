const faceapi = require('face-api.js');

const modelsPath = '/path/to/models'; // Replace with actual models path

const initFaceDetectionModels = async () => {
  await faceapi.nets.ssdMobilenetv1.loadFromUri(modelsPath);
  await faceapi.nets.faceLandmark68Net.loadFromUri(modelsPath);
  await faceapi.nets.faceRecognitionNet.loadFromUri(modelsPath);
  console.log('Face Detection Models Loaded...');
};

module.exports = initFaceDetectionModels;