interface Props {
    children: React.ReactNode;
};
const Page = ({children}: Props) => {
    return (
        <div>
            <nav className="bg-red-500 text-white w-full p-2">
                <p> Navbar this is a modification to test github contributes </p>
                </nav>
            {children}
        </div>
    );
}
export default Page