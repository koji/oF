
uniform sampler2D noiseTex;

in vec2 fragUV;
out vec4 outCol;

void main() {
    outCol = texture(noiseTex, fragUV);
}
