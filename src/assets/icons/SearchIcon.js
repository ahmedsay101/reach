export default function SearchIcon(props) {
    return (
        <svg width={props.width ? props.width : "16px"} height={props.height ? props.height : "16px"} viewBox="0 0 64 64">
            <g fill={props.fill ? props.fill : "#111"}>
                <g fill={props.fill ? props.fill : "#111"}>
                    <path fill={props.fill ? props.fill : "#111"} d="M63.22,59.45,47.3,43.53a26.7,26.7,0,1,0-3.77,3.77L59.45,63.22a2.67,2.67,0,0,0,3.77-3.77ZM26.67,48A21.34,21.34,0,1,1,48,26.67,21.36,21.36,0,0,1,26.67,48Z"/>
                </g>
            </g>
        </svg>
    );
}
