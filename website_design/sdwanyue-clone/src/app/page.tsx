import { HeroBanner } from "@/components/sections/hero-banner";
import { StatsSection } from "@/components/sections/stats-section";
import { SystemsSection } from "@/components/sections/systems-section";
import { SchemeSection } from "@/components/sections/scheme-section";
import { EnsureSection } from "@/components/sections/ensure-section";
import { MoreServiceSection } from "@/components/sections/more-service-section";
import { AISection } from "@/components/sections/ai-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { NewsSection } from "@/components/sections/news-section";
import { CTASection } from "@/components/sections/cta-section";

/**
 * [INPUT]: 依赖各个 section 组件
 * [OUTPUT]: 首页
 * [POS]: 网站主页
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

export default function Home() {
  return (
    <>
      {/* 轮播 Banner */}
      <HeroBanner />

      {/* 数据统计 */}
      <StatsSection />

      {/* 系统产品展示 */}
      <SystemsSection />

      {/* 解决方案 */}
      <SchemeSection />

      {/* 服务保障 */}
      <EnsureSection />

      {/* 更多服务 */}
      <MoreServiceSection />

      {/* AI 数字人 */}
      <AISection />

      {/* 资质认证 */}
      <CertificationsSection />

      {/* 最新动态 */}
      <NewsSection />

      {/* CTA */}
      <CTASection />
    </>
  );
}