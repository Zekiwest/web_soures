"use client";

/**
 * [INPUT]: 无外部依赖
 * [OUTPUT]: 对外提供 NewsSection 组件
 * [POS]: 首页最新动态区（三栏新闻卡片）
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const newsCategories = [
  {
    title: "万岳动态",
    subtitle: "软件开发服务商",
    bgImage: "https://qiniugw.sdwanyue.com/20251122/04/%E4%B8%87%E5%B2%B3%E5%8A%A8%E6%80%81.png",
    news: [
      { date: "03-21", title: "在线教育创业新机会：一套教育培训APP与小程序系统源码能做什么？" },
      { date: "03-20", title: "上门家政预约系统源码+小程序：打造一站式家政服务平台" },
      { date: "03-07", title: "AI医疗时代来了：互联网医院系统源码与AI问诊APP开发趋势解析" },
      { date: "03-06", title: "远程医疗爆发，视频问诊APP/小程序开发为什么越来越火？" },
      { date: "03-04", title: "数字药店系统源码：传统药店如何通过智慧药店APP实现数字化升级？" },
    ],
  },
  {
    title: "行业新闻",
    subtitle: "把握趋势动向",
    bgImage: "https://qiniugw.sdwanyue.com/20251122/04/%E8%A1%8C%E4%B8%9A%E6%96%B0%E9%97%BB.png",
    news: [
      { date: "03-18", title: "AI+招聘系统源码：下一代求职招聘平台开发方向" },
      { date: "03-17", title: "网约车平台创业新机会：一套成熟网约车系统源码就能快速上线" },
      { date: "03-16", title: "食堂采购管理难？一套学校食堂采购平台开发方案帮你解决" },
      { date: "03-14", title: "直播电商进入新阶段：直播带货系统源码技术趋势与开发模式升级" },
      { date: "03-13", title: "教育、电商都在用：私域直播APP开发如何打造私域运营闭环" },
    ],
  },
  {
    title: "常见问题",
    subtitle: "快速解惑答疑",
    bgImage: "https://qiniugw.sdwanyue.com/20251122/04/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.png",
    news: [
      { date: "03-04", title: "数字药店系统源码：传统药店如何通过智慧药店APP实现数字化升级？" },
      { date: "02-26", title: "2026年做知识付费平台开发还有机会吗？源码模式如何盈利？" },
      { date: "01-31", title: "万岳在线问诊系统源码：为医疗行业带来的革命性变化与机会" },
      { date: "01-28", title: "私域+网校系统源码，教育培训平台开发的新增长模式" },
      { date: "01-21", title: "为什么越来越多企业选择 AI 数字人系统源码进行平台级开发？" },
    ],
  },
];

export function NewsSection() {
  return (
    <div
      style={{
        paddingTop: "90px",
        height: "660px",
        background: "#FFF",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          marginBottom: "50px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#282F3F",
            fontSize: "35px",
            fontWeight: 700,
            lineHeight: "52.5px",
          }}
        >
          最新动态
        </h2>
      </div>

      {/* 新闻卡片容器 */}
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {newsCategories.map((category, index) => (
          <div
            key={category.title}
            style={{
              margin: "0 15px",
              width: "380px",
              height: "397px",
              borderRadius: "8px",
              border: "1px solid #ECF0FB",
              background: "#FFF",
              overflow: "hidden",
            }}
          >
            {/* 卡片顶部 */}
            <div
              style={{
                paddingTop: "56px",
                paddingLeft: "32px",
                width: "380px",
                height: "168px",
                backgroundImage: `url('${category.bgImage}')`,
                backgroundSize: "cover",
              }}
            >
              <div
                style={{
                  marginBottom: "2px",
                  color: "#C7CFDD",
                  fontSize: "14px",
                }}
              >
                {category.subtitle}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    color: "#FFF",
                    fontSize: "20px",
                    fontWeight: 700,
                  }}
                >
                  {category.title}
                </span>
                <span
                  style={{
                    display: "inline-block",
                    margin: "0 8px",
                    width: "1px",
                    height: "16px",
                    background: "#C7CFDD",
                  }}
                />
                <span
                  style={{
                    color: "#C7CFDD",
                    fontSize: "20px",
                  }}
                >
                  {category.subtitle}
                </span>
              </div>
            </div>

            {/* 新闻列表 */}
            <div
              style={{
                padding: "20px 24px",
              }}
            >
              {category.news.map((item, newsIndex) => (
                <a
                  key={newsIndex}
                  href="#"
                  style={{
                    display: "flex",
                    marginBottom: "16px",
                    color: "#282F3F",
                    fontSize: "14px",
                    lineHeight: "22px",
                    textDecoration: "none",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      marginRight: "12px",
                      color: "#8894AC",
                    }}
                  >
                    {item.date}
                  </span>
                  <span
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}