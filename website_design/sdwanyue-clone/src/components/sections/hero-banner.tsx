"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

/**
 * [INPUT]: 依赖 React hooks、shadcn/ui Button
 * [OUTPUT]: 对外提供 HeroBanner 组件
 * [POS]: 首页顶部轮播区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const banners = [
  {
    id: 1,
    bgImage: "https://qiniugw.sdwanyue.com/20251119/%E7%94%BB%E6%9D%BF%202%20%E6%8B%B7%E8%B4%9D.png",
    contentImage: "https://qiniugw.sdwanyue.com/20251119/%E7%BB%84%2012.png",
    type: "image-only",
  },
  {
    id: 2,
    bgImage: "https://qiniugw.sdwanyue.com/20260311/2C312D80044104E26BE51D9784D7BA6B.png",
    textImage: "https://qiniugw.sdwanyue.com/20260311/%E6%96%87%E6%A1%88.png",
    phoneImage: "https://qiniugw.sdwanyue.com/20260311/%E6%89%8B%E6%9C%BA%E4%BA%BA%E7%89%A9.png",
    type: "with-phone",
    buttons: [
      { text: "获取报价", primary: true },
      { text: "立即咨询", primary: false },
    ],
  },
  {
    id: 3,
    bgImage: "https://qiniugw.sdwanyue.com/20250122/%E9%A6%96%E9%A1%B5%E8%83%8C%E6%99%AF.png",
    textImage: "https://qiniugw.sdwanyue.com/20250122/%E9%A6%96%E9%A1%B5%E6%96%87%E6%A1%88.png",
    type: "text-only",
    buttons: [
      { text: "立即咨询", primary: true },
    ],
  },
  {
    id: 4,
    bgImage: "https://edu-qiniu.sdwanyue.com/admin/20221103/86862ef14abbf159d6484fa80ff6a518.png",
    textImage: "https://edu-qiniu.sdwanyue.com/admin/20221103/ca9b4862c910d9e18f544cff2eeafa42.png",
    phoneImage: "https://edu-qiniu.sdwanyue.com/admin/20221103/f0efa1223000a032894290b17ed8ce57.png",
    type: "with-phone",
    buttons: [
      { text: "了解详情", primary: true },
      { text: "查看演示", primary: false },
    ],
  },
  {
    id: 5,
    bgImage: "https://edu-qiniu.sdwanyue.com/admin/20220805/4027fcb4e64f485383b9ab8922200b51.png",
    singleImage: "https://edu-qiniu.sdwanyue.com/20240313/zizhi.png",
    type: "single-image",
  },
  {
    id: 6,
    bgImage: "http://qiniugw.sdwanyue.com/20240422/dingzhi_bg.png",
    textImage: "http://qiniugw.sdwanyue.com/20240422/dingzhi_txt.png",
    phoneImage: "http://qiniugw.sdwanyue.com/20240422/dingzhi_right.png",
    type: "with-phone",
  },
];

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[500px] overflow-hidden md:h-[600px]">
      {/* Slides */}
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${banner.bgImage}')` }}
          />

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 flex items-center">
            {banner.type === "image-only" && banner.contentImage && (
              <div className="flex justify-center items-center w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={banner.contentImage}
                  alt="Banner"
                  className="max-w-full h-auto transform scale-90"
                />
              </div>
            )}

            {banner.type === "single-image" && banner.singleImage && (
              <div className="flex justify-center items-center w-full mt-16">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={banner.singleImage}
                  alt="Banner"
                  className="max-w-full h-auto"
                  style={{ maxHeight: "440px" }}
                />
              </div>
            )}

            {banner.type === "text-only" && banner.textImage && (
              <div className="max-w-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={banner.textImage}
                  alt="Banner"
                  className="max-w-full h-auto mb-8"
                />
                {banner.buttons && (
                  <div className="flex gap-4">
                    {banner.buttons.map((btn, i) => (
                      <Button
                        key={i}
                        size="lg"
                        className={btn.primary
                          ? "bg-[#01CF89] hover:bg-[#01b87a] text-white"
                          : "border border-[#01CF89] text-[#01CF89] bg-transparent hover:bg-[#01CF89]/10"
                        }
                      >
                        {btn.text}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {banner.type === "with-phone" && (
              <div className="flex items-center justify-between w-full">
                <div className="max-w-xl">
                  {banner.textImage && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={banner.textImage}
                      alt="Banner"
                      className="max-w-full h-auto mb-8"
                    />
                  )}
                  {banner.buttons && (
                    <div className="flex gap-4">
                      {banner.buttons.map((btn, i) => (
                        <Button
                          key={i}
                          size="lg"
                          className={btn.primary
                            ? "bg-[#01CF89] hover:bg-[#01b87a] text-white"
                            : "border border-[#01CF89] text-[#01CF89] bg-transparent hover:bg-[#01CF89]/10"
                          }
                        >
                          {btn.text}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
                {banner.phoneImage && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={banner.phoneImage}
                    alt="Phone"
                    className="h-[464px] w-auto object-contain"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
}