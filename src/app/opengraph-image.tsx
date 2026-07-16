import { ImageResponse } from "next/og";

export const alt = "MSCI Showcase — Where ideas become digital experiences";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          background: "#05070d",
          color: "#f5f7ff",
          padding: 72,
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ position: "absolute", inset: 0, display: "flex", background: "radial-gradient(circle at 75% 20%, rgba(22,119,255,.36), transparent 42%)" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.18, backgroundImage: "linear-gradient(rgba(96,165,250,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,.25) 1px, transparent 1px)", backgroundSize: "52px 52px" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", width: 58, height: 58, border: "1px solid rgba(55,182,255,.5)", borderRadius: 15, alignItems: "center", justifyContent: "center", color: "#8de7ff", fontSize: 16, fontWeight: 700 }}>MS</div>
          <div style={{ display: "flex", fontSize: 24, fontWeight: 700, letterSpacing: 2 }}>MSCI SHOWCASE</div>
        </div>
        <div style={{ display: "flex", maxWidth: 980, flexDirection: "column", gap: 26 }}>
          <div style={{ display: "flex", fontSize: 74, lineHeight: 0.98, letterSpacing: -4, fontWeight: 650 }}>Where ideas become digital experiences.</div>
          <div style={{ display: "flex", color: "#9ba7bd", fontSize: 24 }}>Research · Design · Engineering · Impact</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "#6f819e", fontSize: 15, letterSpacing: 2 }}>
          <span>DIGITAL EXHIBITION / 2026</span><span>06 PROJECTS · 04 MEMBERS</span>
        </div>
      </div>
    ),
    size,
  );
}
