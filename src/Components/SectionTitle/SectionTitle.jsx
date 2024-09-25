
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center max-w-72 mx-auto my-6">
            <h3 className="text-base text-yellow-600 pb-2 italic">---{subHeading}---</h3>
            <h1 className="uppercase text-xl md:text-3xl border-y-2 py-2">{heading}</h1>
        </div>
    );
};

export default SectionTitle;