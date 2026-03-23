import { RideshareHero } from "@/components/rideshare/rideshare-hero";
import { RideshareEcosystem } from "@/components/rideshare/rideshare-ecosystem";
import { RideshareServices } from "@/components/rideshare/rideshare-services";
import { RidesharePlatform } from "@/components/rideshare/rideshare-platform";
import { RideshareTech } from "@/components/rideshare/rideshare-tech";
import { RideshareSecurity } from "@/components/rideshare/rideshare-security";
import { RideshareTeam } from "@/components/rideshare/rideshare-team";
import { RideshareCoverage } from "@/components/rideshare/rideshare-coverage";
import { RideshareContact } from "@/components/rideshare/rideshare-contact";

/**
 * [INPUT]: 依赖各个网约车系统区块组件
 * [OUTPUT]: 网约车系统页面
 * [POS]: /rideshare 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

export default function RidesharePage() {
  return (
    <>
      {/* Hero Banner */}
      <RideshareHero />

      {/* 全闭环生态化解决方案 */}
      <RideshareEcosystem />

      {/* 全场景业务类型 */}
      <RideshareServices />

      {/* 一站式自助服务平台 */}
      <RidesharePlatform />

      {/* 核心技术能力 */}
      <RideshareTech />

      {/* 安全风控体系 */}
      <RideshareSecurity />

      {/* 金牌团队服务 */}
      <RideshareTeam />

      {/* 业务覆盖 */}
      <RideshareCoverage />

      {/* 联系我们 */}
      <RideshareContact />
    </>
  );
}