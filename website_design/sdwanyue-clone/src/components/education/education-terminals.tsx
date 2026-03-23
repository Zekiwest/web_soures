"use client";

/**
 * [INPUT]: 无外部依赖
 * [OUTPUT]: 对外提供 EducationTerminals 组件
 * [POS]: 教育系统页面创建网校CTA区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

export function EducationTerminals() {
  return (
    <div style={{ padding: "80px 0", background: "#FFF", textAlign: "center" }}>
      <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#2b71d4", letterSpacing: "0.9px", marginBottom: "20px" }}>
        万岳在线教育系统
      </h2>
      <p style={{ fontSize: "20px", color: "#323232", letterSpacing: "0.5px", marginBottom: "40px" }}>
        创建您自己的独立网校
      </p>
      <a
        href="#"
        style={{
          display: "inline-block",
          width: "200px",
          height: "50px",
          lineHeight: "50px",
          textAlign: "center",
          color: "#FFF",
          fontSize: "18px",
          background: "linear-gradient(90deg, #2b71d4 0%, #4a90e2 100%)",
          borderRadius: "25px",
          textDecoration: "none",
          boxShadow: "0 4px 15px rgba(43, 113, 212, 0.4)"
        }}
      >
        马上创建
      </a>
    </div>
  );
}