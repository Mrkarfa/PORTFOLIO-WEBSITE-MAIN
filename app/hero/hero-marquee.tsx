const MarqueeContent = () => (
  // The original HTML structure includes 4 repeated H1 tags. We replicate that here.
  // The text content is made consistent to ensure a seamless loop animation.
  <>
    {Array.from({ length: 4 }).map((_, i) => (
      <h1
        key={i}
        className="flex-shrink-0 whitespace-nowrap px-4 font-display text-[12rem] font-black uppercase leading-[0.85] tracking-[-0.02em] text-white"
      >
        {"Full-Stack Developer &\u00A0Digital Designer &"}
      </h1>
    ))}
  </>
);

const HeroMarquee = () => {
  return (
    <div className="overflow-hidden bg-[#1a1a1a] pt-8 md:pt-12">
      <div className="flex animate-[marquee_40s_linear_infinite]">
        <div className="flex flex-shrink-0 items-center">
          <MarqueeContent />
        </div>
        <div className="flex flex-shrink-0 items-center" aria-hidden="true">
          <MarqueeContent />
        </div>
      </div>
    </div>
  );
};

export default HeroMarquee;
