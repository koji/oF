in vec3 pos;
in vec2 uv;
out vec2 fragUV;

void main() {
    gl_Position = vec4(pos, 1.0);
    fragUV = vec2(uv.x, 1.0- uv.y);
}
