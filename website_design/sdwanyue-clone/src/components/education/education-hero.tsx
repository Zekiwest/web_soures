"use client";

/**
 * [INPUT]: 无外部依赖
 * [OUTPUT]: 对外提供 EducationHero 组件
 * [POS]: 教育系统页面 Hero 区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  { title: "数据私有更安全", desc: "用户数据私有化 不泄密", icon: "🔒" },
  { title: "五端互通更方便", desc: "手机/电脑 多终端支持", icon: "📱" },
  { title: "直播成本更划算", desc: "音视频服务 使用更省钱", icon: "💰" },
  { title: "独立部署更省钱", desc: "独立部署 服务器成本低", icon: "🖥️" },
];

export function EducationHero() {
  return (
    <div
      style={{
        height: "905px",
        backgroundImage: "url('https://www.sdwanyue.com/static/images/education/banner_bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
      }}
    >
      {/* 顶部主内容区 */}
      <div
        style={{
          paddingTop: "150px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* 左侧 */}
        <div style={{ marginRight: "70px" }}>
          <img
            src="https://www.sdwanyue.com/static/images/education/left_img.png"
            alt="在线教育"
            style={{ width: "536px", height: "300px" }}
          />
          <div
            style={{
              paddingTop: "60px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <a
              href="#"
              style={{
                marginRight: "40px",
                width: "140px",
                height: "50px",
                lineHeight: "50px",
                textAlign: "center",
                color: "#FFF",
                fontSize: "16px",
                background: "#2b71d4",
                borderRadius: "25px",
                textDecoration: "none",
              }}
            >
              查看演示
            </a>
            <a
              href="#"
              style={{
                width: "140px",
                height: "50px",
                lineHeight: "50px",
                textAlign: "center",
                color: "#FFF",
                fontSize: "16px",
                background: "#F6C34B",
                borderRadius: "25px",
                textDecoration: "none",
              }}
            >
              了解详情
            </a>
          </div>
        </div>

        {/* 右侧 */}
        <div>
          <img
            src="https://www.sdwanyue.com/static/images/education/right_img.png"
            alt="教育系统展示"
            style={{ width: "728px", height: "602px" }}
          />
        </div>
      </div>

      {/* 底部特性卡片 */}
      <div
        style={{
          marginTop: "-50px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {features.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 10px",
              width: "373px",
              height: "131px",
              background: "#FFF",
              borderRadius: "12px",
              boxSizing: "border-box",
            }}
          >
            <div style={{ marginRight: "16px" }}>
              <img
                src={`https://www.sdwanyue.com/static/images/education/icon${i + 1}.png`}
                alt=""
                style={{ width: "132px", height: "107px" }}
              />
            </div>
            <div>
              <div
                style={{
                  fontSize: "23px",
                  letterSpacing: "0.6px",
                  marginBottom: "6px",
                  color: "#323232",
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.4px",
                  color: "#666",
                }}
              >
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}