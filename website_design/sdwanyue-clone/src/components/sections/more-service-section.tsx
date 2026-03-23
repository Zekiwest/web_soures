"use client";

/**
 * [INPUT]: 无外部依赖
 * [OUTPUT]: 对外提供 MoreServiceSection 组件
 * [POS]: 首页更多服务展示区（抽屉式卡片）
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const serviceItems = [
  {
    id: 1,
    title: "成品源码",
    label: "稳定可靠",
    desc: "现成源码快速上线，成熟解决方案，历经市场验证，稳定可靠",
    bgImage: "https://qiniugw.sdwanyue.com/20251119/06/1-2.png",
    link: "/source",
  },
  {
    id: 2,
    title: "定制开发",
    label: "专属定制",
    desc: "根据需求量身打造，从需求分析到上线部署，全程服务",
    bgImage: "https://qiniugw.sdwanyue.com/20251119/06/2-2.png",
    link: "/custom",
  },
  {
    id: 3,
    title: "增值服务",
    label: "持续赋能",
    desc: "运营支持、技术培训、功能升级等增值服务，助力业务发展",
    bgImage: "https://qiniugw.sdwanyue.com/20251119/06/3-2.png",
    link: "/service",
  },
];

export function MoreServiceSection() {
  return (
    <div
      style={{
        height: "846px",
        position: "relative",
        background: "#F5F7FA",
      }}
    >
      {/* 抽屉容器 */}
      <div
        style={{
          display: "flex",
          position: "relative",
          margin: "363px auto 28px",
          width: "1180px",
          height: "119px",
          backgroundImage: "url('https://qiniugw.sdwanyue.com/20251119/06/%E8%93%9D%E8%89%B2%E5%BA%95%E5%BA%A7.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* 阴影层 */}
        <div
          style={{
            position: "absolute",
            top: "28.5px",
            left: "40px",
            width: "1100px",
            boxShadow: "0 0px 10px 2px #000",
            zIndex: 2,
          }}
        />

        {/* 底部文字 */}
        <div
          style={{
            position: "absolute",
            bottom: "17.5px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#FFF",
            fontSize: "18px",
            fontWeight: 500,
          }}
        >
          万岳科技为了满足不同客户的需求，提供了多种开发模式
        </div>

        {/* 抽屉卡片 */}
        {serviceItems.map((item, index) => (
          <div
            key={item.id}
            className="drawer-card"
            style={{
              padding: "49px 0 0 36px",
              position: "absolute",
              top: "-304.5px",
              width: "345px",
              height: "335px",
              backgroundImage: `url('${item.bgImage}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              transition: "all 0.3s",
              left:
                index === 0
                  ? "54px"
                  : index === 1
                  ? "50%"
                  : undefined,
              right: index === 2 ? "54px" : undefined,
              transform: index === 1 ? "translateX(-50%)" : undefined,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.top = "-317px";
              e.currentTarget.style.height = "347px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.top = "-304.5px";
              e.currentTarget.style.height = "335px";
            }}
          >
            {/* 标题 */}
            <div
              style={{
                position: "relative",
                color: "#282F3F",
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              {item.title}
              <div
                style={{
                  position: "absolute",
                  bottom: "-16px",
                  left: 0,
                  width: "40px",
                  height: "4px",
                  borderRadius: "100px",
                  background: "linear-gradient(90deg, #1B67FF 0%, #50A1FF 100%)",
                }}
              />
            </div>

            {/* 标签 */}
            <div
              style={{
                marginTop: "50px",
                color: "#0F5FFF",
                fontSize: "16px",
                fontWeight: 500,
                letterSpacing: "-0.439px",
              }}
            >
              {item.label}
            </div>

            {/* 描述 */}
            <div
              style={{
                marginTop: "12px",
                width: "273px",
                color: "#737C8F",
                fontSize: "16px",
                lineHeight: "28px",
              }}
            >
              {item.desc}
            </div>

            {/* 链接 */}
            <div
              className="drawer-link"
              style={{
                position: "absolute",
                bottom: "37px",
                left: "50%",
                transform: "translateX(-50%)",
                opacity: 0,
                transition: "all 0.2s",
              }}
            >
              <a
                href={item.link}
                style={{
                  color: "#0F5FFF",
                  fontSize: "15px",
                  fontWeight: 500,
                  lineHeight: "28px",
                }}
              >
                了解详情 →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}