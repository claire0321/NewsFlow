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
  duration-500
  ease-out

  group
  hover:translate-y-1
`;

const CardThumbnail = tw.div`
  flex-[2]
  w-full
  overflow-hidden
`;

const NewsImg = tw.img`
  w-full
  h-full
  object-cover

  transition-transform
  duration-700
  ease-out

  group-hover:scale-105
  `;

const TxtWrap = tw.div<NewsDateProps>`
  absolute
  bottom-0
  left-0
  right-0

  w-full
  h-[40%]

  bg-white

  p-5
  px-7

  flex
  flex-col

  justify-start
  gap-3
  group-hover:overflow-hidden

  transition-all
  duration-500
  ease-out
  
  group-hover:h-[60%]
  ${(props) => !props.imageurl && "h-[60%] group-hover:h-[70%]"}
`;

const Tit = tw.h2<NewsDateProps>`
  text-base
  font-extrabold
  text-black
  leading-tight

  line-clamp-2

  transition-all
  duration-500

  ${(props) => !props.imageurl && "line-clamp-none"}
`;

const Description = tw.h3`
  text-sm
  text-blue-500
  font-medium

  opacity-0
  translate-y-3

  transition-all
  duration-500
  ease-out

  line-clamp-1

  group-hover:opacity-100
  group-hover:translate-y-0
  group-hover:line-clamp-3
`;

const Source = tw.p`
  absolute
  bottom-5
  right-5
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

  transition-transform
  duration-500
  ease-out

  group-hover:scale-110
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
