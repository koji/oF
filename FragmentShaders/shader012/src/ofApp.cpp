#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    ofSetWindowShape(700,700);
    ofSetWindowPosition(0,0);
    ofBackground(0);
    ofSetFrameRate(60);
    ofEnableAlphaBlending();
    
    ofDisableArbTex();
    //colormap.load("maxresdefault.jpg");
    colormap.load("giphy.gif");
    bumpmap.load("earth-bumps.jpg");
    
    //load the vertex and fragment shaders
    //shader.load("shaders/displace");
    
    //initialize sphere
    quadric = gluNewQuadric();
    gluQuadricTexture(quadric, GL_TRUE);
    gluQuadricNormals(quadric, GLU_SMOOTH);
    
    shader.load("shaders/displace.vert", "shaders/displace.frag");

}

//--------------------------------------------------------------
void ofApp::update(){
    a+=1;

}

//--------------------------------------------------------------
void ofApp::draw(){
    cam.begin();
    ofScale(1,-1);
    //ofRotateZ(a);
    //ofRotateY(a);
    shader.begin();
    shader.setUniformTexture("colormap", colormap, 1);
    shader.setUniformTexture("bumpmap", bumpmap, 2);
    shader.setUniform1i("maxHeight",mouseX);
    
    // draw sphere
    glEnable(GL_DEPTH_TEST);
    //ofTranslate(ofGetWidth()/2, ofGetHeight()/2);
    ofRotateY(360*sinf(float(ofGetFrameNum())/250.0f));
    ofRotate(-90,1,0,0);
    gluSphere(quadric, 250, 500, 500);
    
    shader.end();
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
