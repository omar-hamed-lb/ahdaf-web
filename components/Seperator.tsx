export default function Seperator({
  color,
  forg_color,
}: {
  color: string;
  forg_color: string;
}) {
  const bg_color = color === "white" ? "bg-white" : "bg-[#183966]";

  return (
    <div className={`${bg_color} overflow-hidden`}>
      <div
        className="w-[calc(100%+40px)] h-40 -mx-5 flex items-center justify-center"
        style={{
          WebkitMask: `url(/images/seperator.svg)`,
          WebkitMaskRepeat: "repeat-x",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "auto 100%",
          mask: `url(/images/seperator.svg)`,
          maskRepeat: "repeat-x",
          maskPosition: "center",
          maskSize: "auto 100%",
          backgroundColor: forg_color,
          imageRendering: "crisp-edges",
        }}
      ></div>
    </div>
  );
}
