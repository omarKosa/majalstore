import { Navbar } from "./navbar";

interface Props {
    children: React.ReactNode;
};
const Page = ({children}: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            
            {children}
        </div>
    );
}
export default Page