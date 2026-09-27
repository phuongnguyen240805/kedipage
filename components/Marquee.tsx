import { TMarqueeProps } from "@/types";
import { TextMarquee } from "@/animation";

export default function Marquee({ title, className }: TMarqueeProps) {
	const isVietnameseDisplay = title === "THIẾT KẾ & PHÁT TRIỂN";
	const fontClass = isVietnameseDisplay
		? "font-sans font-extrabold"
		: "font-FoundersGrotesk font-normal";

	return (
		<TextMarquee baseVelocity="0.7">
			<h1
				className={`${fontClass} bg-marquee border-y border-[#ffffff55] uppercase text-white whitespace-nowrap ${className}`}>
				{title} &nbsp;
			</h1>
			<h1
				className={`${fontClass} bg-marquee border-y border-[#ffffff55] uppercase text-white whitespace-nowrap ${className}`}>
				{title} &nbsp;
			</h1>
		</TextMarquee>
	);
}
