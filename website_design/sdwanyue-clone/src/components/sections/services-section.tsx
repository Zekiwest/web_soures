import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 对外提供 ServicesSection 组件
 * [POS]: 首页服务保障区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const services = [
  {
    title: "源码出售",
    subtitle: "源码无加密，可二次开发",
    description: "出售在线教育、知识付费、直播带货、多商户商城、医院陪诊、外卖跑腿等源码，源码全开源",
    icon: "https://qiniugw.sdwanyue.com/20251119/05/%E6%BA%90%E7%A0%81icon.png",
  },
  {
    title: "搭建部署",
    subtitle: "分布式部署 高并发不用愁",
    description: "支持快速搭建，分布式部署，提供高并发解决方案、内网搭建部署服务，满足不同机构的使用场景",
    icon: "https://qiniugw.sdwanyue.com/20251119/05/%E6%90%AD%E5%BB%BAicon.png",
  },
  {
    title: "定制开发",
    subtitle: "个性化定制 打造独家特色",
    description: "提供医院陪诊、在线教育、直播商城、外卖跑腿等多种系统定制服务，满足不同行业的个性化需求",
    icon: "https://qiniugw.sdwanyue.com/20251119/05/%E5%AE%9A%E5%88%B6icon.png",
  },
  {
    title: "售后保障",
    subtitle: "专业团队 全程服务",
    description: "提供专业的售后技术支持，包括系统维护、功能升级、bug修复等，确保系统稳定运行",
    icon: "https://qiniugw.sdwanyue.com/20251119/05/%E6%BA%90%E7%A0%81icon.png",
  },
];

const moreServices = [
  {
    title: "APP上架",
    subtitle: "省时更省力 不成功退款",
    description: "苹果/安卓主流商店【华为、小米、oppo、vivo】上架服务，免费修改上架时官方驳回的功能问题",
  },
  {
    title: "资质代办",
    subtitle: "专业办理各类互联网资质证书",
    description: "提供增值电信业务经营许可证、互联网药品信息服务资格证书等资质代办服务，帮助企业合法合规开展线上业务",
  },
  {
    title: "私域部署",
    subtitle: "企业专属私域平台搭建与部署",
    description: "提供私有化部署方案，支持企业自建App、小程序及后台系统，实现数据自主可控、用户私域运营与安全管理",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            实力强劲 为运营商保驾护航
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            用自由灵活、支持定制、高度拓展的系统产品，带给企业极致体验，满足客户消费需求
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-0 bg-white text-center rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className="mx-auto mb-4 w-16 h-16">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#01CF89] font-medium mb-3">
                  {service.subtitle}
                </p>
                <p className="text-sm text-gray-500">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Services */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            万岳科技提供更多服务
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            一站式支持 APP 上架、资质代办和私域部署，助力企业高效上线与合规运营
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {moreServices.map((service) => (
            <Card
              key={service.title}
              className="border border-gray-100 bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#01CF89] font-medium mb-3">
                  {service.subtitle}
                </p>
                <p className="text-sm text-gray-500 mb-4">{service.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-[#01CF89] hover:text-[#01b87a]"
                >
                  立即咨询
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}