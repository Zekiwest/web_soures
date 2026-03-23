"use client";

/**
 * [INPUT]: 无外部依赖
 * [OUTPUT]: 对外提供 EducationMarketing 组件
 * [POS]: 教育系统页面营销推广区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const marketingFeatures = [
  { title: "优惠券", description: "包含满减、折扣、立减三种形式，可刺激用户购买，提升付费转化率" },
  { title: "拼团活动", description: "通过多人组团购课，老生带新生环节，既能促进商品售卖，又能增加新用户" },
  { title: "裂变海报", description: "用户可生成专属海报并分享，好友通过海报购买课程后，分享人将获得佣金" },
  { title: "限时秒杀", description: "以低价课程吸引学员，营造促销活动氛围，加速学员购买决定" },
  { title: "会员系统", description: "通过打造会员体系，提升核心用户粘性，提高用户活跃度" },
  { title: "积分抵现", description: "学员通过购买课程获得积分，积分可用于抵现，从而拉动学员消费" },
  { title: "弹窗广告", description: "可增强推荐内容、营销策略的曝光，对平台用户访问起到引导作用" },
  { title: "推广分销", description: "用户以推广员身份分销课程，其他用户购买课程后，推广员可获得积分奖励" },
];

export function EducationMarketing() {
  return (
    <div style={{ padding: "70px 0", background: "#FAFAFA" }}>
      <div style={{ textAlign: "center", marginBottom: "70px" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#323232", letterSpacing: "0.9px" }}>
          多终端营销裂变推广变现
        </h2>
        <p style={{ fontSize: "16px", color: "#323232", lineHeight: "63px", letterSpacing: "0.4px" }}>
          营销功能加持，满足用户需求，宣传讲师品牌，打造平台影响力
        </p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {marketingFeatures.map((item, i) => (
          <div key={i} style={{ margin: "0 5px 20px 5px", width: "285px" }}>
            <div style={{ width: "285px", height: "235px", borderRadius: "8px", background: "#e8e8e8" }} />
            <div style={{ margin: "-40px auto 0", width: "260px", height: "109px", borderRadius: "5px", background: "#FFF", textAlign: "center", boxShadow: "1.2px 1.6px 8px 0px rgba(0,0,0,0.08)" }}>
              <div style={{ fontSize: "16px", lineHeight: "63px", letterSpacing: "0.4px", fontWeight: "bold" }}>
                {item.title}
              </div>
              <div style={{ fontSize: "12px", lineHeight: "18px", letterSpacing: "0.3px", color: "#666", padding: "0 10px" }}>
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}