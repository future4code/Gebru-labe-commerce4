import * as Styled from './styled'

const Label = props => {
    return (
        <Styled.Label fontSize={props.fontSize}>{props.label}</Styled.Label>
    )
}
 
export default Label