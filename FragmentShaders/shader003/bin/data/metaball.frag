#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_slider1;
uniform float u_slider2;
uniform float u_slider3;
uniform float u_slider4;

float hash(float x)
{
    return fract(sin(x) * 43758.5453) * 2.0 - 1.0;
}

vec2 hashPosition(float x)
{
    return vec2(
                floor(hash(x) * 3.0) * 32.0 + 16.0,
                floor(hash(x * 1.1) * 2.0) * 32.0 + 16.0
                );
}


//void main( out vec4 fragColor, in vec2 fragCoord )
void main()
{
    float speed = 50.;
    float time = u_time * .1;
    float falloff = 1.3;
    
    const int NumMetaBalls = 25;
    vec3 metaBalls[NumMetaBalls];
    
    float d = 0.;
    vec2 screen;
    float c = 0.;
    
    for(int i = 0; i < NumMetaBalls; i++){
        vec2 pos = hashPosition(float(i))+
        vec2(time * speed * (1. + float(i)));
        
        screen = floor(mod(pos/u_resolution, vec2(2.)));
        
        // remap 0..1 to -1 to 1 to avoid branching in next line.
        vec2 dir = screen * 2. - 1.;
        vec2 finalPos = vec2(u_resolution * (vec2(1.) - screen) + dir * mod(pos, u_resolution));
        
        metaBalls[i] = vec3(finalPos, abs((float(i))));
        metaBalls[i].z = u_resolution.y / 200. * float(i) * 0.5;
        
        d = metaBalls[i].z / distance(metaBalls[i].xy , gl_FragCoord.xy);
        c += pow(d, falloff);
    }
    
    // remove blurring
    float c2 = (c < 1.) ? 0. : c;
    
    gl_FragColor = vec4(c2+u_slider1, c + 0.2+u_slider2, c+u_slider3, 1);
}
