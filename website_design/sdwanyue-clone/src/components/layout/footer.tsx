import Link from "next/link";
import { Separator } from "@/components/ui/separator";

/**
 * [INPUT]: 依赖 Next.js Link、shadcn/ui Separator
 * [OUTPUT]: 对外提供 Footer 组件
 * [POS]: 布局组件，网站底部
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const footerLinks = {
  products: [
    { title: "在线教育系统", href: "/newedu" },
    { title: "知识付费系统", href: "/knowledge" },
    { title: "电商直播系统", href: "/daihuo" },
    { title: "多商户商城", href: "/shop" },
    { title: "同城O2O", href: "/O2O" },
    { title: "同城跑腿", href: "/paotui" },
    { title: "智慧党建系统", href: "/party" },
    { title: "医疗陪诊系统", href: "/yiliao" },
  ],
  scenarios: [
    { title: "自营线上教育品牌", href: "#" },
    { title: "校园网课系统", href: "#" },
    { title: "培训机构网络拓客", href: "#" },
    { title: "企业内训员工赋能", href: "#" },
    { title: "政企会议直播", href: "#" },
    { title: "微信端直播带货", href: "#" },
    { title: "H5端直播", href: "#" },
  ],
  services: [
    { title: "产品体验", href: "/free" },
    { title: "产品活动", href: "/news" },
    { title: "云服务", href: "/news/48" },
    { title: "三方接入", href: "/news/49" },
    { title: "大客户方案", href: "#" },
    { title: "部署方案", href: "/news/37" },
  ],
  about: [
    { title: "了解万岳科技", href: "/about" },
    { title: "客服团队", href: "/about" },
    { title: "合作伙伴", href: "#" },
  ],
};

const serviceFeatures = [
  { title: "7x12小时售后支持", icon: "clock" },
  { title: "一对一售后服务", icon: "user" },
  { title: "加密部署方案", icon: "lock" },
  { title: "云端数据存储安全无忧", icon: "cloud" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Service Features */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {serviceFeatures.map((feature) => (
              <div key={feature.title} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#01CF89]/20">
                  <svg
                    className="h-5 w-5 text-[#01CF89]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {feature.icon === "clock" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    )}
                    {feature.icon === "user" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    )}
                    {feature.icon === "lock" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    )}
                    {feature.icon === "cloud" && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      />
                    )}
                  </svg>
                </div>
                <span className="text-sm">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Links */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Products */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">产品</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-[#01CF89]"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Scenarios */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">应用场景</h3>
            <ul className="space-y-2">
              {footerLinks.scenarios.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-[#01CF89]"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">便捷服务</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-[#01CF89]"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">关于我们</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-[#01CF89]"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">联系我们</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>咨询热线：17560858943</p>
              <p>公司：山东万岳网络科技有限公司</p>
            </div>
            <div className="mt-4 flex gap-3">
              <Link
                href="/free"
                className="flex items-center gap-2 rounded-lg bg-gray-800 px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-700"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                产品体验
              </Link>
              <div className="flex items-center gap-2 rounded-lg bg-gray-800 px-3 py-2 text-sm text-gray-300">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                  />
                </svg>
                微信公众号
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-500">
            公司地址：山东省济南市长清区崮云湖街道创新谷
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>©2026 山东万岳网络科技有限公司.All rights reserved.</span>
            <Link
              href="https://beian.miit.gov.cn/"
              target="_blank"
              className="hover:text-gray-300"
            >
              鲁ICP备XXXXXXXX号
            </Link>
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-gray-500">
          万岳科技，提供
          <Link href="/" className="text-[#01CF89] hover:text-[#01b87a]">
            在线教育系统
          </Link>
          、
          <Link href="/" className="text-[#01CF89] hover:text-[#01b87a]">
            直播带货系统
          </Link>
          、
          <Link href="/" className="text-[#01CF89] hover:text-[#01b87a]">
            小程序商城源码
          </Link>
          开发与搭建服务
        </p>
      </div>
    </footer>
  );
}