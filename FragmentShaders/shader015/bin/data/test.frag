#define rotate(a) mat2(cos(a), sin(a), -sin(a), cos(a))
#define spiral(u, a, r, t, d) abs(sin(t + r * length(u) + a * (d * atan(u.y, u.x))))
#define sinp(a) .5 + sin(a) * .5


uniform float u_time;
uniform vec2 u_resolution;
uniform float u_slider1;
uniform float u_slider2;
uniform float u_slider3;
uniform float u_slider4;
uniform float u_slider5;
uniform float u_slider6;
uniform float u_slider7;
uniform float u_slider8;

void main() {
	
   vec2 st = (u_slider1 * gl_FragCoord.xy - u_resolution.xy) / u_resolution.y - 7.5;
 	st = rotate(-u_time / 10.) * st;
	
	vec3 col;
	float t = u_time*u_slider2;
    vec2 o = vec2(cos(u_time / 10.), sin(u_time / 2.));
	for (int i = 0; i < 3; i++) {
		t += 0.3 * spiral(vec2(o + st), u_slider5, 16. + u_slider6 * o.x - o.y, -u_time / 100., 1.)
            * spiral(vec2(o - st), u_slider7, 16. + u_slider8 * o.x - o.y, u_time / 100., -1.);
		col[i] = sin(u_slider3 * t - length(st) * u_slider4 * sinp(t));
	}
	
	gl_FragColor = vec4(col, 1.0);
    
}
