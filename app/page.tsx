import tw from "tailwind-styled-components";
import NewsApp from "@/components/NewsApp";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Container = tw.section`
container
mx-auto
px-20
py-15
`;

const Header = tw.header`
w-full
flex
h-[4rem]
px-10
mb-10
gap-5
items-center
`;

function Home() {
    return (
        <Container>
            <Header>
                <Image src={logo} alt="NewsFlow Logo" className="flex-none" />
                <h1 className="text-5xl font-bold flex-auto">NewsFlow</h1>
            </Header>
            <NewsApp />
        </Container>
    );
}

export default Home;
