"use client";

import { useState } from "react";

/**
 * [INPUT]: 无外部依赖
 * [OUTPUT]: 对外提供 EducationFeatures 组件
 * [POS]: 教育系统页面功能展示区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const tabs: { id: string; name: string; icon: string }[] = [
  { id: "class", name: "在线课堂", icon: "📚" },
  { id: "interact", name: "互动教学", icon: "💬" },
  { id: "large", name: "大班公开课", icon: "🎓" },
  { id: "exam", name: "考试练习", icon: "📝" },
  { id: "special", name: "特色功能", icon: "⭐" },
];

const tabContent: Record<string, { left: { title: string; desc: string }[]; right: { title: string; desc: string }[]; phoneImg: string }> = {
  class: {
    left: [
      { title: "图文点播", desc: "支持图片+文字的课程内容，适用于讲义和知识点内容" },
      { title: "视频点播", desc: "后台可上传录制的视频文件，前端需购买才可开通观看" },
      { title: "进度统计", desc: "课程目录内自动标记上次学到/已经学完的课时内容" },
    ],
    right: [
      { title: "课时目录", desc: "支持多课时组成的系列课程，用户可按照课时进行学习" },
      { title: "音频点播", desc: "支持上传音频文件，可设置免费/收费才能播放学习" },
      { title: "课程套餐", desc: "多种系列课程和直播课，可以组合成套餐课程进行销售" },
    ],
    phoneImg: "https://www.sdwanyue.com/static/images/education/phone_1.png",
  },
  interact: {
    left: [
      { title: "实时互动", desc: "支持实时音视频互动，让教学更加生动" },
      { title: "白板功能", desc: "在线白板书写，实时同步给学生" },
      { title: "举手发言", desc: "学生可举手申请发言，老师同意后可互动" },
    ],
    right: [
      { title: "屏幕共享", desc: "老师可共享屏幕进行演示教学" },
      { title: "连麦互动", desc: "支持学生与老师连麦互动" },
      { title: "聊天室", desc: "实时文字聊天，增强互动体验" },
    ],
    phoneImg: "https://www.sdwanyue.com/static/images/education/phone_2.png",
  },
};

export function EducationFeatures() {
  const [activeTab, setActiveTab] = useState<string>("class");
  const content = tabContent[activeTab] ?? tabContent.class;

  return (
    <div style={{ padding: "80px 0", background: "#FFF" }}>
      {/* 标题 */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#323232", letterSpacing: "0.9px" }}>
          万岳在线教育系统功能展示
        </h2>
        <p style={{ fontSize: "16px", color: "#323232", lineHeight: "63px", letterSpacing: "0.4px" }}>
          丰富的直播课堂系统运营级功能，助力教培机构快速布局线上教育市场
        </p>
      </div>

      {/* Tab 导航 */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              width: "145px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: activeTab === tab.id ? "3px solid #2C72D5" : "3px solid #EDEDED",
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: "17px", lineHeight: "63px", letterSpacing: "0.43px" }}>
              {tab.name}
            </span>
          </div>
        ))}
      </div>

      {/* 内容区域 */}
      <div style={{ paddingTop: "54px", display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
        {/* 左侧功能项 */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", marginRight: "48px" }}>
          {content.left.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <div style={{ marginRight: "17px" }}>
                <img
                  src={`https://www.sdwanyue.com/static/images/education/icon_func_${i + 1}.png`}
                  alt=""
                  style={{ width: "72px", height: "72px" }}
                />
              </div>
              <div>
                <div style={{ fontSize: "19px", letterSpacing: "0.55px", fontWeight: "bold" }}>
                  {item.title}
                </div>
                <div style={{ fontSize: "15px", letterSpacing: "0.4px", paddingTop: "5px", color: "#666" }}>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 中间手机模型 */}
        <div style={{ position: "relative", width: "310px", height: "618px" }}>
          <img
            src="https://www.sdwanyue.com/static/images/education/phone_frame.png"
            alt="手机框架"
            style={{ position: "absolute", top: 0, left: 0, zIndex: 2, width: "100%" }}
          />
          <img
            src={content.phoneImg}
            alt="功能展示"
            style={{ position: "absolute", top: "18px", left: "20px", zIndex: 1, width: "270px" }}
          />
        </div>

        {/* 右侧功能项 */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", marginLeft: "48px" }}>
          {content.right.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", flexDirection: "row-reverse", flex: 1 }}>
              <div style={{ marginLeft: "17px" }}>
                <img
                  src={`https://www.sdwanyue.com/static/images/education/icon_func_${i + 4}.png`}
                  alt=""
                  style={{ width: "72px", height: "72px" }}
                />
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "19px", letterSpacing: "0.55px", fontWeight: "bold" }}>
                  {item.title}
                </div>
                <div style={{ fontSize: "15px", letterSpacing: "0.4px", paddingTop: "5px", color: "#666" }}>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}