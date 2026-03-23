import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 美颜SDK页面
 * [POS]: /facegl 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  { title: "智能美颜", description: "AI智能识别，自然美颜效果" },
  { title: "滤镜特效", description: "多种滤镜风格，一键切换" },
  { title: "贴纸表情", description: "丰富贴纸资源，增加趣味" },
  { title: "瘦脸美型", description: "精准面部识别，自然调整" },
];

const advantages = [
  { title: "低延迟", description: "实时渲染，无卡顿体验" },
  { title: "跨平台", description: "支持iOS、Android、Web" },
  { title: "易集成", description: "简单API，快速接入" },
  { title: "高性能", description: "GPU加速，低功耗运行" },
];

export default function FaceglPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-pink-500 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">美颜SDK</h1>
          <p className="mb-8 text-xl text-pink-100">专业级美颜解决方案，轻松打造沉浸式体验</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-pink-600 hover:bg-pink-50">免费试用</Button>
            <Button variant="outline" className="border-white text-white">了解详情</Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">核心功能</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 bg-gray-50 text-center">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">技术优势</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((adv) => (
              <Card key={adv.title} className="border-0 bg-white text-center">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-gray-900">{adv.title}</h3>
                  <p className="text-sm text-gray-600">{adv.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-pink-500 to-purple-600 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">打造专业美颜体验</h2>
        <p className="mb-8 text-pink-100">快速接入，轻松实现专业级美颜效果</p>
        <Button className="bg-white text-pink-600 hover:bg-pink-50">立即咨询</Button>
      </section>
    </>
  );
}