import * as Styled from './styled'

const Input = props => {
    return (
        <Styled.Input 
        type={props.type}
        width={props.width}
        height={props.height}
        fontSize={props.fontSize}
        onChange={props.onChange} />
    )
}

export default Input