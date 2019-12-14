uniform float u_time;
uniform vec2 u_resolution;
uniform float u_slider1;
uniform float u_slider2;
uniform float u_slider3;
uniform float u_slider4;

void main() {
    float r, g, b;
    for(float i = 1.0; i < 6.0; i++){
        vec2 m = vec2(sin(u_time * 0.1 + i * 4.0 ) * 0.3 + 0.5, (cos(u_time * 0.2 * i) * 0.3 + u_slider4) * (u_resolution.y / u_resolution.x));
        vec2 p = gl_FragCoord.xy / u_resolution.x;
        r += sin(length(m - p) * 180.0 - u_time * 10.0) * u_slider1;
        g += sin(length(m - p) * 181.0 - u_time * 10.0) * u_slider2;
        b += sin(length(m - p) * 182.0 - u_time * 10.0) * u_slider3;
    }
    gl_FragColor = vec4(r, g, b, 1.0);
}
