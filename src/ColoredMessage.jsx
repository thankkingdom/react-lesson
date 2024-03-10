export const ColoredMessage = (props) => {
    //console.log(props);
    // Propsを分割代入
    const { color, children, message } = props;
    //CSS オブジェクト
    const contentStyle = {
        color: color,
        fontSize: "20px"
    };
    return <p style={contentStyle}>{message}{children}</p>
};
