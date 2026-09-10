import Link from "next/link";
import Image from "next/image";
import { Rounded } from "@/components";
import { brand01, brand02, brand03 } from "@/public";

export default function Ratings() {
	return (
		<div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
			{/* Card 1 */}
			<div className="flex items-center justify-center rounded-[10px] bg-marquee relative h-[60vh] sm:h-[50vh]">
				<Image
					src={brand01}
					alt="Brand logo"
					width={150}
					height={150}
				/>
				<div className="absolute bottom-[35px] left-[25px] flex items-center justify-center border border-about px-[12px] py-[8px] cursor-pointer rounded-full">
					<Link
						className="text-[14px] leading-[14px] sm:text-[16px] sm:leading-[16px] text-about uppercase font-normal font-NeueMontreal tracking-wider"
						href="/"
					>
						&copy;2019 - 2024
					</Link>
				</div>
			</div>

			{/* Card 2 */}
			<div className="flex items-center justify-center rounded-[10px] bg-secondry relative h-[60vh] sm:h-[50vh]">
				<Image
					src={brand02}
					alt="Clutch rating"
					width={150}
					height={150}
				/>
				<div className="absolute left-[25px] bottom-[35px] w-fit rounded-[50px] border border-white cursor-pointer">
					<Link
						className="text-[14px] leading-[14px] sm:text-[16px] sm:leading-[16px] font-NeueMontreal text-white uppercase tracking-wider"
						href="/services"
					>
						<Rounded backgroundColor="#fff">
							<p className="z-10 px-[12px] py-[8px] hover:text-black transition-colors">
								rating 5.0 on clutch
							</p>
						</Rounded>
					</Link>
				</div>
			</div>

			{/* Card 3 */}
			<div className="flex items-center justify-center rounded-[10px] bg-secondry relative h-[60vh] sm:h-[50vh]">
				<Image
					src={brand03}
					alt="Business bootcamp"
					width={150}
					height={150}
				/>
				<div className="absolute left-[25px] bottom-[35px] w-fit rounded-[50px] border border-white cursor-pointer">
					<Link
						className="text-[14px] leading-[14px] sm:text-[16px] sm:leading-[16px] font-NeueMontreal text-white uppercase tracking-wider"
						href="/services"
					>
						<Rounded backgroundColor="#fff">
							<p className="z-10 px-[12px] py-[8px] hover:text-black transition-colors">
								business bootcamp alumni
							</p>
						</Rounded>
					</Link>
				</div>
			</div>
		</div>
	);
}