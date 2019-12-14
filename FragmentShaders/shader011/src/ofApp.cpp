#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    ofSetWindowShape(700,700);
    ofSetWindowPosition(0,0);
    ofBackground(0);
    ofSetFrameRate(60);
    
    //load textures with normalized texcoords (0..1)
    ofDisableArbTex();
    earth.load("earth2k.jpg");
    clouds.load("clouds.jpg");
    
    //load the vertex and fragment shaders
    shader.load("shaders/blend");
    
    //initialize sphere
    quadric = gluNewQuadric();
    gluQuadricTexture(quadric, GL_TRUE);
    gluQuadricNormals(quadric, GLU_SMOOTH);

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
    ofRotateY(a);
    shader.begin();
    shader.setUniformTexture("earth", earth, 1);
    shader.setUniformTexture("clouds", clouds, 2);
    shader.setUniform1f("blendAlpha", sin(ofGetElapsedTimef())/5+.15);
    
    // draw sphere
    glEnable(GL_DEPTH_TEST);
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
