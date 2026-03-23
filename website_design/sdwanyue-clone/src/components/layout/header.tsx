"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

/**
 * [INPUT]: 依赖 React hooks、shadcn/ui Button
 * [OUTPUT]: 对外提供 Header 组件
 * [POS]: 布局组件，网站顶部导航
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const navData = [
  {
    title: "首页",
    href: "/",
  },
  {
    title: "在线教育系统",
    href: "/education",
    hasDropdown: true,
    items: [
      { title: "教育培训Web端", href: "/jiaoyupeixun", hot: true, desc: "无需下载客户端，使用方便" },
      { title: "教育培训移动端", href: "/education", desc: "随时随地上课，享受最佳学习体验" },
      { title: "网校系统", href: "/netschool", desc: "专为教培机构打造，支持多终端" },
      { title: "知识付费系统", href: "/newknowledge", hot: true, desc: "为企业搭建专属知识付费平台" },
      { title: "企业内训系统", href: "/neixun", desc: "满足企业多样化的员工培训需求" },
      { title: "智慧党建系统", href: "/newparty", desc: "全方位打造智慧新时代" },
    ],
  },
  {
    title: "互联网医院系统",
    href: "/hospital",
    hasDropdown: true,
    items: [
      { title: "互联网医院系统", href: "/hospital", hot: true, desc: "专注互联网+医疗系统开发" },
      { title: "在线问诊系统", href: "/wenzhen", desc: "专注于医疗健康系统开发" },
      { title: "医疗陪诊系统", href: "/yiliao", hot: true, desc: "智能医疗陪护，安心就医买药" },
      { title: "数字药店系统", href: "/D-drugstore", desc: "为药店量身打造，提升竞争力" },
    ],
  },
  {
    title: "同城O2O系统",
    href: "/x_waimai",
    hasDropdown: true,
    items: [
      { title: "同城外卖系统", href: "/x_waimai", hot: true, desc: "服务模式多，不只是外卖" },
      { title: "同城跑腿系统", href: "/paotui", desc: "更多选择，解决同城配送需求" },
      { title: "同城O2O系统", href: "/O2O", desc: "本地生活服务一体化解决方案" },
      { title: "在线预约系统", href: "/yuyue", desc: "预约到家服务，省事更省心" },
    ],
  },
  {
    title: "电商直播/供应链",
    href: "/newdaihuo",
    hasDropdown: true,
    items: [
      { title: "直播带货系统", href: "/newdaihuo", hot: true, desc: "支持直播+短视频带货" },
      { title: "多商户商城系统", href: "/new_shop", desc: "支持自营+多商户入驻，营销功能丰富" },
      { title: "采购系统", href: "/caigou", desc: "一站式采购的多元化商城系统" },
    ],
  },
  {
    title: "代驾系统",
    href: "/daijia",
  },
  {
    title: "数字人",
    href: "/shuziren",
  },
  {
    title: "美颜SDK",
    href: "/facegl",
  },
  {
    title: "更多产品",
    href: "/zizhi",
    hasDropdown: true,
    items: [
      { title: "资质代办服务", href: "/zizhi", desc: "专业办理团队，短时间拿证" },
      { title: "人才招聘系统", href: "#", desc: "全职/兼职招聘，多端互通" },
      { title: "系统定制开发", href: "/dingzhi", desc: "为不同需求的客户，量身打造" },
      { title: "字节跳动定制开发", href: "/zj", desc: "一份代码，多端应用平台同步" },
      { title: "抖音小程序开发", href: "/dy", desc: "抖音生态，搭建自有品牌" },
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#1a5fb4] to-[#2563eb] text-white shadow-lg">
      {/* 顶部装饰线 */}
      <div className="h-[1px] w-full bg-white/20" />

      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-tight">万岳科技</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navData.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-md transition-colors",
                    item.hasDropdown && "pr-2"
                  )}
                >
                  {item.title}
                  {item.hasDropdown && (
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform",
                      activeDropdown === item.title && "rotate-180"
                    )} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && item.items && (
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-0 w-[600px] bg-white rounded-b-lg shadow-xl overflow-hidden transition-all duration-200",
                      activeDropdown === item.title
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    )}
                  >
                    <div className="grid grid-cols-2 gap-0">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="flex items-start gap-3 p-4 hover:bg-gray-50 border-b border-r border-gray-100 group"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-gray-900 group-hover:text-[#01CF89]">
                                {subItem.title}
                              </span>
                              {subItem.hot && (
                                <span className="px-1.5 py-0.5 text-[10px] font-medium bg-red-500 text-white rounded">
                                  HOT
                                </span>
                              )}
                            </div>
                            {subItem.desc && (
                              <p className="mt-1 text-xs text-gray-500">{subItem.desc}</p>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                    {/* 底部链接 */}
                    <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-t border-gray-100">
                      <div className="flex gap-4">
                        <Link href="/lists/2" className="text-xs text-gray-600 hover:text-[#01CF89]">了解产品动态</Link>
                        <Link href="/lists/3" className="text-xs text-gray-600 hover:text-[#01CF89]">常见问题</Link>
                        <Link href="/free" className="text-xs text-gray-600 hover:text-[#01CF89]">产品体验</Link>
                      </div>
                      <Button size="sm" className="bg-[#01CF89] hover:bg-[#01b87a] text-white">
                        联系客服
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden items-center space-x-4 lg:flex">
            <Link
              href="/about"
              className="text-sm font-medium text-white/90 hover:text-white"
            >
              联系我们
            </Link>
            <span className="text-white/30">|</span>
            <Link
              href="/en"
              className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              English
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#1e5bb8] lg:hidden">
          <nav className="container mx-auto space-y-1 px-4 py-4">
            {navData.map((item) => (
              <div key={item.title}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-4 py-2 text-white hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
                {item.hasDropdown && item.items && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.items.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        className="block rounded-lg px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.title}
                        {child.hot && (
                          <span className="ml-2 rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-medium text-white">
                            HOT
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}