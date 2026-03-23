import { HospitalHero } from "@/components/hospital/hospital-hero";
import { HospitalAiFeatures } from "@/components/hospital/hospital-ai-features";
import { HospitalModules } from "@/components/hospital/hospital-modules";
import { HospitalSecurity } from "@/components/hospital/hospital-security";
import { HospitalAdvantages } from "@/components/hospital/hospital-advantages";
import { HospitalSolutions } from "@/components/hospital/hospital-solutions";
import { HospitalStats } from "@/components/hospital/hospital-stats";

/**
 * [INPUT]: 依赖医院系统各区块组件
 * [OUTPUT]: 医院系统页面
 * [POS]: /hospital 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

export default function HospitalPage() {
  return (
    <>
      <HospitalHero />
      <HospitalAiFeatures />
      <HospitalModules />
      <HospitalSecurity />
      <HospitalAdvantages />
      <HospitalSolutions />
      <HospitalStats />
    </>
  );
}