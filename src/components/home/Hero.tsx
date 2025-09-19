import { HeroWrap, HeroImage, HeroShade, GlassQuote, HeroContent } from "../styled/home/heroStyle";

type Props = {
  imageSrc: string;
  imageAlt?: string;
  quote?: string;
  author?: string;
  height?: string;
};

export default function Hero ({
  imageSrc,
  imageAlt = "Hero image",
  quote = "Find work you’ll love — and let the right work find you.",
  author = "JobbCentralen",
  height,
}: Props) {
  return (
    <HeroWrap $height={height}>
      <HeroImage src={imageSrc} alt={imageAlt} />
      <HeroShade />
      <HeroContent>
        <GlassQuote>
          <blockquote>{quote}</blockquote>
          <figcaption>— {author}</figcaption>
        </GlassQuote>
      </HeroContent>
    </HeroWrap>
  );
}
