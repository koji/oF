#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    
    // framerate
    ofSetFrameRate(60);
    
    gui.setup();
    gui.add(u_slider1.setup("u_slider1", 0.5, -15.0, 15.0));
    gui.add(u_slider2.setup("u_slider2", 0.5, -15.0, 15.0));
    gui.add(u_slider3.setup("u_slider3", 0.5, -15.0, 15.0));
    gui.add(u_slider4.setup("u_slider4", 0.5, 0.1, 50.0));
    gui.add(u_slider5.setup("u_slider5", 0.5, -21.0, 21.0));
    gui.add(u_slider6.setup("u_slider6", 10.0, -21.0, 21.0));
    gui.add(u_slider7.setup("u_slider7", 10.0, -21.0, 21.0));
    gui.add(u_slider8.setup("u_slider8", 10.0, 0.1, 50.0));
    

}

//--------------------------------------------------------------
void ofApp::update(){

}

//--------------------------------------------------------------
void ofApp::draw(){
    // shader's file name
    shader.load("test");
    shader.begin();
    shader.setUniform1f("u_time", ofGetElapsedTimef());
    shader.setUniform2f("u_resolution", ofGetWidth(), ofGetHeight());
    shader.setUniform1f("u_slider1", u_slider1); // for slider 1
    shader.setUniform1f("u_slider2", u_slider2); // for slider 2
    shader.setUniform1f("u_slider3", u_slider3); // for slider 3
    shader.setUniform1f("u_slider4", u_slider4); // for slider 4
    shader.setUniform1f("u_slider5", u_slider5); // for slider 1
    shader.setUniform1f("u_slider6", u_slider6); // for slider 2
    shader.setUniform1f("u_slider7", u_slider7); // for slider 3
    shader.setUniform1f("u_slider8", u_slider8); // for slider 4
    ofDrawRectangle(0,0, ofGetWidth(), ofGetHeight());
    shader.end();
    gui.draw();

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
