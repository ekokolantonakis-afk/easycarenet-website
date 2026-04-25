"use client";

import { useEffect, useRef } from "react";

const NODES = [
  { id: "core", label: "Core", nx: 0.5, ny: 0.5, size: 5.5, important: true },
  { id: "website", label: "Website", nx: 0.18, ny: 0.22, size: 3.8 },
  { id: "platforms", label: "Platforms", nx: 0.82, ny: 0.22, size: 3.8 },
  { id: "ecommerce", label: "Ecommerce", nx: 0.12, ny: 0.5, size: 3.8 },
  { id: "automations", label: "Automations", nx: 0.88, ny: 0.5, size: 3.8 },
  { id: "savings", label: "Savings", nx: 0.5, ny: 0.86, size: 4 },
  { id: "ai", label: "AI Agent", nx: 0.5, ny: 0.14, size: 4 },
  { id: "crm", label: "CRM", nx: 0.28, ny: 0.7, size: 3.2 },
  { id: "payments", label: "Payments", nx: 0.72, ny: 0.7, size: 3.2 },
  { id: "s1", label: "", nx: 0.06, ny: 0.12, size: 2.2 },
  { id: "s2", label: "", nx: 0.94, ny: 0.12, size: 2.2 },
  { id: "s3", label: "", nx: 0.04, ny: 0.78, size: 2.2 },
  { id: "s4", label: "", nx: 0.96, ny: 0.78, size: 2.2 },
  { id: "s5", label: "", nx: 0.34, ny: 0.06, size: 1.8 },
  { id: "s6", label: "", nx: 0.66, ny: 0.06, size: 1.8 },
  { id: "s7", label: "", nx: 0.22, ny: 0.94, size: 1.8 },
  { id: "s8", label: "", nx: 0.78, ny: 0.94, size: 1.8 },
] as const;

const EDGES: [string, string][] = [
  ["core", "website"], ["core", "platforms"], ["core", "ecommerce"], ["core", "automations"],
  ["core", "savings"], ["core", "ai"], ["core", "crm"], ["core", "payments"],
  ["website", "ai"], ["ai", "platforms"], ["platforms", "automations"], ["automations", "payments"],
  ["payments", "savings"], ["savings", "crm"], ["crm", "ecommerce"], ["ecommerce", "website"],
  ["website", "ecommerce"], ["platforms", "automations"], ["ai", "savings"], ["crm", "automations"],
  ["website", "s1"], ["platforms", "s2"], ["ecommerce", "s3"], ["automations", "s4"],
  ["ai", "s5"], ["ai", "s6"], ["savings", "s7"], ["savings", "s8"],
];

interface RuntimeNode {
  id: string;
  label: string;
  size: number;
  important?: boolean;
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  phase: number;
}

interface RuntimeEdge {
  a: number;
  b: number;
  packets: { t: number; speed: number }[];
}

