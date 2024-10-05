import Image from "next/image"

const WhyPartnerWithUS: React.FC = () => {
  return (
    <section className="pt-[120px]">
      <h2>Why partner with us?</h2>
      <section className="pt-[72px] grid gap-[120px]">
        <div className="flex gap-[23px] items-center">
          {/* <Image src={}/> */}
          <Article
            info1="Visibility"
            info2="Brand Awareness"
            title="Amplify Your Brand's Impact"
            text="Partnering with us gives your brand the opportunity to make a lasting impact in the education sector. Align your organization with a meaningful cause that resonates with socially responsible and forward-thinking audiences"
          />
        </div>
      </section>
    </section>
  )
}

interface ArticleProps {
  info1: string
  info2: string
  title: string
  text: string
}

const Article: React.FC<ArticleProps> = ({ info1, info2, title, text }) => {
  const float =
    "px-4 py-3 rounded-[44.98px] border-[1px] border-[#8E9BAE] text-[#8E9BAE] text-sm leading-4"
  return (
    <article className="grid gap-[14px]">
      <div className="flex gap-4">
        <p className={float}>{info1}</p>
        <p className={float}>{info2}</p>
      </div>
      <h2 className="text-[#1A1A1A] text-2xl ">{title}</h2>
      <p className="leading-[32px] text-[#8E9BAE]">{text}</p>
    </article>
  )
}

export default WhyPartnerWithUS
