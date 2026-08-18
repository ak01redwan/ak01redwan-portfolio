"use client";

import React from "react";

export default function GlobalError() {
  return (
    <html lang="en">
      <body>
        <div style={{ padding: "40px", textAlign: "center", fontFamily: "sans-serif" }}>
          <h2>An error occurred</h2>
          <p>Please refresh the page.</p>
        </div>
      </body>
    </html>
  );
}
