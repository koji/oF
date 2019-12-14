#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;


uniform float u_slider1;
uniform float u_slider2;
uniform float u_slider3;
uniform float u_slider4;


uniform sampler2D u_tex0;
// uniform sampler2DRect u_tex0;
uniform vec2 u_tex0Resolution;


varying vec4 v_position;
varying vec4 v_color;
varying vec3 v_normal;
varying vec2 v_texcoord;

void main (void) {
	float scope = 1.0;
	vec2 st = gl_FragCoord.xy/u_resolution.xy;
	// vec2 st = gl_FragCoord.xy;
    float aspect = u_resolution.x/u_resolution.y;
    st.x *= aspect;

    vec3 color = vec3(0.0);
	color = vec3(st.x, st.y, (1.0+sin(u_time))*10.5);

    if ( u_tex0Resolution != vec2(0.0) ){
    	float imgAspect = u_tex0Resolution.x / u_tex0Resolution.y;
		// float imgAspect=u_resolution.x/u_resolution.y;
		vec4 img = texture2D(u_tex0, st / vec2(1. ,imgAspect));
		// vec4 img = texture2DRect(u_tex0, st / vec2(1. * 0.5 ,imgAspect* 0.5));
	    color = mix(color, img.rgb, img.a);
    }
	gl_FragColor = vec4(color, .4);
	// gl_FragColor = img;

}
