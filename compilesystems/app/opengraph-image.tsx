import { ImageResponse } from "next/og";
import {
  logoMarkColors,
  logoMarkPaths,
  logoMarkStroke,
  logoMarkViewBox,
} from "./lib/logo-mark";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const colors = logoMarkColors.dark;

function OgLogoMark({ size: markSize }: { size: number }) {
  return (
    <svg
      width={markSize}
      height={markSize}
      viewBox={logoMarkViewBox}
      fill="none"
    >
      <rect width="48" height="48" rx="12" fill={colors.background} />
      <path
        d={logoMarkPaths.left}
        stroke={colors.foreground}
        strokeWidth={logoMarkStroke.width}
        strokeLinecap={logoMarkStroke.linecap}
        strokeLinejoin={logoMarkStroke.linejoin}
      />
      <path
        d={logoMarkPaths.center}
        stroke={colors.accent}
        strokeWidth={logoMarkStroke.width}
        strokeLinecap={logoMarkStroke.linecap}
      />
      <path
        d={logoMarkPaths.right}
        stroke={colors.accent}
        strokeWidth={logoMarkStroke.width}
        strokeLinecap={logoMarkStroke.linecap}
        strokeLinejoin={logoMarkStroke.linejoin}
      />
    </svg>
  );
}

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
            "linear-gradient(135deg, #030712 0%, #0f172a 52%, #1e3a5f 100%)",
          color: colors.foreground,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            marginBottom: "36px",
          }}
        >
          <OgLogoMark size={80} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                fontSize: "52px",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              <span>Compile Systems</span>
              <span style={{ color: colors.accent }}>.</span>
            </div>
            <div
              style={{
                fontSize: "24px",
                fontWeight: 500,
                letterSpacing: "0.04em",
                color: "#94a3b8",
              }}
            >
              Ltd
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: "38px",
            lineHeight: 1.35,
            color: "#cbd5e1",
            maxWidth: "920px",
          }}
        >
          Software engineering — architecture, development, and delivery.
        </div>
        <div
          style={{
            marginTop: "36px",
            fontSize: "28px",
            color: colors.accent,
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
