// ProjectCard.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function ProjectCard({
	item,
	onHover,
}: {
	item: any;
	onHover: (isHovering: boolean) => void;
}) {
	useEffect(() => {
		const handleMouseEnter = () => onHover(true);
		const handleMouseLeave = () => onHover(false);

		const el = document.getElementById(`card-${item.id}`);
		if (el) {
			el.addEventListener("mouseenter", handleMouseEnter);
			el.addEventListener("mouseleave", handleMouseLeave);
		}

		return () => {
			if (el) {
				el.removeEventListener("mouseenter", handleMouseEnter);
				el.removeEventListener("mouseleave", handleMouseLeave);
			}
		};
	}, [onHover, item.id]);

	return (
		<div id={`card-${item.id}`} className="relative w-full group">
			<Link
				href={item.href}
				className="block rounded-[10px] overflow-hidden cursor-pointer"
			>

				<Image
					src={item.src}
					alt={`${item.title} project`}
					className="w-full object-cover rounded-[10px] group-hover:scale-[1.09] transition-transform duration-&lsqb;1s&rsqb; ease-&lsqb;.4,0,.2,1&rsqb;"
				/>

			</Link>
		</div>
	);
}