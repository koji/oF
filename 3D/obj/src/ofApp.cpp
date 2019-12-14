#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    ofBackground(50, 50, 50, 0);
    ofEnableDepthTest();
    ofEnableSmoothing();
    loader.loadModel("model/bunny.obj");

}

//--------------------------------------------------------------
void ofApp::update(){

}

//--------------------------------------------------------------
void ofApp::draw(){
    light.enable();
    ofEnableSeparateSpecularLight();
    ofEnableLighting();
    
    cam.begin();
    ofSetColor(255, 255, 255, 255);
    
//    loader.setScale(0.75, 0.75, 0.75);
    loader.setScale(1, 1, 1);
    loader.setPosition(0, 0, 0);
    loader.drawFaces();
    cam.end();

}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
