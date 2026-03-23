"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

/**
 * [INPUT]: 依赖 React hooks、shadcn/ui Button
 * [OUTPUT]: 对外提供 MetaverseHero 组件
 * [POS]: 元宇宙页面顶部 Hero 区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const slides = [
  {
    title: "Layaverse",
    highlight: "卓越的轻量元宇宙众创平台",
  },
  {
    title: "邀请元宇宙事业伙伴",
    highlight: "共享万亿商机",
    description: "Layaverse-轻量元宇宙众创平台代理商火热招募中",
  },
];

export function MetaverseHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[600px] overflow-hidden bg-gray-900 md:h-[700px]">
      {/* 视频背景占位 */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        {/* 装饰粒子效果 */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 animate-pulse rounded-full bg-white/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* 内容 */}
      <div className="container relative mx-auto flex h-full items-center px-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="container mx-auto px-4 text-center">
              <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
                {slide.title}
                {slide.highlight && (
                  <>
                    <br />
                    <strong className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {slide.highlight}
                    </strong>
                  </>
                )}
              </h1>
              {slide.description && (
                <p className="mx-auto max-w-2xl text-lg text-purple-200 md:text-xl">
                  {slide.description}
                </p>
              )}
              <div className="mt-8 flex justify-center gap-4">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-100">
                  立即体验
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  了解更多
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 轮播指示器 */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}