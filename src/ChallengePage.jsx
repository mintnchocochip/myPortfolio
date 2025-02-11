import SpecialDiv from "./components/borderDiv";
import AnimatedText from "./components/text";

const ChallengePage = ({ ctfName = "CTF NAME", ctfDescription = "" }) => {

    return (
        <div className="grid grid-rows-17 h-[100vh] w-[100vw] p-10 text-center font-neuebit">
            <SpecialDiv className="grid grid-cols-9 row-span-1 p-0 text-xl">
                <SpecialDiv className="col-span-1 flex items-center justify-center text-4xl"><AnimatedText text="ENIGMA" /></SpecialDiv>
                <SpecialDiv className="col-span-5 flex items-center justify-center"></SpecialDiv>
                <SpecialDiv className="col-span-1 flex items-center justify-center"><AnimatedText text="REPORT A BUG" /></SpecialDiv>
                <SpecialDiv className="col-span-1 flex items-center justify-center"><AnimatedText text="LEADERBOARD" /></SpecialDiv>
                <SpecialDiv className="col-span-1 flex items-center justify-center"><AnimatedText text="TEAM INFO" /></SpecialDiv>
            </SpecialDiv>
            <SpecialDiv className="grid grid-cols-4 row-span-4 p-0">
                <SpecialDiv className="grid grid-rows-2 col-span-1 text-4xl">
                    <SpecialDiv className="flex items-center justify-center hover:bg-enigma-green hover:text-black cursor-pointer"><AnimatedText text="BACT TO CTFs" /></SpecialDiv>
                    <SpecialDiv className="flex items-center justify-center"><AnimatedText text="CTF CREATOR" /></SpecialDiv>
                </SpecialDiv>
                <SpecialDiv className="col-span-3 flex items-center justify-center text-[110px] text-enigma-green"><AnimatedText text={ctfName} /></SpecialDiv>
            </SpecialDiv>
            <SpecialDiv className="grid grid-cols-4 row-span-12 text-4xl">
                <SpecialDiv className="col-span-3 p-10 text-start">{ctfDescription}</SpecialDiv>
                <SpecialDiv className="grid grid-rows-6 col-span-1">
                    <div id="div" className="row-span-2 cursor-pointer">
                        <SpecialDiv className="h-full w-full bg-enigma-green text-black flex items-center justify-center flex-col">
                            <AnimatedText text="DOWNLOAD" /><AnimatedText text="CHALLENGE" /><AnimatedText text="FILES" />
                        </SpecialDiv>
                    </div>
                    <SpecialDiv className="row-span-1 flex items-center justify-center text-enigma-green"><AnimatedText text="FLAG" /></SpecialDiv>
                    <SpecialDiv className="row-span-1 flex items-center justify-center hover:bg-enigma-green hover:text-black cursor-pointer"><AnimatedText text="SUBMIT" /></SpecialDiv>
                    <SpecialDiv className="row-span-2 flex flex-col items-center justify-center">
                        <span><AnimatedText text="EASY" /></span>
                        <div className="flex gap-2"><span className="text-enigma-green"><AnimatedText text="100" /></span> <AnimatedText text="POINTS" /></div>
                        <div className="flex gap-2"><AnimatedText text="4" /> <span className="text-enigma-green"><AnimatedText text="SOLVED" /></span></div>
                    </SpecialDiv>
                </SpecialDiv>
            </SpecialDiv>
        </div>
    );
};

export default ChallengePage;
