interface PageProps {
    title: string;
    children: React.ReactNode;
}
export function Page({title, children} : PageProps){
    return(
        <div className="min-h-[400px] text-gray-600">
            <h1 className="text-4xl font-bold uppercase mb-10 text-center text-black">{title}</h1>
            <div className="px-2 md:px-10">
             {children}
            </div>
        </div>
    )
}