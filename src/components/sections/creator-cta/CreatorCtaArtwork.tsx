import Image from "next/image";

interface OrnamentProps {
  className: string;
  colorClassName: string;
  mask: string;
  motionClassName: string;
  size: string;
  src: string;
}

function Ornament({ className, colorClassName, mask, motionClassName, size, src }: OrnamentProps) {
  return (
    <div className={className}>
      <div className={`absolute inset-0 ${motionClassName}`}>
        <Image className="object-cover" src={src} alt="" fill sizes={size} />
        <div
          className={`absolute inset-0 mix-blend-hard-light ${colorClassName}`}
          style={{ maskImage: `url('${mask}')`, maskSize: "100% 100%" }}
        />
      </div>
    </div>
  );
}

export function CreatorCtaArtwork() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block" aria-hidden="true">
      <Ornament
        className="absolute left-[calc(50%-816px)] top-[-103px] size-[318px] 2xl:left-[-96px]"
        colorClassName="bg-electric-lime-400"
        mask="/images/hero/mask-pill-large.png"
        motionClassName="creator-cta-float-a"
        size="318px"
        src="/images/hero/ornament-pill.png"
      />
      <Ornament
        className="absolute left-[calc(50%-535px)] top-[6px] size-[170px] -scale-x-100 2xl:left-[185px]"
        colorClassName="bg-shuttle-gray-50"
        mask="/images/hero/mask-pill-small.png"
        motionClassName="creator-cta-float-b"
        size="170px"
        src="/images/hero/ornament-pill.png"
      />
      <Ornament
        className="absolute left-[calc(50%+358px)] top-px size-[185px] 2xl:left-auto 2xl:right-[177px]"
        colorClassName="bg-electric-lime-400"
        mask="/images/hero/mask-cone-small.png"
        motionClassName="creator-cta-float-c"
        size="185px"
        src="/images/hero/ornament-cone-small.png"
      />
      <Ornament
        className="absolute left-[calc(50%+502px)] top-[5px] size-[373px] 2xl:left-auto 2xl:right-[-155px]"
        colorClassName="bg-shuttle-gray-50"
        mask="/images/hero/mask-cone-right.png"
        motionClassName="creator-cta-float-a"
        size="373px"
        src="/images/hero/ornament-cone-right.png"
      />
      <Ornament
        className="absolute left-[calc(50%-758px)] top-[219px] size-[190px] 2xl:left-[-38px]"
        colorClassName="bg-shuttle-gray-50"
        mask="/images/hero/mask-cone-small.png"
        motionClassName="creator-cta-float-c"
        size="190px"
        src="/images/hero/ornament-cone-small.png"
      />
      <Ornament
        className="absolute left-[calc(50%-704px)] top-[297px] size-[345px] 2xl:left-[16px]"
        colorClassName="bg-electric-lime-400"
        mask="/images/hero/mask-cone-left.png"
        motionClassName="creator-cta-float-b"
        size="345px"
        src="/images/hero/ornament-cone-left.png"
      />
      <Ornament
        className="absolute left-[calc(50%+411px)] top-[279px] size-[288px] 2xl:left-auto 2xl:right-[21px]"
        colorClassName="bg-electric-lime-400"
        mask="/images/hero/mask-pill-large.png"
        motionClassName="creator-cta-float-c"
        size="288px"
        src="/images/hero/ornament-pill.png"
      />
    </div>
  );
}
