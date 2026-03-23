"use client";

/**
 * [INPUT]: 无外部依赖
 * [OUTPUT]: 对外提供 EducationScenarios 组件
 * [POS]: 教育系统页面场景应用区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const scenarios = [
  { name: "K12教育", subtitle: "k12教育 | 教育培训", img: "https://www.sdwanyue.com/static/images/education/scene_1_1.png" },
  { name: "职业培训", subtitle: "职业培训｜企业培训", img: "https://www.sdwanyue.com/static/images/education/scene_2_1.png" },
  { name: "语言培训", subtitle: "语言培训 | 教育培训", img: "https://www.sdwanyue.com/static/images/education/scene_3_1.png" },
  { name: "艺术教育", subtitle: "艺术教育｜教育培训", img: "https://www.sdwanyue.com/static/images/education/scene_1_2.png" },
  { name: "素质教育", subtitle: "素质教育｜高等教育", img: "https://www.sdwanyue.com/static/images/education/scene_2_2.png" },
  { name: "政府培训", subtitle: "政府培训｜教育培训", img: "https://www.sdwanyue.com/static/images/education/scene_3_2.png" },
  { name: "企业内训", subtitle: "企业内训 | 企业培训", img: "https://www.sdwanyue.com/static/images/education/scene_1_3.png" },
  { name: "高校慕课", subtitle: "高校慕课 | 教育培训", img: "https://www.sdwanyue.com/static/images/education/scene_2_3.png" },
  { name: "金融会计", subtitle: "金融会计｜教育培训", img: "https://www.sdwanyue.com/static/images/education/scene_3_3.png" },
  { name: "学历提升", subtitle: "学历提升｜高等教育", img: "https://www.sdwanyue.com/static/images/education/scene_1_4.png" },
  { name: "留学考证", subtitle: "留学考证｜高等教育", img: "https://www.sdwanyue.com/static/images/education/scene_2_4.png" },
];

export function EducationScenarios() {
  return (
    <div style={{ padding: "105px 0", background: "rgb(7, 14, 56)" }}>
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#FFF", letterSpacing: "0.9px" }}>
          满足多行业场景应用需求
        </h2>
        <p style={{ fontSize: "16px", color: "#FFF", lineHeight: "63px", letterSpacing: "0.4px" }}>
          系统应用范围广，适用于多种行业应用场景
        </p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {scenarios.map((item, i) => (
          <div key={i} style={{ width: "280px", height: "121px", margin: "0 0 10px 15px", borderRadius: "10px", overflow: "hidden", position: "relative" }}>
            <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        ))}
      </div>
    </div>
  );
}