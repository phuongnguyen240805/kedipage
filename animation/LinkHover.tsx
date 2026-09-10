import Link from "next/link";
import { TLinkHoverProps } from "@/types";

export default function LinkHover({ href, title, className }: TLinkHoverProps) {
	return (
		<div>
			<Link
				className={`font-NeueMontreal relative ease-&lsqb;0.19, 1, 0.22, 1&rsqb; before:absolute before:content-[''] before:left-0 text-secondry  before:block before:w-full  before:bg-secondry before:transition before:duration-&lsqb;0.6s&rsqb; after:absolute after:content-[''] after:left-0  after:block after:w-full  after:bg-secondry after:transition after:duration-&lsqb;0.6s&rsqb; before:scale-x-0 before:origin-left after:origin-right after:delay-&lsqb;0.25s&rsqb; hover:before:scale-x-100 hover:before:delay-&lsqb;0.25s&rsqb; hover:after:scale-x-0 hover:after:delay-0 ${className}`}
				href={href}>
				{title}
			</Link>
		</div>
	);
}
