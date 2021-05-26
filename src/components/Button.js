import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    return <buton  onClick={onClick} style = {{backgroundColor: color}}className='btn'>{text}</buton>
}

Button.defualtProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
