"use client";

import { useState } from "react";

/**
 * [INPUT]: 无外部依赖
 * [OUTPUT]: 对外提供 EnsureSection 组件
 * [POS]: 首页服务保障展示区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const services = [
  {
    icon: "https://qiniugw.sdwanyue.com/20251119/05/%E6%BA%90%E7%A0%81icon.png",
    title: "源码出售",
    label: "源码无加密，可二次开发",
    desc: "出售在线教育、知识付费、直播带货、多商户商城、医院陪诊、外卖跑腿等源码，源码全开源",
  },
  {
    icon: "https://qiniugw.sdwanyue.com/20251119/05/%E6%90%AD%E5%BB%BAicon.png",
    title: "搭建部署",
    label: "分布式部署 高并发不用愁",
    desc: "支持快速搭建，分布式部署，提供高并发解决方案、内网搭建部署服务，满足不同机构的使用场景",
  },
  {
    icon: "https://qiniugw.sdwanyue.com/20251119/05/%E5%AE%9A%E5%88%B6icon.png",
    title: "定制开发",
    label: "个性化定制 打造独家特色",
    desc: "提供医院陪诊、在线教育、直播商城、外卖跑腿等多种系统定制服务，满足不同行业的个性化需求",
  },
  {
    icon: "https://qiniugw.sdwanyue.com/20251119/05/%E6%BA%90%E7%A0%81icon.png",
    title: "源码出售",
    label: "源码无加密，可二次开发",
    desc: "出售在线教育、知识付费、直播带货、多商户商城、医院陪诊、外卖跑腿等源码，源码全开源",
  },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{
        margin: "0 11.5px",
        width: "275px",
        height: "300px",
        borderRadius: "2px",
        background: isHovered
          ? "linear-gradient(180deg, #EBF4FF 0%, #FFF 100%)"
          : "#FFF",
        borderTop: isHovered ? "3px solid #0F5FFF" : "3px solid transparent",
        boxShadow: isHovered
          ? "0 8px 24px 2px rgba(1, 31, 91, 0.10)"
          : "none",
        transition: "all 0.8s",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 图标 */}
      <div style={{ marginBottom: "10px", width: "68px", height: "68px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={service.icon}
          alt={service.title}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* 标题 */}
      <div
        style={{
          color: "#181818",
          fontSize: "22px",
          fontWeight: 700,
        }}
      >
        {service.title}
      </div>

      {/* 标签 - hover 时显示 */}
      <div
        style={{
          margin: isHovered ? "12px 0 8px" : "0",
          fontSize: isHovered ? "14px" : "0",
          opacity: isHovered ? 1 : 0,
          color: "#0F5FFF",
          fontWeight: 500,
          transition: "all 0.5s",
        }}
      >
        {service.label}
      </div>

      {/* 描述 */}
      <div
        style={{
          marginTop: isHovered ? "0" : "18px",
          width: "219px",
          height: "89px",
          color: "#737C8F",
          textAlign: "center",
          fontSize: "16px",
          transition: "margin-top 0.5s",
        }}
      >
        {service.desc}
      </div>
    </div>
  );
}

export function EnsureSection() {
  return (
    <section
      style={{
        paddingTop: "80px",
        height: "612px",
        backgroundImage: "url('https://qiniugw.sdwanyue.com/20251119/05/Mask%20group.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "60px",
        }}
      >
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
}