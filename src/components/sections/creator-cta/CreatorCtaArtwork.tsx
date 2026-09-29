import Image from "next/image";

interface OrnamentProps {
  className: string;
  colorClassName: string;
  mask: string;
  size: string;
  src: string;
}

function Ornament({ className, colorClassName, mask, size, src }: OrnamentProps) {
  return (
    <div className={className}>
      <Image className="object-cover" src={src} alt="" fill sizes={size} />
      <div
        className={`absolute inset-0 mix-blend-hard-light ${colorClassName}`}
        style={{ maskImage: `url('${mask}')`, maskSize: "100% 100%" }}
      />
    </div>
  );
}

export function CreatorCtaArtwork() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block" aria-hidden="true">
      <Ornament
        className="absolute left-[calc(50%-847px)] top-[-95px] size-[318px]"
        colorClassName="bg-electric-lime-400"
        mask="/images/hero/mask-pill-large.png"
        size="318px"
        src="/images/hero/ornament-pill.png"
      />
      <Ornament
        className="absolute left-[calc(50%-535px)] top-[18px] size-[170px] -scale-x-100"
        colorClassName="bg-shuttle-gray-50"
        mask="/images/hero/mask-pill-small.png"
        size="170px"
        src="/images/hero/ornament-pill.png"
      />
      <Ornament
        className="absolute left-[calc(50%+358px)] top-[12px] size-[185px]"
        colorClassName="bg-electric-lime-400"
        mask="/images/hero/mask-cone-small.png"
        size="185px"
        src="/images/hero/ornament-cone-small.png"
      />
      <Ornament
        className="absolute left-[calc(50%+555px)] top-[34px] size-[350px]"
        colorClassName="bg-shuttle-gray-50"
        mask="/images/hero/mask-cone-right.png"
        size="350px"
        src="/images/hero/ornament-cone-right.png"
      />
      <Ornament
        className="absolute left-[calc(50%-790px)] top-[235px] size-[190px]"
        colorClassName="bg-shuttle-gray-50"
        mask="/images/hero/mask-cone-small.png"
        size="190px"
        src="/images/hero/ornament-cone-small.png"
      />
      <Ornament
        className="absolute left-[calc(50%-690px)] top-[355px] size-[305px]"
        colorClassName="bg-electric-lime-400"
        mask="/images/hero/mask-cone-left.png"
        size="305px"
        src="/images/hero/ornament-cone-left.png"
      />
      <Ornament
        className="absolute left-[calc(50%+470px)] top-[325px] size-[270px]"
        colorClassName="bg-electric-lime-400"
        mask="/images/hero/mask-pill-large.png"
        size="270px"
        src="/images/hero/ornament-pill.png"
      />
    </div>
  );
}
