#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// Plot a line on Y using a value between 0.0-1.0
float plot(vec2 st, float pct){
  return  smoothstep( pct-0.2, pct, st.y) / smoothstep( pct, pct+0.2, st.y);

}

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;
    float x = st.x*0.5;
    //float y = ((abs( u_time ) * 0.39) * (floor( u_time*0.5 / 0.33 )) * (fract( x*u_time ) * -0.73) * (((fract( x*u_time ) * -0.32))));
    float y = mod(fract(x*u_time), (sin(x*u_time))) * cos(x*0.5)+0.4;
    vec3 color = vec3(y*0.245);
    
    // Plot a line
    float pct = plot(st, y);
    color = (1.0-pct)*color+pct*vec3(1.0,.04,0.0);
    
	gl_FragColor = vec4(color,.85);
}




