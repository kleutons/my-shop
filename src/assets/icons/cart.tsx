type IProps = {
    size: number;
}

export function SvgCart({size}:IProps){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1720 1260" height={`${size}px`} width={`${size}px`}>
            <g>
            <polygon fill="currentcolor" points="1714.06,224.68 1397.27,872.46 642.33,870.98 285.9,168.83 5.59,168.83 5.59,12.6 380.12,12.6 735.97,710.29 1305.75,710.29 1534.89,223.73 "/>
            <circle fill="currentcolor" cx="707.56" cy="1124.92" r="123.06"/>
            <circle fill="currentcolor" cx="1281.13" cy="1124.92" r="123.06"/>
            </g>
        </svg>
    )
}