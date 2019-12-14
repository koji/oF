uniform sampler2D earth;
uniform sampler2D clouds;
uniform float blendAlpha;

void main() {
    vec2 texcoord = gl_TexCoord[0].xy;
    vec4 background = texture2D(earth, texcoord);  
    vec4 foreground = texture2D(clouds, texcoord);  

    gl_FragColor = foreground * blendAlpha + background; 
}