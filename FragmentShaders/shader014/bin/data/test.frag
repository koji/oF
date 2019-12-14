uniform float u_time;
uniform vec2 u_resolution;
uniform float u_slider1;
uniform float u_slider2;
uniform float u_slider3;
uniform float u_slider4;
uniform sampler2D u_img;



vec3 hsv(float h, float s, float v)
{
  return mix( vec3( 1.0 ), clamp( ( abs( fract(
    h + vec3( 3.0, 2.0, u_slider1 ) / 3.0 ) * 6.0 - 3.0 ) - 1.0 ), 0.0, 1.0 ), s ) * v;
}

void main()
{
	vec2 uv = (gl_FragCoord.xy / u_resolution.xy)*2.+-1.;
    uv.x *= u_resolution.x/u_resolution.y;
    vec2 z = uv;
    float t;
    for (int i = 0; i < 7; i++)
    {
        z = vec2(z.x * z.x * u_slider2 - z.y * z.y*u_slider3, 2.*z.x*z.y)+vec2(sin(u_time), cos(u_time));
        if (t< 5.) t = distance(z, vec2(0.));
        if (t >= 5.) t = pow(dot(z,z), float(i)/t);
        
    }
	gl_FragColor = vec4(hsv(t + u_time, 1.0, 1.0),1.0);
}

