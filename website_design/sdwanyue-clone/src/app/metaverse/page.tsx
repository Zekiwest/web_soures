import { MetaverseHero } from "@/components/metaverse/metaverse-hero";
import { MetaverseAbout } from "@/components/metaverse/metaverse-about";
import { MetaverseFeatures } from "@/components/metaverse/metaverse-features";
import { MetaverseWhy } from "@/components/metaverse/metaverse-why";
import { MetaverseAdvantages } from "@/components/metaverse/metaverse-advantages";
import { MetaverseCases } from "@/components/metaverse/metaverse-cases";
import { MetaverseUGCCases } from "@/components/metaverse/metaverse-ugc-cases";
import { MetaverseRecruit } from "@/components/metaverse/metaverse-recruit";
import { MetaverseAboutDetails } from "@/components/metaverse/metaverse-about-details";
import { MetaverseContact } from "@/components/metaverse/metaverse-contact";

/**
 * [INPUT]: 依赖各个元宇宙区块组件
 * [OUTPUT]: 元宇宙页面
 * [POS]: /metaverse 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

export default function MetaversePage() {
  return (
    <>
      {/* Hero Banner */}
      <MetaverseHero />

      {/* 何为轻量元宇宙 */}
      <MetaverseAbout />

      {/* 能做什么 - 4大功能 */}
      <MetaverseFeatures />

      {/* 为什么需要元宇宙空间 */}
      <MetaverseWhy />

      {/* 4大优势 */}
      <MetaverseAdvantages />

      {/* 全行业案例 */}
      <MetaverseCases />

      {/* UGC创作案例 */}
      <MetaverseUGCCases />

      {/* 生态伙伴招募 */}
      <MetaverseRecruit />

      {/* 关于详情 */}
      <MetaverseAboutDetails />

      {/* 联系我们 */}
      <MetaverseContact />
    </>
  );
}