export default function SystemNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, mobile = false;
    let nodes: RuntimeNode[] = [];
    let edges: RuntimeEdge[] = [];

    function build() {
      const idx = new Map<string, number>();
      nodes = NODES.map((n, i) => {
        idx.set(n.id, i);
        const bx = n.nx * w, by = n.ny * h;
        return {
          id: n.id,
          label: n.label,
          size: n.size,
          important: (n as { important?: boolean }).important,
          baseX: bx,
          baseY: by,
          x: bx,
          y: by,
          phase: Math.random() * Math.PI * 2,
        };
      });
      edges = EDGES.map(([a, b]) => {
        const ai = idx.get(a)!, bi = idx.get(b)!;
        const c = Math.random() < 0.25 ? 2 : Math.random() < 0.7 ? 3 : 4;
        const packets = Array.from({ length: c }, () => ({
          t: Math.random(),
          speed: 1 / (2.8 + Math.random() * 3.5),
        }));
        return { a: ai, b: bi, packets };
      });
    }

    function resize() {
      const r = canvas!.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) return;
      w = r.width;
      h = r.height;
      mobile = w < 700;
      canvas!.width = Math.floor(w * dpr);
      canvas!.height = Math.floor(h * dpr);
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.scale(dpr, dpr);
      build();
    }
    requestAnimationFrame(resize);
    const ro = new ResizeObserver(() => resize());
    ro.observe(canvas);
    window.addEventListener("load", resize);

    function rr(x: number, y: number, ww: number, hh: number, r: number) {
      const rad = Math.min(r, hh / 2, ww / 2);
      ctx!.beginPath();
      ctx!.moveTo(x + rad, y);
      ctx!.arcTo(x + ww, y, x + ww, y + hh, rad);
      ctx!.arcTo(x + ww, y + hh, x, y + hh, rad);
      ctx!.arcTo(x, y + hh, x, y, rad);
      ctx!.arcTo(x, y, x + ww, y, rad);
      ctx!.closePath();
    }

    let last = performance.now(), elapsed = 0, visible = true;
    const onVis = () => {
      visible = !document.hidden;
      if (visible) last = performance.now();
    };
    document.addEventListener("visibilitychange", onVis);

    let raf = 0;
    function frame(now: number) {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (visible) {
        elapsed += dt;
        render(dt);
      }
      raf = requestAnimationFrame(frame);
    }

    function render(dt: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.phase += dt * 0.4;
        const amp = n.important ? 1.4 : 3.4;
        n.x = n.baseX + Math.sin(n.phase) * amp;
        n.y = n.baseY + Math.cos(n.phase * 0.8) * amp;
      }
      for (const e of edges) {
        const A = nodes[e.a], B = nodes[e.b];
        ctx.strokeStyle = "rgba(127,231,255,.10)";
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(A.x, A.y);
        ctx.lineTo(B.x, B.y);
        ctx.stroke();
        for (const p of e.packets) {
          if (reduced) continue;
          p.t += p.speed * dt;
          if (p.t > 1) p.t -= 1;
          const px = A.x + (B.x - A.x) * p.t, py = A.y + (B.y - A.y) * p.t;
          const t0 = Math.max(0, p.t - 0.06);
          const tx = A.x + (B.x - A.x) * t0, ty = A.y + (B.y - A.y) * t0;
          const g = ctx.createLinearGradient(tx, ty, px, py);
          g.addColorStop(0, "rgba(47,211,255,0)");
          g.addColorStop(1, "rgba(47,211,255,.55)");
          ctx.strokeStyle = g;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(tx, ty);
          ctx.lineTo(px, py);
          ctx.stroke();
          ctx.fillStyle = "rgba(201,241,255,.85)";
          ctx.beginPath();
          ctx.arc(px, py, 1.6, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      for (const n of nodes) {
        const pulse = 0.55 + Math.sin(elapsed * 0.9 + n.phase) * 0.15;
        const r = n.size * 4.2;
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r);
        g.addColorStop(0, `rgba(47,211,255,${0.18 * pulse})`);
        g.addColorStop(1, "rgba(47,211,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = n.important ? "rgba(127,231,255,.65)" : "rgba(127,231,255,.35)";
        ctx.lineWidth = n.important ? 1.2 : 0.9;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size + 1.6, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = n.important ? "rgba(201,241,255,.95)" : "rgba(201,241,255,.7)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size * 0.55, 0, Math.PI * 2);
        ctx.fill();
        if (n.label && (!mobile || n.important)) {
          ctx.font = "500 10.5px ui-monospace, SFMono-Regular, Menlo, monospace";
          ctx.textAlign = "center";
          ctx.textBaseline = "top";
          const text = n.label.toUpperCase();
          const m = ctx.measureText(text);
          const tw = m.width, th = 11, tx = n.x, ty = n.y + n.size + 8, padX = 6, padY = 3;
          ctx.fillStyle = "rgba(6,26,43,.55)";
          rr(tx - tw / 2 - padX, ty - padY, tw + padX * 2, th + padY * 2, 4);
          ctx.fill();
          ctx.strokeStyle = "rgba(47,211,255,.18)";
          ctx.lineWidth = 0.6;
          ctx.stroke();
          ctx.fillStyle = n.important ? "rgba(201,241,255,.9)" : "rgba(167,179,194,.78)";
          ctx.fillText(text, tx, ty);
        }
      }
    }

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("load", resize);
    };
  }, []);

  return <canvas id="particles" ref={canvasRef} />;
}
