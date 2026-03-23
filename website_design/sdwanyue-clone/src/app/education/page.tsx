import { EducationHero } from "@/components/education/education-hero";
import { EducationFeatures } from "@/components/education/education-features";
import { EducationFunctions } from "@/components/education/education-functions";
import { EducationMarketing } from "@/components/education/education-marketing";
import { EducationLive } from "@/components/education/education-live";
import { EducationTerminals } from "@/components/education/education-terminals";
import { EducationScenarios } from "@/components/education/education-scenarios";
import { EducationAdvantages } from "@/components/education/education-advantages";
import { EducationCases } from "@/components/education/education-cases";
import { EducationCta } from "@/components/education/education-cta";

/**
 * [INPUT]: 依赖教育系统各区块组件
 * [OUTPUT]: 教育系统页面
 * [POS]: /education 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

export default function EducationPage() {
  return (
    <>
      <EducationHero />
      <EducationFeatures />
      <EducationFunctions />
      <EducationMarketing />
      <EducationLive />
      <EducationTerminals />
      <EducationScenarios />
      <EducationAdvantages />
      <EducationCases />
      <EducationCta />
    </>
  );
}