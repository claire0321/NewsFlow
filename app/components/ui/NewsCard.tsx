import tw from "tailwind-styled-components";
import { NewsCardProps } from "@/types/news";

type NewsDateProps = {
    imageurl?: string;
};

const CardContainer = tw.section`
  relative
  overflow-hidden
  flex
  flex-col
  justify-start
  rounded-lg
  rounded-tl-[5vw]
  bg-white
  relative
  h-[25rem]
  shadow-2xl
  transition-all

  group
  hover:translate-y-[-5px]
`;

const CardThumbnail = tw.div`
  flex-[2]
  w-full
  overflow-hidden
  group-hover:flex-[1]
`;

const NewsImg = tw.img`
  w-full
  h-full
  object-cover
  `;

const TxtWrap = tw.div<NewsDateProps>`
  p-5
  px-7
  flex
  flex-[1]
  flex-col
  justify-between
  gap-3

  transition-transform
  duration-500
  translate-y-0
  
  group-hover:flex-[2]
  ${(props) => !props.imageurl && "mt-40"}
`;

const Tit = tw.h2<NewsDateProps>`
  text-base
  font-extrabold
  text-black
  leading-tight
  flex-[1]

  line-clamp-2

  opacity-100
  group-hover:flex-[0.5]

  ${(props) => !props.imageurl && "line-clamp-none"}
`;

const Description = tw.h3`
  text-sm
  text-blue-500
  font-medium

  opacity-0
  line-clamp-1

  group-hover:opacity-100
  group-hover:flex-[1]
  group-hover:line-clamp-4
`;

const Source = tw.p`
  mt-5
  text-xs
  text-gray-500
  text-right
`;

const DateContainer = tw.div`
  absolute
  top-6
  right-6
  w-[3.5rem]
  h-[3.5rem]
  rounded-full
  bg-blue-500
  flex
  items-center
  justify-center
  shadow-xl/50
`;

const NewsDate = tw.div`
  flex
  flex-col
  items-center
  justify-center
  text-white
  font-bold
  leading-none
`;

const DayText = tw.span`
  text-base
`;

const MonthText = tw.span`
  text-xs
  -mt-1
  tracking-widest
`;

// z-[3]
// flex
// flex-col
// items-center
// justify-center
// gap-10
// text-white
// w-full
// p-5
export const HoverBox = tw.div`
absolute

opacity-0
transition
h-full

  group-hover:opacity-100
`;

function NewsCard({
    title,
    description,
    imageUrl,
    source,
    publishedAt,
}: NewsCardProps) {
    const date = new Date(publishedAt);

    const day = String(date.getDate()).padStart(2, "0");

    const month = date
        .toLocaleString("en-US", { month: "short" })
        .toUpperCase();

    return (
        <CardContainer>
            {imageUrl && (
                <CardThumbnail>
                    <NewsImg src={imageUrl} />
                </CardThumbnail>
            )}
            <DateContainer>
                <NewsDate>
                    <DayText>{day}</DayText>
                    <MonthText>{month}</MonthText>
                </NewsDate>
            </DateContainer>

            <TxtWrap imageurl={imageUrl}>
                <Tit imageurl={imageUrl}>{title} </Tit>
                <Description>{description}</Description>
                <Source>{source}</Source>
            </TxtWrap>
        </CardContainer>
    );
}

export default NewsCard;
