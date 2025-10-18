

const Main = ({ ActiveComponent }: { ActiveComponent: any }) => {
    return (
        <div className="w-full">
            <div className="">
                {ActiveComponent ? <ActiveComponent /> : (<div>Component not found</div>)}
            </div>
        </div>
    )
}

export default Main;