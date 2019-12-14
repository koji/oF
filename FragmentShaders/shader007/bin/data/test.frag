uniform float u_time;
uniform vec2 u_resolution;
uniform float u_slider1;
uniform float u_slider2;
uniform float u_slider3;
uniform float u_slider4;
uniform float u_r;
uniform float u_g;
uniform float u_b;

float random (in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
    vec2 m;
    float t;
    for(float i =0.0; i<15.0; i+=1.0) {
        m = vec2(sin(u_time * 5.0 * i) * 0.7, cos(u_time * 4.2 + i) * 0.7);
        vec2 pp = vec2(random(m), random(m*5.0)) * 5.0 - 1.0;
        vec2 pos = (gl_FragCoord.xy * 3.5 -u_resolution) / min(u_resolution.x, u_resolution.y);
        t += 0.1/length(pp-pos);
    }
    vec3 col = vec3 (t) * vec3(.5, .8, 1.) + vec3(m , u_slider1);
    gl_FragColor = vec4(col, 1.0);
}
