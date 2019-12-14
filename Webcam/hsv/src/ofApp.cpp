#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    w = ofGetWidth();
    h = ofGetHeight();
//    cam.initGrabber(w, h, true);
    cam.setup(w, h);

//    ofSetWindowTitle("hsb");
}

//--------------------------------------------------------------
void ofApp::update(){
    
    cam.update();
}

//--------------------------------------------------------------
void ofApp::draw(){
    
    ofBackground(0, 0, 0);
    
    ofSetColor(255,255, 255);
    
    for(int y=0; y<h; y+=10){
        for(int x=0; x<w; x+=10) {
            int i = (y*w+x)*3;
            int r = cam.getPixels()[i+0];
            int g = cam.getPixels()[i+1];
            int b = cam.getPixels()[i+2];
            
            float brightness = (r+g+b)/765.0;
            
            //HSB
            ofSetColor(ofColor::fromHsb(brightness*255, 255, 255));
            
            float co = cos(brightness*TWO_PI);
            float si = sin(brightness*TWO_PI);
            
            // draw
//            ofDrawLine(x-5*co, y-5*si, x+5*co, y+5*si);
//            ofDrawCircle(x, y, (x+5*co + y+5*si)*.05);
            ofDrawTriangle(x-5*co, y-5*si, x+5*co, y+5*si, w, h);
            
        }
    }

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
