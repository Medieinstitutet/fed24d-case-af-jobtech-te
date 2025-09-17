import { HeroWrap, HeroImage, HeroShade, GlassQuote, HeroContent, HeroTitle } from "../styled/heroStyle";

type Props = {
  imageSrc: string;
  imageAlt?: string;
  title?: string;
  quote?: string;
  author?: string;
  height?: string; 
};

export default function Hero({
  imageSrc,
  imageAlt = "Hero image",
  title = "JobbCentralen",
  quote = "Find work you’ll love — and let the right work find you.",
  author = "JobbCentralen",
  height,
}: Props) {
  return (
    <HeroWrap $height={height}>
      <HeroImage src={imageSrc} alt={imageAlt} />
      <HeroShade />
      <HeroContent>
        <HeroTitle>{title}</HeroTitle>
        <GlassQuote>
          <blockquote>{quote}</blockquote>
          <figcaption>— {author}</figcaption>
        </GlassQuote>
      </HeroContent>
    </HeroWrap>
  );
}
