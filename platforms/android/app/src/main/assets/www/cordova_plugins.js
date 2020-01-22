cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-camera.Camera",
    "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "Camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverOptions",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverOptions"
    ]
  },
  {
    "id": "cordova-plugin-camera.camera",
    "file": "plugins/cordova-plugin-camera/www/Camera.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "navigator.camera"
    ]
  },
  {
    "id": "cordova-plugin-camera.CameraPopoverHandle",
    "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
    "pluginId": "cordova-plugin-camera",
    "clobbers": [
      "CameraPopoverHandle"
    ]
  },
  {
    "id": "cordova-plugin-tesseract-ocr.Tesseract",
    "file": "plugins/cordova-plugin-tesseract-ocr/www/Tesseract.js",
    "pluginId": "cordova-plugin-tesseract-ocr",
    "clobbers": [
      "Tesseract"
    ]
  },
  {
    "id": "cordova-plugin-mobile-ocr.rectext",
    "file": "plugins/cordova-plugin-mobile-ocr/www/rectext.js",
    "pluginId": "cordova-plugin-mobile-ocr",
    "clobbers": [
      "textocr"
    ]
  },
  {
    "id": "cordova-plugin-texttospeech.tts",
    "file": "plugins/cordova-plugin-texttospeech/www/tts.js",
    "pluginId": "cordova-plugin-texttospeech",
    "clobbers": [
      "TTS"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "phonegap-plugin-speech-recognition.SpeechRecognition",
    "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechRecognition.js",
    "pluginId": "phonegap-plugin-speech-recognition",
    "clobbers": [
      "SpeechRecognition"
    ]
  },
  {
    "id": "phonegap-plugin-speech-recognition.SpeechRecognitionError",
    "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechRecognitionError.js",
    "pluginId": "phonegap-plugin-speech-recognition",
    "clobbers": [
      "SpeechRecognitionError"
    ]
  },
  {
    "id": "phonegap-plugin-speech-recognition.SpeechRecognitionAlternative",
    "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechRecognitionAlternative.js",
    "pluginId": "phonegap-plugin-speech-recognition",
    "clobbers": [
      "SpeechRecognitionAlternative"
    ]
  },
  {
    "id": "phonegap-plugin-speech-recognition.SpeechRecognitionResult",
    "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechRecognitionResult.js",
    "pluginId": "phonegap-plugin-speech-recognition",
    "clobbers": [
      "SpeechRecognitionResult"
    ]
  },
  {
    "id": "phonegap-plugin-speech-recognition.SpeechRecognitionResultList",
    "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechRecognitionResultList.js",
    "pluginId": "phonegap-plugin-speech-recognition",
    "clobbers": [
      "SpeechRecognitionResultList"
    ]
  },
  {
    "id": "phonegap-plugin-speech-recognition.SpeechRecognitionEvent",
    "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechRecognitionEvent.js",
    "pluginId": "phonegap-plugin-speech-recognition",
    "clobbers": [
      "SpeechRecognitionEvent"
    ]
  },
  {
    "id": "phonegap-plugin-speech-recognition.SpeechGrammar",
    "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechGrammar.js",
    "pluginId": "phonegap-plugin-speech-recognition",
    "clobbers": [
      "SpeechGrammar"
    ]
  },
  {
    "id": "phonegap-plugin-speech-recognition.SpeechGrammarList",
    "file": "plugins/phonegap-plugin-speech-recognition/www/SpeechGrammarList.js",
    "pluginId": "phonegap-plugin-speech-recognition",
    "clobbers": [
      "SpeechGrammarList"
    ]
  },
  {
    "id": "cordova-plugin-document-scanner.scan",
    "file": "plugins/cordova-plugin-document-scanner/www/scan.js",
    "pluginId": "cordova-plugin-document-scanner",
    "clobbers": [
      "scan"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-statusbar": "2.4.2",
  "cordova-plugin-camera": "4.0.3",
  "cordova-plugin-tesseract-ocr": "0.0.3",
  "cordova-plugin-mobile-ocr": "2.0.0",
  "cordova-plugin-texttospeech": "0.1.1",
  "cordova-plugin-splashscreen": "5.0.2",
  "phonegap-plugin-speech-recognition": "0.3.0",
  "cordova-plugin-document-scanner": "2.0.3"
};
// BOTTOM OF METADATA
});