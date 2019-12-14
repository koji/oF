uniform float u_time;
uniform vec2 u_resolution;
uniform float u_slider1;
uniform float u_slider2;
uniform float u_slider3;
uniform float u_slider4;

vec2 rotate( vec2 matrix, float angle ) {
    return vec2( matrix.x*cos(radians(angle)), matrix.x*sin(radians(angle)) ) + vec2( matrix.y*-sin(radians(angle)), matrix.y*cos(radians(angle)) );
}


void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st = st * 1. - 0.5;
    st.y *= u_resolution.y/u_resolution.x;
    vec2 rr = rotate(st, cos(u_time * 0.3) * 180.0);
    vec2 rg = rotate(st, cos(u_time * 0.5) * -180.0);
    vec2 rb = rotate(st, sin(u_time * 0.5) * 180.0);

    vec3 col = vec3(0.0);
    col.r = length(abs(rr)+sin(u_time*2.0) * 0.2);
    col.g = length(abs(rg)+cos(u_time*2.1) * 0.222);
    col.b = length(abs(rb)-sin(u_time*2.2) * 0.24);
    col = mod(col * u_slider4, u_resolution.x);
    gl_FragColor = vec4(col,1.0);
}