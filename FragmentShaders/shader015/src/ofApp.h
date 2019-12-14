#pragma once

#include "ofMain.h"
#include "ofxGui.h"

class ofApp : public ofBaseApp{

	public:
		void setup();
		void update();
		void draw();

		void keyPressed(int key);
		void keyReleased(int key);
		void mouseMoved(int x, int y );
		void mouseDragged(int x, int y, int button);
		void mousePressed(int x, int y, int button);
		void mouseReleased(int x, int y, int button);
		void mouseEntered(int x, int y);
		void mouseExited(int x, int y);
		void windowResized(int w, int h);
		void dragEvent(ofDragInfo dragInfo);
		void gotMessage(ofMessage msg);
		
    ofShader shader;
    ofxPanel gui;
    ofxFloatSlider u_slider1;
    ofxFloatSlider u_slider2;
    ofxFloatSlider u_slider3;
    ofxFloatSlider u_slider4;
    ofxFloatSlider u_slider5;
    ofxFloatSlider u_slider6;
    ofxFloatSlider u_slider7;
    ofxFloatSlider u_slider8;
};