uniform float u_time;
uniform vec2 u_resolution;
uniform float u_slider1;
uniform float u_slider2;
uniform float u_slider3;
uniform float u_slider4;

void main (void){
    vec2 uv = vec2(.5, 0.5 * (u_resolution.y / u_resolution.x)) - gl_FragCoord.xy / u_resolution.x;
    float dist = sqrt(dot(uv, uv))*u_slider4;
    float radius = cos(u_time * 15.0) * 0.1 + 0.2;
    float border = sin(u_time * 15.0) * 0.2 + 0.5;
    float t = smoothstep(radius + border, radius - border, dist/2.0);
    gl_FragColor = vec4(t * u_slider1, t, t * u_slider2, u_slider3);
}