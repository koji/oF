#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
// uniform sampler2D u_tex0;
uniform sampler2D tex0;
uniform float u_w;
uniform float u_h;
// uniform vec2 u_mouse;
// uniform sampler2DRect tex0;
/*
void main()
{
//  vec2 uv=gl_FragCoord.xy/u_resolution.xy;  
//  uv -= .5; 
    float drunk=sin(u_time*2.)*6.;
    float unitDrunk1=(sin(u_time*1.2)+1.)/2.;
    float unitDrunk2=(sin(u_time*1.8)+1.)/2.;
    
    vec2 normalizedCoord=mod((gl_FragCoord.xy+vec2(0,drunk))/u_resolution.xy,1.);
    normalizedCoord.x=pow(normalizedCoord.x,mix(1.25,.85,unitDrunk1));
    normalizedCoord.y=pow(normalizedCoord.y,mix(.85,1.25,unitDrunk2));
    
    vec2 normalizedCoord2=mod((gl_FragCoord.xy+vec2(drunk,0))/u_resolution.xy,1.);
    normalizedCoord2.x=pow(normalizedCoord2.x,mix(.95,1.1,unitDrunk2));
    normalizedCoord2.y=pow(normalizedCoord2.y,mix(1.1,.95,unitDrunk1));
    
    // vec2 normalizedCoord3=gl_FragCoord.xy -.5/u_resolution.xy;
    vec2 uv = gl_FragCoord.xy -.5/ u_resolution.xy;
    // uv = vec2( uv.x*.5, 1.-uv.y);
    vec2 normalizedCoord3 = uv;
    vec4 color=texture2DRect(tex0,normalizedCoord);
    vec4 color2=texture2DRect(tex0,normalizedCoord2);
    vec4 color3=texture2DRect(tex0,normalizedCoord3);
    
    // Mess with colors and test swizzling
    color.x=sqrt(color2.x);
    color2.x=sqrt(color2.x);
    
    vec4 finalColor=mix(mix(color,color2,mix(.4,.6,unitDrunk1)),color3,.4);
    
    if(length(finalColor)>1.4)
    finalColor.xy=mix(finalColor.xy,normalizedCoord3,.5);
    else if(length(finalColor)<.4)
    finalColor.yz=mix(finalColor.yz,normalizedCoord3,.5);
    // finalColor.y = 1. - finalColor.y;
    gl_FragColor=finalColor;
    // gl_FragColor = texture2DRect(tex0, uv);
}
*/


// #define taps 6.
// #define tau 6.28

// void main(){
//     vec2 uv=gl_FragCoord.xy/u_resolution.xy;
//     uv -= .5;
//     vec4 c=texture2DRect(tex0,uv);
//     float t=u_time;360
//     float d=.01+sin(t)*.01+.1/u_resolution.x*.1;
//     for(float i=0.;i<tau;i+=tau/taps){
//         float a=i+t;
//         vec4 c2=texture2DRect(tex0,vec2(uv.x+cos(a)*d,uv.y+sin(a)*d));
//         #ifdef light
//         c=max(c,c2);
//         #else
//         c=min(c,c2);
//         #endif
//     }
//     gl_FragColor=c;
// }


// void mainImage(out vec4 fragColor,in vec2 fragCoord)
// {
//     float mouse=iMouse.x;
//     if(iMouse.x==0.)
//     mouse=500.;
//     vec2 uv=fragCoord.xy;
//     float scale=10000./(1.+mouse);
//     vec2 bUv=floor(uv/scale)*scale;
//     vec2 oUv=step(0.,abs(fract(uv/scale)*scale-.5)-(.48-min(.001*scale,.01)));
//     bUv/=iResolution.xy;
//     fragColor=texture(iChannel0,bUv);
//     fragColor=mix(texture(iChannel1,bUv),fragColor,step(.0001,fragColor.r+fragColor.g+fragColor.b));
//     fragColor=mix(vec4(1.),fragColor,step(.001,oUv.x+oUv.y));
    
// }


void main(){
    // vec2 uv=(gl_FragCoord.xy * 2. - u_resolution.xy)/min(u_resolution.x, u_resolution.y);
    vec2 uv=gl_FragCoord.xy/u_resolution.xy;
    uv.y = 1.0 - uv.y;
    uv*=vec2(u_w,u_h);
    // uv *= 500.;

    float scale=10000./(1.+uv.x);
    vec2 bUv=floor(uv/scale)*scale;
    vec2 oUv=step(0.,abs(fract(uv/scale)*scale-.5)-(.48-min(.001*scale,.01)));
    bUv/=u_resolution.xy;
    vec4 col =texture2D(tex0,bUv);
    col=mix(texture2D(tex0,bUv),col,step(.0001,col.r+col.g+col.b));
    col=mix(vec4(1.),col,step(.001,oUv.x+oUv.y));
    gl_FragColor=col;
}