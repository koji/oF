#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    w = ofGetWidth();
    h = ofGetHeight();
    
    cout << w << endl;
    cout << h << endl;
    vidGrabber.setDeviceID(0);
    vidGrabber.initGrabber(w, h);
    
}

//--------------------------------------------------------------
void ofApp::update(){
    vidGrabber.update();
}

//--------------------------------------------------------------
void ofApp::draw(){
    shader.load("", "test.frag");
    shader.begin();
    shader.setUniform1f("u_time", ofGetElapsedTimef());
    shader.setUniform1f("u_w", w);
    shader.setUniform1f("u_h", h);
    float fw =ofMap(vidGrabber.getWidth(), 0, w, .0, 1.0);
    float fh =ofMap(vidGrabber.getHeight(), 0, h, -1.0, 1.0);
    shader.setUniform2f("u_resolution", w, h);
    shader.setUniformTexture("tex0",vidGrabber.getTexture(),0);
    ofDrawRectangle(0,0, ofGetWidth(), ofGetHeight());
    shader.end();
}

void ofxSetColorHSB(float h, float s, float b, float a) {
    if (b==0) return ofSetColor(0,0,0,a); //black
    if (s==0) return ofSetColor(b,b,b,a); //gray
    
    h *= 6.0 / 255.0;
    s *= 1.0 / 255.0;
    
    float x = b * (1-s);
    float y = b * (1-s*(h-int(h)));
    float z = b * (1-s*(1-(h-int(h))));
    
    switch (int(h)) {
        case 0: return ofSetColor(b,z,x,a); //red
        case 1: return ofSetColor(y,b,x,a); //green
        case 2: return ofSetColor(x,b,z,a);
        case 3: return ofSetColor(x,y,b,a); //blue
        case 4: return ofSetColor(z,x,b,a);
        case 5: return ofSetColor(b,x,y,a); //back to red
    }
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
