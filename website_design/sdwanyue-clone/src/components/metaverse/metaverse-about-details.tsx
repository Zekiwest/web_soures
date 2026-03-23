import { Badge } from "@/components/ui/badge";

/**
 * [INPUT]: 依赖 shadcn/ui Badge
 * [OUTPUT]: 对外提供 MetaverseAboutDetails 组件
 * [POS]: 元宇宙页面关于详情区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const coreFeatures = [
  "数字人：Avatar、照片脸部建模、捏脸",
  "场景展示：幻想、孪生复刻、多人在线",
  "真人导览：全程语音导览及管理体系",
  "会议系统：PPT、视频、屏幕共享、群组管理",
  "市场活动：签到、答题、养成、排行、奖励管理等市场活动模块",
  "演唱直播：动作捕捉、语音广播、舞台控制",
  "社交活动：好友、粉丝、关注、留言、语音、动作",
  "游戏娱乐：各种娱乐模块选用和自由创作",
  "数字资产：展览、背包、交易",
  "众创工具：自由创作自己的元宇宙内容",
];

const innovationAdvantages = [
  "Layaverse采用轻量元宇宙模式，主打私域+Web3D，支持继承企业原有资产、支持私域流量无安装、直接启动企业元宇宙、大幅降低元宇宙用户流量成本。",
  "Layaverse由国产3D引擎领导品牌LayaAir打造，与国外引擎底层相比，在数据安全、信创合规、政策合规方面更具显著优势。",
  "Layaverse是中国独有的零代码轻量元宇宙内容创作平台，内置全球前沿的零代码内容创造工具，降低元宇宙制作成本和难度。",
  "Layaverse支持KA、SaaS、PaaS三大服务模式，在完善客户体验、完善自身商业模式层面均有突出优势。",
];

export function MetaverseAboutDetails() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          关于Layaverse
        </h2>

        <div className="mx-auto max-w-4xl space-y-8">
          {/* 简介 */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-gray-600 leading-relaxed">
              Layaverse是知名国产3D引擎提供商北京蓝亚盒子科技有限公司（LAYABOX）研发的中国首个拥有核心自研技术的消费级轻量元宇宙平台，于2022年11月正式上线。经过4年聚焦研发，产品一经发布就受到来自各行各业的广泛认可。作为全球前沿的轻量元宇宙众创平台，Layaverse上线半年内就服务了政务、工业、美妆、酒业、电商、艺术、文旅等领域，如工信部工业元宇宙协同发展组织、南开大学、五粮液集团、芭莎艺术、国际动漫节、广州艺术节等。
            </p>
          </div>

          {/* 基本信息 */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="grid gap-2 text-sm text-gray-600 md:grid-cols-3">
              <p>
                <strong>外文名：</strong>Layaverse
              </p>
              <p>
                <strong>所属公司：</strong>北京蓝亚盒子科技有限公司
              </p>
              <p>
                <strong>注册号：</strong>56611671
              </p>
            </div>
          </div>

          {/* 发展历程 */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              发展历程
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-2">
                <Badge className="h-fit bg-purple-100 text-purple-600">2018</Badge>
                <span>Layaverse开启研发之旅</span>
              </li>
              <li className="flex gap-2">
                <Badge className="h-fit bg-purple-100 text-purple-600">
                  2022.11
                </Badge>
                <span>
                  Layaverse正式上线，标志着中国首个消费级元宇宙平台诞生
                </span>
              </li>
              <li className="flex gap-2">
                <Badge className="h-fit bg-purple-100 text-purple-600">
                  2023.6
                </Badge>
                <span>
                  Layaverse 1.1 版本发布，迭代底层引擎技术、商业模块升级等5大方面
                </span>
              </li>
            </ul>
          </div>

          {/* 核心功能 */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              核心功能
            </h3>
            <ul className="grid gap-2 text-sm text-gray-600 md:grid-cols-2">
              {coreFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1 text-purple-500">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 创新优势 */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              创新优势
            </h3>
            <ul className="space-y-3 text-gray-600">
              {innovationAdvantages.map((adv, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Badge className="mt-0.5 h-fit bg-blue-100 text-blue-600">
                    {index + 1}
                  </Badge>
                  <span>{adv}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 应用领域 */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              应用领域
            </h3>
            <div className="flex flex-wrap gap-2">
              {["政务", "电商", "文旅", "教育", "文娱", "快消", "零售"].map(
                (field) => (
                  <Badge
                    key={field}
                    className="bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700"
                  >
                    {field}
                  </Badge>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}