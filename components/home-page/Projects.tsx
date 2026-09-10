// Projects.tsx
"use client";
import { useState } from "react";
import { projectItem } from "@/constants";
import { ProjectCard } from "@/components";
import { motion } from "framer-motion";
import Boderyelow from "../ui/boder-yelow";

export default function Projects() {
  const [hoveredItem, setHoveredItem] = useState<{
    id: number;
    title: string;
  } | null>(null);

  return (
    <section className="w-full rounded-t-[20px] relative">
      <h1 className="text-7xl text-white padding-x font-medium font-NeueMontreal text-secondry pt-10">
        Dự án nổi bật
      </h1>

      {/* Hiển thị chữ to ở giữa */}
      {hoveredItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center"
        >
          <div className="overflow-hidden">
            {hoveredItem.title.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  delay: i * 0.02,
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="text-[165px] leading-none uppercase font-FoundersGrotesk text-about font-bold"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-[30px] gap-y-[50px] padding-x padding-y">
        {projectItem.map((item) => (
          <Boderyelow key={item.id}>
            <ProjectCard
              item={item}
              onHover={(isHovering: boolean) => {
                if (isHovering) {
                  setHoveredItem({ id: item.id, title: item.title });
                } else {
                  setHoveredItem(null);
                }
              }}
            />
          </Boderyelow>
        ))}
      </div>
    </section>
  );
}
