import React, { useEffect, useRef } from "react";

/**
 * OndulaÃ§Ãµes 3D de fita de vidro (igual ao design de referÃªncia),
 * renderizadas em WebGL e pintadas com o verde do portfÃ³lio.
 */
const VERT = `
attribute vec2 aPos;
void main(){ gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

// Linha central da faixa principal: sai do lado esquerdo, desce atÃ© o
// centro e sobe em curva fechada atÃ© o canto superior direito (como no design).
float spine(float u, float t){
  float c = 0.17 - 0.40 * u + 1.08 * u * u * u;
  c += 0.030 * sin(u * 5.0 + t * 0.55) + 0.016 * sin(u * 9.0 - t * 0.7);
  c += 0.020 * sin(t * 0.35);
  return c;
}

vec3 ramp(float d){
  vec3 ink    = vec3(0.012, 0.060, 0.085);
  vec3 deep   = vec3(0.015, 0.200, 0.235);
  vec3 teal   = vec3(0.020, 0.480, 0.460);
  vec3 bright = vec3(0.250, 0.860, 0.760);
  vec3 c = mix(ink, deep, smoothstep(0.0, 0.40, d));
  c = mix(c, teal, smoothstep(0.38, 0.75, d));
  c = mix(c, bright, smoothstep(0.78, 1.0, d));
  return c;
}

// Feixe de fitas paralelas de vidro em volta de uma linha central
vec4 bundle(vec2 p, float u, float asp, float t, float offset, float width, float count, float seed){
  float c  = spine(u, t) + offset;
  float c2 = spine(u + 0.004, t) + offset;
  float slope = (c2 - c) / (0.004 * asp);

  float bc = (p.y - c) / width;
  float env = 1.0 - smoothstep(0.62, 1.0, abs(bc));
  if (env <= 0.0) return vec4(0.0);

  float s = bc * count + sin(u * 6.0 + t * 0.4 + seed) * 0.22;
  float f = fract(s);
  float v = f * 2.0 - 1.0;
  float th = 0.62 + 0.34 * env;
  float vv = v / th;
  float m = (1.0 - smoothstep(0.93, 1.0, abs(vv))) * env;
  if (m <= 0.002) return vec4(0.0);

  float nz = sqrt(max(0.0, 1.0 - vv * vv));
  vec2 perp = normalize(vec2(-slope, 1.0));
  vec3 n = normalize(vec3(perp * vv * 0.9, nz));
  vec3 L = normalize(vec3(-0.35, 0.75, 0.55));
  float diff = clamp(dot(n, L) * 0.5 + 0.5, 0.0, 1.0);
  vec3 H = normalize(L + vec3(0.0, 0.0, 1.0));
  float spec = pow(max(dot(n, H), 0.0), 26.0);
  float rim = pow(1.0 - nz, 1.8);

  float tone = diff * 1.08 - 0.20 + 0.10 * sin(s * 2.2 + seed);
  vec3 col = ramp(clamp(tone, 0.0, 1.0));
  col = mix(col, vec3(0.010, 0.050, 0.075), rim * 0.82);
  col += spec * vec3(0.70, 1.0, 0.95) * 0.9;
  col += 0.16 * vec3(0.10, 0.95, 0.75) * pow(max(0.0, sin(vv * 4.2 + t * 0.5 + seed)), 8.0);
  return vec4(col, m);
}

void main(){
  vec2 uv = gl_FragCoord.xy / uRes.xy;
  float asp = uRes.x / uRes.y;
  vec2 p = vec2((uv.x - 0.5) * asp, uv.y - 0.5);
  vec2 q = p + (uMouse - 0.5) * vec2(0.05, 0.035);
  float u = clamp(uv.x + (uMouse.x - 0.5) * 0.03, 0.0, 1.0);
  float t = uTime;

  // fundo em degradÃª (aqua-esverdeado -> verde profundo)
  float g = clamp(uv.x * 0.75 + (1.0 - uv.y) * 0.55, 0.0, 1.4);
  vec3 c0 = vec3(0.075, 0.800, 0.700);
  vec3 c1 = vec3(0.250, 0.840, 0.760);
  vec3 c2 = vec3(0.010, 0.470, 0.470);
  vec3 c3 = vec3(0.012, 0.260, 0.330);
  vec3 bg = mix(c0, c1, smoothstep(0.0, 0.45, g));
  bg = mix(bg, c2, smoothstep(0.40, 0.95, g));
  bg = mix(bg, c3, smoothstep(0.90, 1.35, g));
  bg += 0.12 * exp(-length((uv - vec2(0.02, 0.98)) * vec2(asp, 1.0)) * 2.4) * vec3(0.5, 1.0, 0.9);

  // sombra suave embaixo da faixa
  float sh = abs((q.y - spine(u, t) + 0.05) / 0.34);
  bg *= 1.0 - 0.32 * (1.0 - smoothstep(0.15, 1.3, sh));

  vec3 col = bg;
  // camadas de trÃ¡s: fitas finas acima e abaixo da principal (efeito de dobras)
  vec4 b2 = bundle(q, u, asp, t * 0.9, 0.215 + 0.03 * sin(u * 3.0 + t * 0.3), 0.045, 1.6, 2.3);
  col = mix(col, b2.rgb, b2.a);
  vec4 b3 = bundle(q, u, asp, t * 1.1, -0.195, 0.035, 1.6, 4.1);
  col = mix(col, b3.rgb, b3.a * 0.9);
  // faixa principal
  vec4 b1 = bundle(q, u, asp, t, 0.0, 0.15, 2.6, 0.0);
  col = mix(col, b1.rgb, b1.a);

  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(gl, type, src) {
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(s));
    return null;
  }
  return s;
}

export default function WaveBackground({ className = "" }) {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false });
    if (!gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "uRes");
    const uTime = gl.getUniformLocation(prog, "uTime");
    const uMouse = gl.getUniformLocation(prog, "uMouse");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
    let visible = true;
    let raf;
    const start = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.0);
      const w = Math.max(2, Math.floor(wrapRef.current.clientWidth * dpr));
      const h = Math.max(2, Math.floor(wrapRef.current.clientHeight * dpr));
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
    };

    const draw = (now) => {
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, reduce ? 4.0 : (now - start) / 1000 + 4.0);
      gl.uniform2f(uMouse, mouse.x, 1.0 - mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    let running = false;
    const loop = (now) => {
      if (!running) return;
      draw(now);
      raf = requestAnimationFrame(loop);
    };

    const startLoop = () => {
      if (running || reduce) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };

    const stopLoop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
    };

    const onMove = (e) => {
      const r = wrapRef.current.getBoundingClientRect();
      mouse.tx = (e.clientX - r.left) / r.width;
      mouse.ty = (e.clientY - r.top) / r.height;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);

    const io = new IntersectionObserver(([en]) => {
      if (en.isIntersecting) {
        startLoop();
      } else {
        stopLoop();
      }
    });
    io.observe(wrapRef.current);
    if (reduce) draw(start + 1);
    else startLoop();

    return () => {
      stopLoop();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ background: "linear-gradient(120deg,#1ccdb0 0%,#008f85 55%,#044c58 100%)" }}
    >
      <canvas ref={canvasRef} className="h-full w-full block" />
    </div>
  );
}

