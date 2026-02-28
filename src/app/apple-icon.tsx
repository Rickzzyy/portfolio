import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          borderRadius: 38,
        }}
      >
        <span
          style={{
            fontSize: 110,
            fontWeight: 700,
            fontFamily: "monospace",
            color: "#3b82f6",
            lineHeight: 1,
          }}
        >
          R
        </span>
        <span
          style={{
            fontSize: 32,
            fontWeight: 500,
            fontFamily: "monospace",
            color: "#888888",
            marginTop: -8,
          }}
        >
          ~/
        </span>
      </div>
    ),
    { ...size },
  );
}
