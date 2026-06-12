import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 48%, #0f766e 100%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "18px",
              background: "#14b8a6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            C
          </div>
          <div style={{ fontSize: "52px", fontWeight: 700, letterSpacing: "-0.03em" }}>
            Compile Systems Ltd
          </div>
        </div>
        <div
          style={{
            fontSize: "40px",
            lineHeight: 1.3,
            color: "#cbd5e1",
            maxWidth: "900px",
          }}
        >
          Software engineering — architecture, development, and delivery.
        </div>
        <div
          style={{
            marginTop: "40px",
            fontSize: "28px",
            color: "#5eead4",
            fontWeight: 600,
          }}
        >
          Your vision. Our code.
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
