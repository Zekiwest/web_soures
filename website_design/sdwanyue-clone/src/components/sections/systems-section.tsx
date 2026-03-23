"use client";

import { useState } from "react";

/**
 * [INPUT]: 无外部依赖
 * [OUTPUT]: 对外提供 SystemsSection 组件
 * [POS]: 首页系统产品展示区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const allSystems = [
  // 左列
  { col: "left", title: "互联网医院系统", desc: "线上就诊一站式医疗服务平台", tags: ["在线问诊", "处方购药", "家庭医生"], text: "支持线上问诊、门诊预约、处方购药\n实现药品快递到家与医保支付\n提供家庭医生签约与健康管理服务", icon: "https://qiniugw.sdwanyue.com/20251119/system/01/Frame3.png", bgSmall: "https://qiniugw.sdwanyue.com/20251119/system/01/互联网医院系统小图.png", bgMedium: "https://qiniugw.sdwanyue.com/20251119/system/01/互联网医院系统中图.png", bgLarge: "https://qiniugw.sdwanyue.com/20251126/互联网医院系统大图.png" },
  { col: "left", title: "知识付费系统", desc: "打造沉浸式学习与变现平台", tags: ["在线课程", "内容付费", "用户裂变"], text: "支持直播、音视频、图文等多种付费形式\n打造内容变现与知识传播双通道\n实现课程分销与用户快速增长", icon: "https://qiniugw.sdwanyue.com/20251119/system/02/Frame.png", bgSmall: "https://qiniugw.sdwanyue.com/20251119/system/02/知识付费系统小图.png", bgMedium: "https://qiniugw.sdwanyue.com/20251119/system/02/知识付费系统中图.png", bgLarge: "https://qiniugw.sdwanyue.com/20251126/知识付费系统大图.png" },
  { col: "left", title: "智慧党建系统", desc: "让党建管理更高效、更智能", tags: ["党员管理", "学习互动", "数据党建"], text: "集党员信息管理与党建宣传于一体\n内置学习手册、答题问卷、积分兑换\n支持高并发访问与数据统计分析", icon: "https://qiniugw.sdwanyue.com/20251119/system/03/Group%20299.png", bgSmall: "https://qiniugw.sdwanyue.com/20251119/system/03/智慧党建系统小图.png", bgMedium: "https://qiniugw.sdwanyue.com/20251119/system/03/智慧党建系统中图.png", bgLarge: "https://qiniugw.sdwanyue.com/20251126/智慧党建系统大图.png" },
  { col: "left", title: "数字药店系统", desc: "打造智能化药品零售新模式", tags: ["互联网药房", "健康管理", "智能购药"], text: "在线选药、下单与支付全流程打通\n提供药品推荐与健康档案管理\n支持药店多终端接入与数据同步", icon: "https://qiniugw.sdwanyue.com/20251119/system/04/Frame.png", bgSmall: "https://qiniugw.sdwanyue.com/20251119/system/04/数字药店系统小图.png", bgMedium: "https://qiniugw.sdwanyue.com/20251119/system/04/数字药店系统中图.png", bgLarge: "https://qiniugw.sdwanyue.com/20251126/数字药店系统大图.png" },
  { col: "left", title: "多商户商城系统", desc: "灵活自营与入驻并行的移动商城", tags: ["多商户入驻", "社交营销", "移动电商"], text: "支持自营与多商户共存的运营模式\n内置拼团、优惠券、会员营销等玩法\n降低获客成本，提高转化效率", icon: "https://qiniugw.sdwanyue.com/20251119/system/05/Frame.png", bgSmall: "https://qiniugw.sdwanyue.com/20251119/system/05/多商户商城系统小图.png", bgMedium: "https://qiniugw.sdwanyue.com/20251119/system/05/多商户商城系统中图.png", bgLarge: "https://qiniugw.sdwanyue.com/20251126/多商户商城系统大图.png" },
  // 中列
  { col: "center", title: "在线教育系统", desc: "构建高效互动的在线教学平台", tags: ["直播课堂", "课程管理", "多场景教学"], text: "支持公开课、大班课、小班课多种模式\n集成互动白板与直播教学功能\n满足职业培训与私域教学需求", icon: "https://qiniugw.sdwanyue.com/20251119/system/06/Frame.png", bgSmall: "https://qiniugw.sdwanyue.com/20251119/system/06/在线教育系统小图.png", bgMedium: "https://qiniugw.sdwanyue.com/20251119/system/06/在线教育系统中图.png", bgLarge: "https://qiniugw.sdwanyue.com/20251126/在线教育系统大图.png" },
  { col: "center", title: "答题考试系统", desc: "高效线上测评与活动竞赛平台", tags: ["在线考试", "知识竞赛", "智能阅卷"], text: "支持单选、多选、判断等多题型考试\n可用于培训测评、党建答题、单位考试等多场景\n自动阅卷统计，实时查看成绩与排行榜", icon: "https://qiniugw.sdwanyue.com/20251119/system/07/Frame.png", bgSmall: "https://qiniugw.sdwanyue.com/20251119/system/07/答题考试系统小图.png", bgMedium: "https://qiniugw.sdwanyue.com/20251119/system/07/答题考试系统中图.png", bgLarge: "https://qiniugw.sdwanyue.com/20251126/答题考试系统大图.png" },
  { col: "center", title: "直播商城系统", desc: "融合直播与电商的多场景平台", tags: ["带货直播", "社交电商", "多商户入驻"], text: "支持直播购物、打赏、分享等互动功能\n商户入驻与多渠道分销管理\n兼容短视频带货与社区团购场景", icon: "https://qiniugw.sdwanyue.com/20251119/system/08/Frame.png", bgSmall: "https://qiniugw.sdwanyue.com/20251119/system/08/直播商城系统小图.png", bgMedium: "https://qiniugw.sdwanyue.com/20251119/system/08/直播商城系统中图.png", bgLarge: "https://qiniugw.sdwanyue.com/20251126/直播商城系统大图.png" },
  { col: "center", title: "企业内训系统", desc: "满足企业员工培训与考核需求", tags: ["在线培训", "直播课堂", "员工管理"], text: "提供企业内部课程直播与录播\n内置题库、考试与学习进度追踪\n支持多角色权限与组织架构管理", icon: "https://qiniugw.sdwanyue.com/20251119/system/09/Frame.png", bgSmall: "https://qiniugw.sdwanyue.com/20251119/system/09/企业内训系统小图.png", bgMedium: "https://qiniugw.sdwanyue.com/20251119/system/09/企业内训系统中图.png", bgLarge: "https://qiniugw.sdwanyue.com/20251126/企业内训系统大图.png" },
  { col: "center", title: "代驾系统", desc: "智能化本地代驾业务运营平台", tags: ["司机端管理", "智能派单", "本地服务"], text: "支持乘客端下单、司机端接单双端协同\n根据距离与服务类型智能分配代驾订单\n实现代驾、酒后代驾、长途代驾等多业务模式", icon: "https://qiniugw.sdwanyue.com/20251119/system/10/Frame.png", bgSmall: "https://qiniugw.sdwanyue.com/20251119/system/10/代驾系统小图.png", bgMedium: "https://qiniugw.sdwanyue.com/20251119/system/10/代驾系统中图.png", bgLarge: "https://qiniugw.sdwanyue.com/20251126/代驾系统大图.png" },
  // 右列
  { col: "right", title: "同城外卖系统", desc: "全流程外卖配送管理平台", tags: ["多端协同", "智能调度", "本地生活"], text: "用户端、商户端、骑手端多端互通\n智能调度中心实现高效派单\n支持外卖、跑腿、上门预约等业务", icon: "https://qiniugw.sdwanyue.com/20251119/system/11/mx_n_1762917968873.png", bgSmall: "https://qiniugw.sdwanyue.com/20251119/system/11/同城外卖系统小图.png", bgMedium: "https://qiniugw.sdwanyue.com/20251119/system/11/同城外卖系统中图.png", bgLarge: "https://qiniugw.sdwanyue.com/20251126/同城外卖系统大图.png" },
  { col: "right", title: "在线预约系统", desc: "便捷的线上预约与到店服务平台", tags: ["预约管理", "排队叫号", "服务日程"], text: "支持到店/上门多类型预约方式\n提供日程管理、预约提醒、服务统计等能力\n适用于机构预约、体验预约、服务预约等多场景", icon: "https://qiniugw.sdwanyue.com/20251119/system/12/Frame.png", bgSmall: "https://qiniugw.sdwanyue.com/20251119/system/12/在线预约系统小图.png", bgMedium: "https://qiniugw.sdwanyue.com/20251119/system/12/在线预约系统中图.png", bgLarge: "https://qiniugw.sdwanyue.com/20251126/在线预约系统大图.png" },
  { col: "right", title: "在线问诊系统", desc: "便捷高效的互联网医疗服务方案", tags: ["图文问诊", "药师咨询", "在线购药"], text: "患者可图文或语音咨询医生\n支持药师在线指导与购药推荐\n提升问诊效率，降低就诊成本", icon: "https://qiniugw.sdwanyue.com/20251119/system/13/Frame.png", bgSmall: "https://qiniugw.sdwanyue.com/20251119/system/13/在线问诊系统小图.png", bgMedium: "https://qiniugw.sdwanyue.com/20251119/system/13/在线问诊系统中图.png", bgLarge: "https://qiniugw.sdwanyue.com/20251126/在线问诊系统大图.png" },
  { col: "right", title: "同城跑腿系统", desc: "多功能同城即时配送平台", tags: ["即时配送", "智能调度", "多模式接单"], text: "支持帮买、帮送、代取、排队等服务\n实时定位与订单追踪功能\n提供接单、转单、结算一体化管理", icon: "https://qiniugw.sdwanyue.com/20251119/system/14/Frame.png", bgSmall: "https://qiniugw.sdwanyue.com/20251119/system/14/同城跑腿系统小图.png", bgMedium: "https://qiniugw.sdwanyue.com/20251119/system/14/同城跑腿系统中图.png", bgLarge: "https://qiniugw.sdwanyue.com/20251126/同城跑腿系统大图.png" },
  { col: "right", title: "医院陪诊系统", desc: "提供全流程就医陪同与代办服务", tags: ["陪诊服务", "代办问诊", "在线预约"], text: "支持诊前预约与就医陪同功能\n提供代挂号、代取药等一站式服务\n提升患者就医效率与体验感", icon: "https://qiniugw.sdwanyue.com/20251119/system/15/Frame.png", bgSmall: "https://qiniugw.sdwanyue.com/20251119/system/15/医院陪诊系统小图.png", bgMedium: "https://qiniugw.sdwanyue.com/20251119/system/15/医院陪诊系统中图.png", bgLarge: "https://qiniugw.sdwanyue.com/20251126/医院陪诊系统大图.png" },
];

function SystemCard({ system }: { system: typeof allSystems[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative mb-4 rounded-md overflow-hidden cursor-pointer shadow-lg"
      style={{
        width: "388px",
        height: isHovered ? "320px" : "152px",
        backgroundImage: `url('${isHovered ? system.bgLarge : system.bgSmall}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 内容层 - 无渐变遮罩，直接显示深色文字 */}
      <div
        className="relative z-10 h-full flex"
        style={{
          padding: "0 20px",
        }}
      >
        {/* 左侧图标容器 */}
        <div
          className="flex-shrink-0"
          style={{
            marginTop: "32px",
            marginRight: "6px",
            width: "26px",
            height: "100%",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={system.icon} alt={system.title} className="w-[26px] h-[26px] object-contain" />
        </div>

        {/* 右侧内容容器 */}
        <div className="flex-1 flex flex-col">
          {/* 标题 - 默认状态 */}
          <h3
            className="font-bold"
            style={{
              marginTop: "30px",
              color: isHovered ? "#0F5FFF" : "#282F3F",
              fontSize: "20px",
              transition: "color 0.3s",
            }}
          >
            {system.title}
          </h3>

          {/* 描述 */}
          <p
            className="mt-1"
            style={{
              color: "#858FA3",
              fontSize: "14px",
            }}
          >
            {system.desc}
          </p>

          {/* 标签 */}
          <div className="flex gap-2 mt-3">
            {system.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded"
                style={{
                  background: "#F0F4FF",
                  color: "#8894AC",
                  fontSize: "12px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 展开内容 - hover时显示 */}
          {isHovered && (
            <div className="mt-4 animate-fadeIn">
              <p
                className="whitespace-pre-line"
                style={{
                  color: "#3E485B",
                  fontSize: "14px",
                  lineHeight: "26px",
                }}
              >
                {system.text}
              </p>
              <div className="flex mt-4">
                {/* 查看详情 - 蓝色渐变实心按钮 */}
                <a
                  href="#"
                  className="flex justify-center items-center"
                  style={{
                    width: "130px",
                    height: "42px",
                    borderRadius: "4px",
                    background: "linear-gradient(90deg, #0F5FFF 0%, #74A2FF 100%)",
                    color: "#FFF",
                    fontSize: "16px",
                    fontWeight: 500,
                    border: "1px solid transparent",
                  }}
                >
                  查看详情
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: "8px" }}
                  >
                    <path d="M3.5 2L7 5L3.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                {/* 免费试用 - 线框按钮 */}
                <a
                  href="#"
                  className="flex justify-center items-center"
                  style={{
                    width: "130px",
                    height: "42px",
                    borderRadius: "4px",
                    color: "#0F5FFF",
                    fontSize: "16px",
                    fontWeight: 500,
                    border: "1px solid #0F5FFF",
                    background: "rgba(255, 255, 255, 0.08)",
                    WebkitBackdropFilter: "blur(4px)",
                    backdropFilter: "blur(4px)",
                    marginLeft: "18px",
                  }}
                >
                  免费试用
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: "8px" }}
                  >
                    <path d="M3.5 2L7 5L3.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function SystemsSection() {
  const leftSystems = allSystems.filter((s) => s.col === "left");
  const centerSystems = allSystems.filter((s) => s.col === "center");
  const rightSystems = allSystems.filter((s) => s.col === "right");

  return (
    <section
      className="py-16"
      style={{
        backgroundImage: "url('https://qiniugw.sdwanyue.com/20251119/02/Mask%20group.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            系统多样 提供更多产品选择
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            万岳科技是一家专业的国家高新技术开发公司，致力于为用户和企业，开发稳定、高效的系统平台
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="flex justify-center gap-4">
          {/* Left Column */}
          <div>
            {leftSystems.map((system) => (
              <SystemCard key={system.title} system={system} />
            ))}
          </div>

          {/* Center Column */}
          <div>
            {centerSystems.map((system) => (
              <SystemCard key={system.title} system={system} />
            ))}
          </div>

          {/* Right Column */}
          <div>
            {rightSystems.map((system) => (
              <SystemCard key={system.title} system={system} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}