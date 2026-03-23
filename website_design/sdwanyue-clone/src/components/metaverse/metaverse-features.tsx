import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * [INPUT]: 依赖 shadcn/ui Card、Badge
 * [OUTPUT]: 对外提供 MetaverseFeatures 组件
 * [POS]: 元宇宙页面功能展示区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  {
    label: "FUNCTION ONE",
    title: "3D展览展示",
    description:
      "立体化的呈现企业和组织的创新形象、展示产品元素和科技属性",
    images: ["/meta-1-1.jpg", "/meta-1-2.jpg", "/meta-1-3.jpg", "/meta-1-4.jpg"],
  },
  {
    label: "FUNCTION TWO",
    title: "沉浸式商务、会议、社交",
    description:
      "通过个性数字化身，在线上帮助企业和组织完成无比真实的商务、会议、社交环节",
    images: ["/meta-2-1.jpg", "/meta-2-2.jpg", "/meta-2-3.jpg", "/meta-2-4.jpg"],
  },
  {
    label: "FUNCTION THREE",
    title: "交互式沙龙、活动",
    description:
      "提供及时性、趣味性、交互性客户连接形式，提高客户粘性，让用户运营全面突破时间与空间的限制",
    images: ["/meta-3-1.jpg", "/meta-3-2.jpg", "/meta-3-3.jpg", "/meta-3-4.jpg"],
  },
  {
    label: "FUNCTION FOUR",
    title: "自由创作的更多精彩",
    description:
      "UGC编辑器功能强大，可零代码创作各种新场景，随着素材库不断完善，用户的创造空间将越来越大",
    images: ["/meta-4-1.jpg", "/meta-4-2.jpg", "/meta-4-3.jpg", "/meta-4-4.jpg"],
  },
];

export function MetaverseFeatures() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          轻量元宇宙众创平台能做什么
        </h2>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={feature.label}
              className={`grid items-center gap-8 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* 图片展示 */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <Card className="overflow-hidden border-0 shadow-lg">
                  <CardContent className="p-0">
                    {/* 主图 */}
                    <div className="aspect-video bg-gradient-to-br from-purple-400 to-indigo-500" />
                    {/* 缩略图 */}
                    <div className="grid grid-cols-4 gap-2 p-2">
                      {feature.images.map((_, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="aspect-video rounded bg-gradient-to-br from-purple-300 to-indigo-400"
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 文字说明 */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <Badge className="mb-4 bg-purple-100 text-purple-600">
                  {feature.label}
                </Badge>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}