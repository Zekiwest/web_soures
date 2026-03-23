import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 对外提供 EducationCases 组件
 * [POS]: 教育系统页面客户案例区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const cases = [
  {
    name: "越学网校",
    description: "越学网校app有丰富的课程资源，方便用户在线学习。可以根据自己的成绩选择相应的课程内容。",
  },
  {
    name: "品创地产教育",
    description: "创地产教育app是一款线上学习教育软件，平台覆盖了海量优质的学习资源，每天都会实时更新。",
  },
  {
    name: "航海大学",
    description: "航海大学app是大航海科技集团旗下的一款教育App。课程覆盖自学考试、成人高考、网络教育等。",
  },
  {
    name: "专本达",
    description: "专本达是专注统招专升本一站式在线学习平台，致力于为统招专升本考生提供优质服务。",
  },
  {
    name: "轩尔",
    description: "轩尔app是一个专门为企业内部员工学习教育安全普及的平台，为用户提供系统化的安全知识。",
  },
  {
    name: "智途教育",
    description: "智途教育是一款专业的成人教育培训软件，涵盖的考试教学内容非常全面。",
  },
];

export function EducationCases() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            3000+家机构的共同选择
          </h2>
          <p className="text-gray-600">
            满足各行业企业内训、党政单位培训、教育机构培训等多种场景
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <Card key={item.name} className="border-0 bg-white">
              <CardContent className="p-6">
                <p className="mb-4 text-sm text-gray-600">{item.description}</p>
                <p className="font-semibold text-gray-900">—— {item.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}