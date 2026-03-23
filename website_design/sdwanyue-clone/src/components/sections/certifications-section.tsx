"use client";

/**
 * [INPUT]: 无外部依赖
 * [OUTPUT]: 对外提供 CertificationsSection 组件
 * [POS]: 首页资质认证区（深色背景 + 轮播证书 + 合作伙伴）
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const certifications = [
  { title: "国家高新技术企业证书", img: "https://qiniugw.sdwanyue.com/index/zhengshu1.png" },
  { title: "公司营业执照", img: "https://qiniugw.sdwanyue.com/index/zhengshu2.png" },
  { title: "Gitee 2000/5000 Star", img: "https://qiniugw.sdwanyue.com/index/zhengshu3.png" },
  { title: "系统软件著作权", img: "https://qiniugw.sdwanyue.com/index/zhengshu4.png" },
  { title: "系统软件著作权", img: "https://qiniugw.sdwanyue.com/index/zhengshu5.png" },
  { title: "系统软件著作权", img: "https://qiniugw.sdwanyue.com/index/zhengshu6.png" },
  { title: "系统软件著作权", img: "https://qiniugw.sdwanyue.com/index/zhengshu7.png" },
  { title: "系统软件著作权", img: "https://qiniugw.sdwanyue.com/index/zhengshu8.png" },
];

const partners = [
  { name: "阿里云", img: "https://qiniugw.sdwanyue.com/index/hezuo1.png" },
  { name: "腾讯云", img: "https://qiniugw.sdwanyue.com/index/hezuo2.png" },
  { name: "华为云", img: "https://qiniugw.sdwanyue.com/index/hezuo3.png" },
  { name: "百度智能云", img: "https://qiniugw.sdwanyue.com/index/hezuo4.png" },
  { name: "七牛云", img: "https://qiniugw.sdwanyue.com/index/hezuo5.png" },
  { name: "网易云信", img: "https://qiniugw.sdwanyue.com/index/hezuo6.png" },
  { name: "声网Agora", img: "https://qiniugw.sdwanyue.com/index/hezuo7.png" },
  { name: "即构科技", img: "https://qiniugw.sdwanyue.com/index/hezuo8.png" },
  { name: "网易云信", img: "https://qiniugw.sdwanyue.com/index/hezuo9.png" },
  { name: "容联云通讯", img: "https://qiniugw.sdwanyue.com/index/hezuo10.png" },
  { name: "腾讯直播", img: "https://qiniugw.sdwanyue.com/index/hezuo11.png" },
  { name: "阿里直播", img: "https://qiniugw.sdwanyue.com/index/hezuo12.png" },
];

export function CertificationsSection() {
  return (
    <div
      style={{
        paddingTop: "50px",
        height: "790px",
        background: "url('https://qiniugw.sdwanyue.com/20251122/01/%E8%83%8C%E6%99%AF.png') no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* 标题区域 */}
      <div
        style={{
          marginTop: "25px",
          marginBottom: "46px",
          color: "#FFF",
          textAlign: "center",
          fontSize: "15px",
          fontWeight: 500,
        }}
      >
        <h2
          style={{
            marginBottom: "16px",
            color: "#FFF",
            fontSize: "35px",
            fontWeight: 700,
            lineHeight: "52.5px",
          }}
        >
          多项资质权威认证 安全可信
        </h2>
        <p style={{ opacity: 0.9 }}>——   国家资质   ——</p>
      </div>

      {/* 证书轮播容器 */}
      <div
        style={{
          position: "relative",
          padding: "0 98px",
          margin: "0 auto",
          width: "1200px",
          height: "316px",
          background: "url('https://qiniugw.sdwanyue.com/20251122/01/Group%20361.png') no-repeat",
          backgroundPosition: "bottom center",
          backgroundSize: "1200px 100px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingBottom: "20px",
          }}
        >
          {certifications.slice(0, 4).map((cert, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                color: "#FFF",
                textAlign: "center",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              <img
                src={cert.img}
                alt={cert.title}
                style={{
                  width: "140px",
                  height: "200px",
                  objectFit: "contain",
                  marginBottom: "10px",
                }}
              />
              <span style={{ maxWidth: "140px" }}>{cert.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 合作伙伴标题 */}
      <div
        style={{
          marginTop: "50px",
          marginBottom: "30px",
          color: "#FFF",
          textAlign: "center",
          fontSize: "15px",
          fontWeight: 500,
        }}
      >
        ——   与多家服务商携手合作，深入行业共创价值   ——
      </div>

      {/* 合作伙伴 */}
      <div
        style={{
          margin: "0 auto",
          width: "1200px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          rowGap: "20px",
        }}
      >
        {partners.map((partner, index) => (
          <div
            key={index}
            style={{
              width: "calc(25% - 15px)",
              height: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "4px",
            }}
          >
            <img
              src={partner.img}
              alt={partner.name}
              style={{
                maxWidth: "90%",
                maxHeight: "60px",
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}