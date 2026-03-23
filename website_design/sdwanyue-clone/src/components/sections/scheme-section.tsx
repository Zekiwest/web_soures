"use client";

import { useState } from "react";

/**
 * [INPUT]: 无外部依赖
 * [OUTPUT]: 对外提供 SchemeSection 组件
 * [POS]: 首页解决方案展示区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

// 6个行业的完整数据
const schemeData = [
  {
    id: "education",
    title: "教育培训",
    icon: "https://qiniugw.sdwanyue.com/20251119/04/01/Frame.png",
    desc: "覆盖在线教学、知识付费与考试管理，支持多终端学习与互动教学，助力教育机构高效运营",
    navItems: [
      {
        name: "在线教育系统",
        title: "教育培训解决方案",
        labels: ["直播课堂", "互动教学", "课程管理", "多终端学习"],
        desc: "满足各类线上教学场景，拥有大班课、小班课、互动白板、内容付费等特色功能，提供多项专门针对线上教育的功能，实现线上+线下教育场景的融合",
        companies: [
          "http://qiniugw.sdwanyue.com/index/TC11.png",
          "http://qiniugw.sdwanyue.com/index/TC12.png",
          "http://qiniugw.sdwanyue.com/index/TC13.png",
          "http://qiniugw.sdwanyue.com/index/TC14.png",
        ],
      },
      {
        name: "知识付费系统",
        title: "内容变现解决方案",
        labels: ["内容变现", "社群裂变", "多形式付费", "数据分析"],
        desc: "包含8种内容付费形式和8种营销裂变功能，结合多维度数据统计与丰富的社群助学工具，让知识变现更简单",
        companies: [
          "http://qiniugw.sdwanyue.com/index/TC21.png",
          "http://qiniugw.sdwanyue.com/index/TC22.png",
          "http://qiniugw.sdwanyue.com/index/TC23.png",
          "http://qiniugw.sdwanyue.com/index/TC24.png",
          "http://qiniugw.sdwanyue.com/index/TC25.png",
        ],
      },
      {
        name: "考试答题系统",
        title: "考试答题解决方案",
        labels: ["在线考试", "题库管理", "成绩统计", "多端作答"],
        desc: "通过题库管理、随机组卷、考试监控、自动阅卷、成绩分析等功能，使管理者能够轻松组织考试，学员可随时随地完成答题",
        companies: [
          "http://qiniugw.sdwanyue.com/index/TC31.png",
          "http://qiniugw.sdwanyue.com/index/TC32.png",
          "http://qiniugw.sdwanyue.com/index/TC33.png",
          "http://qiniugw.sdwanyue.com/index/TC34.png",
        ],
      },
    ],
  },
  {
    id: "medical",
    title: "医疗健康",
    icon: "https://qiniugw.sdwanyue.com/20251119/04/01/%E5%8C%BB%E7%96%97%E5%81%A5%E5%BA%B7icon.png",
    desc: "覆盖远程问诊、在线购药与就医陪诊，支持线上问诊、医生预约、药师咨询及院内陪诊，提升就医效率与便利性",
    navItems: [
      {
        name: "互联网医院系统",
        title: "互联网医院解决方案",
        labels: ["在线问诊", "处方购药", "健康管理", "医保支付"],
        desc: "支持线上问诊、门诊预约、处方购药，实现药品快递到家与医保支付，提供家庭医生签约与健康管理服务",
        companies: ["http://qiniugw.sdwanyue.com/index/TC41.png", "http://qiniugw.sdwanyue.com/index/TC42.png"],
      },
      {
        name: "医院陪诊系统",
        title: "就医陪诊解决方案",
        labels: ["陪诊服务", "代办问诊", "预约挂号", "就诊管理"],
        desc: "支持诊前预约与就医陪同功能，提供代挂号、代取药等一站式服务，提升患者就医效率与体验感",
        companies: ["http://qiniugw.sdwanyue.com/index/TC51.png", "http://qiniugw.sdwanyue.com/index/TC52.png"],
      },
      {
        name: "在线问诊系统",
        title: "在线问诊解决方案",
        labels: ["图文问诊", "药师咨询", "在线购药", "健康档案"],
        desc: "患者可图文或语音咨询医生，支持药师在线指导与购药推荐，提升问诊效率，降低就诊成本",
        companies: ["http://qiniugw.sdwanyue.com/index/TC61.png", "http://qiniugw.sdwanyue.com/index/TC62.png"],
      },
    ],
  },
  {
    id: "local-service",
    title: "本地服务与餐饮",
    icon: "https://qiniugw.sdwanyue.com/20251119/04/01/%E6%9C%AC%E5%9C%B0%E6%9C%8D%E5%8A%A1%E4%B8%8E%E9%A4%90%E9%A5%AEicon.png",
    desc: "覆盖同城外卖、跑腿服务与商家入驻，支持多端协同、智能调度与即时配送，助力本地生活服务平台高效运营",
    navItems: [
      {
        name: "同城外卖系统",
        title: "同城外卖解决方案",
        labels: ["多端协同", "智能调度", "即时配送", "商家入驻"],
        desc: "用户端、商户端、骑手端多端互通，智能调度中心实现高效派单，支持外卖、跑腿、上门预约等业务",
        companies: ["http://qiniugw.sdwanyue.com/index/TC71.png", "http://qiniugw.sdwanyue.com/index/TC72.png"],
      },
      {
        name: "同城跑腿系统",
        title: "同城跑腿解决方案",
        labels: ["即时配送", "智能调度", "多模式接单", "订单追踪"],
        desc: "支持帮买、帮送、代取、排队等服务，实时定位与订单追踪功能，提供接单、转单、结算一体化管理",
        companies: ["http://qiniugw.sdwanyue.com/index/TC81.png"],
      },
      {
        name: "多商户商城系统",
        title: "多商户商城解决方案",
        labels: ["多商户入驻", "社交营销", "移动电商", "数据分析"],
        desc: "支持自营与多商户共存的运营模式，内置拼团、优惠券、会员营销等玩法，降低获客成本，提高转化效率",
        companies: ["http://qiniugw.sdwanyue.com/index/TC91.png"],
      },
    ],
  },
  {
    id: "ecommerce",
    title: "电商零售",
    icon: "https://qiniugw.sdwanyue.com/20251119/04/01/%E7%94%B5%E5%95%86%E9%9B%B6%E5%94%AEicon.png",
    desc: "覆盖直播商城、多商户商城与连锁餐饮，支持多端运营、内容营销、私域管理及数字化经营",
    navItems: [
      {
        name: "直播商城系统",
        title: "直播商城解决方案",
        labels: ["直播带货", "短视频电商", "多商户入驻", "内容营销"],
        desc: "集直播、短视频带货、商城运营、社区种草等功能为一体，助力商户实现营销自由",
        companies: ["http://qiniugw.sdwanyue.com/index/TC101.png"],
      },
      {
        name: "多商户商城系统",
        title: "多商户商城解决方案",
        labels: ["多商户商城", "私域电商", "多端运营", "营销系统"],
        desc: "支持自营+多商户入驻的移动商城系统，包含多种营销玩法，助力商家迅速建立私域流量",
        companies: ["http://qiniugw.sdwanyue.com/index/TC102.png"],
      },
      {
        name: "连锁餐饮系统",
        title: "连锁餐饮解决方案",
        labels: ["餐饮管理", "连锁门店", "智慧餐饮", "数字化经营"],
        desc: "为餐饮行业量身定制的高效管理工具，集订单管理、库存控制、员工调度、财务分析等多种功能",
        companies: ["http://qiniugw.sdwanyue.com/index/TC103.png"],
      },
    ],
  },
  {
    id: "government",
    title: "数字政企",
    icon: "https://qiniugw.sdwanyue.com/20251119/04/01/%E6%95%B0%E5%AD%97%E6%94%BF%E4%BC%81icon.png",
    desc: "覆盖企业内训、在线购药与智慧党建，支持多终端管理、在线学习、培训考核与数字化服务",
    navItems: [
      {
        name: "企业内训系统",
        title: "企业内训解决方案",
        labels: ["在线培训", "员工管理", "学习考核", "数据统计"],
        desc: "专业的企业内部员工培训解决方案，支持私有化部署，多功能、多场景、多终端的在线培训学习",
        companies: ["http://qiniugw.sdwanyue.com/index/TC111.png"],
      },
      {
        name: "数字药店系统",
        title: "数字药店解决方案",
        labels: ["在线购药", "药师咨询", "处方配送", "健康管理"],
        desc: "整合了在线药品购买、虚拟药师咨询、处方配送等功能，使患者能够轻松浏览、购买药品",
        companies: ["http://qiniugw.sdwanyue.com/index/TC112.png"],
      },
      {
        name: "智慧党建系统",
        title: "智慧党建解决方案",
        labels: ["党员管理", "在线学习", "党建宣传", "数据统计"],
        desc: "集党员管理、党建宣传和党务工作等为一体，包含学习手册、答题问卷、兑换商城等各项功能",
        companies: ["http://qiniugw.sdwanyue.com/index/TC113.png"],
      },
    ],
  },
  {
    id: "local-life",
    title: "本地生活与出行",
    icon: "https://qiniugw.sdwanyue.com/20251119/04/01/%E6%9C%AC%E5%9C%B0%E7%94%9F%E6%B4%BB%E4%B8%8E%E5%87%BA%E8%A1%8Cicon.png",
    desc: "覆盖同城跑腿、网约车服务与人才招聘，支持多端协同、智能调度、实时定位与招聘管理",
    navItems: [
      {
        name: "同城跑腿系统",
        title: "同城跑腿解决方案",
        labels: ["同城配送", "即时服务", "多端协同", "智能调度"],
        desc: "支持多种配送模式，包含用户端、配送端、配送分站和总后台，支持一键接单抢单/转单求助",
        companies: ["http://qiniugw.sdwanyue.com/index/TC121.png"],
      },
      {
        name: "网约车系统",
        title: "网约车解决方案",
        labels: ["快车专车", "智能调度", "实时定位", "多场景覆盖"],
        desc: "出行产业数字化升级一站式SaaS自助服务平台，支持快车、专车、出租车、城际等多种业务场景",
        companies: ["http://qiniugw.sdwanyue.com/index/TC122.png"],
      },
      {
        name: "人才招聘系统",
        title: "人才招聘解决方案",
        labels: ["招聘管理", "人才匹配", "企业招聘", "智能筛选"],
        desc: "用于猎企招聘业务、HR招聘管理的系统，可按需选择功能模块组合，满足工作中的独特需求",
        companies: ["http://qiniugw.sdwanyue.com/index/TC123.png"],
      },
    ],
  },
];

export function SchemeSection() {
  const [activeSchemeIndex, setActiveSchemeIndex] = useState(0);
  const [activeNavIndex, setActiveNavIndex] = useState(0);

  const currentScheme = schemeData[activeSchemeIndex];
  const currentNav = currentScheme.navItems[activeNavIndex];

  return (
    <div
      style={{
        paddingTop: "60px",
        position: "relative",
        height: "785px",
        backgroundImage: "url('https://qiniugw.sdwanyue.com/20251119/04/%E6%95%99%E8%82%B2%E5%9B%BE.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      {/* 黑色遮罩层 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
          zIndex: 0,
        }}
      />

      {/* 内容层 */}
      <div style={{ position: "relative", zIndex: 10 }}>
        {/* 标题区域 */}
        <div
          style={{
            margin: "0 auto",
            width: "1122px",
            paddingTop: "0",
          }}
        >
          <h2
            style={{
              color: "#FFF",
              fontSize: "35px",
              fontWeight: 700,
              lineHeight: "52.5px",
            }}
          >
            万岳科技提供多种行业解决方案
          </h2>
          <p
            style={{
              marginTop: "16px",
              width: "805px",
              color: "#FFF",
              fontSize: "15px",
              fontWeight: 500,
              lineHeight: "22.5px",
            }}
          >
            从在线教育、知识付费、直播带货、多商户商城等在线销售系统，到外卖、医院陪诊、跑腿、代驾等线上+线下的O2O模式
            <br />
            为企业提供多种业务模式应用解决方案
          </p>
        </div>

        {/* 顶部导航条 */}
        <div
          style={{
            margin: "45px auto 0",
            paddingBottom: "17px",
            width: "1122px",
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #4F5C77",
          }}
        >
          {schemeData.map((scheme, index) => (
            <div
              key={scheme.id}
              onClick={() => {
                setActiveSchemeIndex(index);
                setActiveNavIndex(0);
              }}
              style={{
                flex: 1,
                position: "relative",
                color: "#FFF",
                fontSize: "16px",
                fontWeight: 500,
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              {scheme.title}
              <div
                style={{
                  position: "absolute",
                  bottom: "-17px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: activeSchemeIndex === index ? "100%" : "0%",
                  height: "3px",
                  background: "#FFF",
                  transition: "width 0.8s",
                }}
              />
            </div>
          ))}
        </div>

        {/* 内容容器 - 三列并列布局 */}
        <div style={{ marginTop: "30px" }}>
          <div
            style={{
              margin: "0 auto",
              width: "1200px",
              height: "420px",
              borderRadius: "6px",
              background: "rgba(88, 92, 100, 0.20)",
              backdropFilter: "blur(17.5px)",
              WebkitBackdropFilter: "blur(17.5px)",
              display: "flex",
            }}
          >
            {/* 左侧导航区 */}
            <div
              style={{
                paddingLeft: "24px",
                width: "260px",
                height: "100%",
                backgroundColor: "rgba(88, 92, 100, 0.32)",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "48px",
                  color: "#FFF",
                  fontSize: "20px",
                  fontWeight: 700,
                }}
              >
                <img
                  src={currentScheme.icon}
                  alt={currentScheme.title}
                  style={{ width: "28px", height: "28px", marginRight: "8px" }}
                />
                <span>{currentScheme.title}</span>
              </div>

              <div
                style={{
                  marginTop: "8px",
                  marginBottom: "32px",
                  width: "212px",
                  color: "#F4F4F4",
                  fontSize: "13px",
                }}
              >
                {currentScheme.desc}
              </div>

              {currentScheme.navItems.map((item, index) => (
                <div
                  key={item.name}
                  onClick={() => setActiveNavIndex(index)}
                  style={{
                    marginBottom: "2px",
                    paddingLeft: "16px",
                    width: "212px",
                    height: "52px",
                    backgroundColor: activeNavIndex === index ? "#0F5FFF" : "transparent",
                    color: "#FFF",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "52px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>

            {/* 中间内容区 */}
            <div
              style={{
                paddingTop: "48px",
                paddingLeft: "60px",
                width: "680px",
                height: "100%",
                flexShrink: 0,
              }}
            >
                <div
                  style={{
                    marginBottom: "20px",
                    color: "#FFF",
                    fontSize: "24px",
                    fontWeight: 700,
                  }}
                >
                  {currentNav.title}
                </div>

                <div style={{ marginBottom: "20px", display: "flex" }}>
                  {currentNav.labels.map((label) => (
                    <span
                      key={label}
                      style={{
                        marginRight: "8px",
                        padding: "5px 20px",
                        color: "#FFF",
                        fontSize: "13px",
                        fontWeight: 500,
                        borderRadius: "4px",
                        background: "rgba(222, 232, 250, 0.20)",
                      }}
                    >
                      {label}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    marginBottom: "40px",
                    width: "560px",
                    color: "#FFF",
                    fontSize: "16px",
                    lineHeight: "24px",
                  }}
                >
                  {currentNav.desc}
                </div>

                <div
                  style={{
                    marginTop: "40px",
                    marginBottom: "45px",
                    width: "560px",
                    height: "1px",
                    background: "#585C64",
                  }}
                />

                <div style={{ display: "flex" }}>
                  <a
                    href="#"
                    style={{
                      marginRight: "18px",
                      width: "120px",
                      height: "40px",
                      borderRadius: "4px",
                      background: "#0F5FFF",
                      border: "1px solid transparent",
                      color: "#FFF",
                      fontWeight: 500,
                      lineHeight: "40px",
                      textAlign: "center",
                    }}
                  >
                    立即体验
                  </a>
                  <a
                    href="#"
                    style={{
                      width: "120px",
                      height: "40px",
                      borderRadius: "4px",
                      background: "transparent",
                      border: "1px solid #fff",
                      color: "#FFF",
                      fontWeight: 500,
                      lineHeight: "40px",
                      textAlign: "center",
                    }}
                  >
                    查看详情
                  </a>
                </div>
            </div>

            {/* 行业案例 */}
            <div
              style={{
                width: "260px",
                height: "420px",
                backgroundColor: "rgba(88, 92, 100, 0.32)",
                flexShrink: 0,
              }}
            >
                <div
                  style={{
                    marginTop: "60px",
                    color: "#FFF",
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  行业案例
                </div>
                <div
                  style={{
                    marginTop: "6px",
                    marginBottom: "16px",
                    textAlign: "center",
                    fontSize: 0,
                  }}
                >
                  <img
                    src="https://qiniugw.sdwanyue.com/20251119/04/01/Frame%20%281%29.png"
                    alt=""
                    style={{ width: "10px", height: "10px", display: "inline" }}
                  />
                </div>
                <div style={{ paddingLeft: "36px", width: "260px", height: "200px", fontSize: 0 }}>
                  {currentNav.companies.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      style={{
                        width: "76px",
                        height: "76px",
                        marginRight: "28px",
                        marginBottom: "24px",
                        display: "inline",
                        verticalAlign: "middle",
                      }}
                    />
                  ))}
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}