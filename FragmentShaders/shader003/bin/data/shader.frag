#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265358979323846

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform float u_slider1;
uniform float u_slider2;
uniform float u_slider3;
uniform float u_slider4;

float random (in vec2 _st) { 
    return fract(sin(dot(_st.xy,
                         vec2(u_slider1,u_slider2)))* 
        500.0);
}

vec2 truchetPattern(in vec2 _st, in float _index){
    _index = fract(((_index-u_slider3)*2.0));
    if (_index > 0.854) {
        _st = vec2(1.0) - _st;
    } else if (_index > 0.5) {
        _st = vec2(1.0-_st.x,_st.y);
    } else if (_index > 0.450) {
        _st = 1.0-vec2(1.000-_st.x,_st.y);
    }
    return _st;
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st *= u_time*u_slider4;
    // st = (st-vec2(5.0))*(abs(cos(u_time*0.2))*5.);
    // st.x += u_time*.3;

    vec2 ipos = floor(st);  // integer
    vec2 fpos = fract(st);  // fraction

    vec2 tile = truchetPattern(fpos, random( ipos ));

    float color = 0.0;

    // Maze
    color = smoothstep(tile.x-0.3,tile.x,tile.y)-
            smoothstep(tile.x,tile.x+0.3,tile.y);

    // Circles
    color = (step(length(tile),0.6) -
             step(length(tile),0.4) ) +
            (step(length(tile-vec2(1.)),0.6) -
             step(length(tile-vec2(1.)),0.4) );

    // Truchet (2 triangles)
    // color = step(tile.x,tile.y);

    gl_FragColor = vec4(vec3(color*u_time),.95);
}