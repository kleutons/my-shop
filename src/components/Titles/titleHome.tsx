interface TitleHomeProps {
    title: string;
}
export function TitleHome(props : TitleHomeProps){
    return(
        <h2 className="font-bold text-3xl pt-3 pb-8"> {props.title} </h2>
    )
}