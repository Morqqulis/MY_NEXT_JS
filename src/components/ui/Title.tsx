interface ITitle {
	type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	children?: React.ReactNode
	className?: string
	text?: string
}

const Title: React.FC<ITitle> = ({ type, className, children, text }: ITitle): JSX.Element => {
	const TagName = type as keyof JSX.IntrinsicElements
	return <TagName className={`text-balance ${className}`}>{text}</TagName>
}

export default Title
